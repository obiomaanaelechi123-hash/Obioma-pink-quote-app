const requestWindows = new Map();
const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 12;

function respond(res, status, payload) {
  if (typeof res.status === "function") return res.status(status).json(payload);
  res.writeHead(status, {
    "Cache-Control": "no-store",
    "Content-Type": "application/json; charset=utf-8"
  });
  res.end(JSON.stringify(payload));
}

function getClientAddress(req) {
  const forwarded = req.headers["x-forwarded-for"];
  return typeof forwarded === "string"
    ? forwarded.split(",")[0].trim()
    : req.socket?.remoteAddress || "unknown";
}

function allowRequest(address) {
  const now = Date.now();
  for (const [key, timestamps] of requestWindows) {
    const active = timestamps.filter((timestamp) => now - timestamp < WINDOW_MS);
    if (active.length) requestWindows.set(key, active);
    else requestWindows.delete(key);
  }

  const timestamps = requestWindows.get(address) || [];
  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) return false;
  timestamps.push(now);
  requestWindows.set(address, timestamps);
  return true;
}

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  const origin = req.headers.origin;
  const allowedOrigin = process.env.APP_ORIGIN;
  if (origin && allowedOrigin && origin !== allowedOrigin) {
    return respond(res, 403, { error: "This app origin is not allowed." });
  }
  if (origin && allowedOrigin) {
    res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
    res.setHeader("Vary", "Origin");
  }
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (typeof res.status === "function") return res.status(204).end();
    res.writeHead(204);
    return res.end();
  }
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    return respond(res, 405, { error: "Use POST to ask a question." });
  }
  if (!process.env.GEMINI_API_KEY) {
    return respond(res, 503, { error: "Live AI is not configured yet." });
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return respond(res, 400, { error: "Send the question as JSON." });
    }
  }
  const question = typeof body?.question === "string" ? body.question.trim() : "";
  if (!question || question.length > 500) {
    return respond(res, 400, { error: "Enter a question of 1–500 characters." });
  }
  if (!allowRequest(getClientAddress(req))) {
    res.setHeader("Retry-After", "60");
    return respond(res, 429, { error: "Too many questions right now. Please try again in a minute." });
  }

  const quote = typeof body.quote === "string" ? body.quote.slice(0, 240) : "";
  const context = quote ? `\n\nOptional inspiration from the app: “${quote}”` : "";
  try {
    const providerResponse = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{
              text: "You are OBIOMA, a thoughtful, practical AI assistant. Answer the user's actual question directly, clearly, and helpfully; do not limit yourself to motivational advice. Be honest about uncertainty and ask a brief clarifying question only when essential. Match the user's language. For medical, legal, or financial topics, provide general information and encourage qualified professional advice. For urgent danger or self-harm, respond with empathy and encourage contacting local emergency services or a trusted person immediately."
            }]
          },
          contents: [{
            role: "user",
            parts: [{ text: `${question}${context}` }]
          }],
          generationConfig: {
            maxOutputTokens: 700,
            temperature: 0.6
          }
        }),
        signal: AbortSignal.timeout(20_000)
      }
    );

    if (!providerResponse.ok) {
      console.error(`Gemini request failed with HTTP ${providerResponse.status}.`);
      return respond(res, providerResponse.status === 429 ? 429 : 502, {
        error: providerResponse.status === 429
          ? "The AI service is busy. Please try again shortly."
          : "The AI service could not answer right now."
      });
    }

    const result = await providerResponse.json();
    const answer = result.candidates?.[0]?.content?.parts
      ?.map((part) => part.text)
      .filter(Boolean)
      .join("\n")
      .trim();
    if (!answer) {
      return respond(res, 502, { error: "The AI service returned an empty answer. Please try again." });
    }
    return respond(res, 200, { answer });
  } catch (error) {
    console.error(`Gemini request failed: ${error.name || "unknown error"}.`);
    return respond(res, error.name === "TimeoutError" ? 504 : 502, {
      error: error.name === "TimeoutError"
        ? "The AI took too long to respond. Please try again."
        : "The AI service could not be reached. Check the connection and try again."
    });
  }
};
