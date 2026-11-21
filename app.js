const quotes = [
  { id: "q01", text: "You do not have to see the whole path. Just trust the next small step.", author: "OBIOMA", category: "Motivation", mood: "motivated" },
  { id: "q02", text: "Let the life you are building be more beautiful than the one you are leaving behind.", author: "OBIOMA", category: "Life", mood: "reflective" },
  { id: "q03", text: "Success is showing up for your dream, especially on the quiet days.", author: "OBIOMA", category: "Success", mood: "confident" },
  { id: "q04", text: "Love grows wherever we make room for kindness.", author: "OBIOMA", category: "Love", mood: "loving" },
  { id: "q05", text: "Happiness is sometimes just noticing that this moment is enough.", author: "OBIOMA", category: "Happiness", mood: "happy" },
  { id: "q06", text: "Faith is a small light that still shines when the road feels long.", author: "OBIOMA", category: "Faith", mood: "hopeful" },
  { id: "q07", text: "Your pace is still progress. Keep going in your own time.", author: "OBIOMA", category: "Motivation", mood: "motivated" },
  { id: "q08", text: "A brave beginning does not need to be a perfect one.", author: "OBIOMA", category: "Success", mood: "confident" },
  { id: "q09", text: "Make a home inside yourself, and let every day begin there.", author: "OBIOMA", category: "Life", mood: "calm" },
  { id: "q10", text: "The best kind of love lets both hearts become more themselves.", author: "OBIOMA", category: "Love", mood: "loving" },
  { id: "q11", text: "Joy has a way of finding us when we leave the door open.", author: "OBIOMA", category: "Happiness", mood: "happy" },
  { id: "q12", text: "Even in the waiting, something good can be taking root.", author: "OBIOMA", category: "Faith", mood: "hopeful" },
  { id: "q13", text: "You are allowed to begin again as many times as it takes.", author: "OBIOMA", category: "Motivation", mood: "motivated" },
  { id: "q14", text: "Measure success by how honestly you showed up for what matters.", author: "OBIOMA", category: "Success", mood: "confident" },
  { id: "q15", text: "Some chapters ask us to bloom; others ask us to grow roots.", author: "OBIOMA", category: "Life", mood: "reflective" },
  { id: "q16", text: "To love someone well is to keep choosing tenderness.", author: "OBIOMA", category: "Love", mood: "loving" },
  { id: "q17", text: "Give yourself credit for the things nobody else noticed.", author: "OBIOMA", category: "Happiness", mood: "grateful" },
  { id: "q18", text: "You can walk forward with questions and still call it faith.", author: "OBIOMA", category: "Faith", mood: "hopeful" },
  { id: "q19", text: "Small steps still move you closer to a life that feels like yours.", author: "OBIOMA", category: "Motivation", mood: "motivated" },
  { id: "q20", text: "Let your definition of success include peace of mind.", author: "OBIOMA", category: "Success", mood: "calm" },
  { id: "q21", text: "Life gets softer when you stop asking every day to be extraordinary.", author: "OBIOMA", category: "Life", mood: "reflective" },
  { id: "q22", text: "Let love be the kind of courage you carry into the world.", author: "OBIOMA", category: "Love", mood: "loving" },
  { id: "q23", text: "You can be a work in progress and still be proud of yourself.", author: "OBIOMA", category: "Happiness", mood: "happy" },
  { id: "q24", text: "Hold on to hope; the story is still unfolding.", author: "OBIOMA", category: "Faith", mood: "hopeful" },
  { id: "q25", text: "Show up for yourself today. That is a powerful place to start.", author: "OBIOMA", category: "Motivation", mood: "motivated" },
  { id: "q26", text: "A little consistency can take you further than a perfect plan.", author: "OBIOMA", category: "Success", mood: "confident" },
  { id: "q27", text: "You are not behind. Your life is unfolding in its own season.", author: "OBIOMA", category: "Life", mood: "calm" },
  { id: "q28", text: "The smallest act of care can change the shape of someone's day.", author: "OBIOMA", category: "Love", mood: "grateful" },
  { id: "q29", text: "There is room for joy, even before everything is figured out.", author: "OBIOMA", category: "Happiness", mood: "happy" },
  { id: "q30", text: "Trust the quiet strength that has carried you this far.", author: "OBIOMA", category: "Faith", mood: "hopeful" },
  { id: "q31", text: "You can take one slow breath before you decide what comes next.", author: "OBIOMA", category: "Life", mood: "calm" },
  { id: "q32", text: "Rest your shoulders. You do not have to solve everything this minute.", author: "OBIOMA", category: "Motivation", mood: "calm" },
  { id: "q33", text: "Let yourself enjoy the good moment without waiting for it to pass.", author: "OBIOMA", category: "Happiness", mood: "happy" },
  { id: "q34", text: "Your laughter belongs here, even on an ordinary day.", author: "OBIOMA", category: "Life", mood: "happy" },
  { id: "q35", text: "A new page can begin before the old story makes sense.", author: "OBIOMA", category: "Faith", mood: "hopeful" },
  { id: "q36", text: "There is still kindness ahead that you have not met yet.", author: "OBIOMA", category: "Love", mood: "hopeful" },
  { id: "q37", text: "Name one small thing that made today gentler, and let it count.", author: "OBIOMA", category: "Happiness", mood: "grateful" },
  { id: "q38", text: "You can be thankful for how far you have come and still want more.", author: "OBIOMA", category: "Love", mood: "grateful" },
  { id: "q39", text: "You have learned things that the version of you from last year needed.", author: "OBIOMA", category: "Success", mood: "confident" },
  { id: "q40", text: "Trust your voice. You have earned the right to take up space.", author: "OBIOMA", category: "Motivation", mood: "confident" },
  { id: "q41", text: "The first step does not need to be impressive. It only needs to be yours.", author: "OBIOMA", category: "Motivation", mood: "motivated" },
  { id: "q42", text: "Start where you are, with the energy you have today.", author: "OBIOMA", category: "Success", mood: "motivated" },
  { id: "q43", text: "Let your care for others begin with a little gentleness for yourself.", author: "OBIOMA", category: "Love", mood: "loving" },
  { id: "q44", text: "Love does not ask you to disappear to make somebody else comfortable.", author: "OBIOMA", category: "Life", mood: "loving" },
  { id: "q45", text: "A quiet season is not proof that you have been forgotten.", author: "OBIOMA", category: "Life", mood: "lonely" },
  { id: "q46", text: "One kind hello can be the beginning of a new connection.", author: "OBIOMA", category: "Love", mood: "lonely" },
  { id: "q47", text: "You do not have to make sense of your sadness to deserve comfort.", author: "OBIOMA", category: "Life", mood: "sad" },
  { id: "q48", text: "A heavy day is something you are having, not all that you are.", author: "OBIOMA", category: "Happiness", mood: "sad" },
  { id: "q49", text: "Come back to this breath. This moment is smaller than the worry.", author: "OBIOMA", category: "Faith", mood: "anxious" },
  { id: "q50", text: "You can take the next decision one piece at a time.", author: "OBIOMA", category: "Motivation", mood: "anxious" },
  { id: "q51", text: "Pausing is part of the journey, not a reason to feel behind.", author: "OBIOMA", category: "Life", mood: "tired" },
  { id: "q52", text: "You are allowed to rest before you have finished everything.", author: "OBIOMA", category: "Motivation", mood: "tired" },
  { id: "q53", text: "Look back with kindness. You were learning as you went.", author: "OBIOMA", category: "Life", mood: "reflective" },
  { id: "q54", text: "A quiet question can help you hear what matters most.", author: "OBIOMA", category: "Faith", mood: "reflective" }
];

const categories = [
  { name: "Success", color: "#b58b4b", icon: "↗" },
  { name: "Love", color: "#c27b72", icon: "♡" },
  { name: "Life", color: "#829174", icon: "✳" },
  { name: "Happiness", color: "#c5a353", icon: "☼" },
  { name: "Faith", color: "#8c83a5", icon: "✧" },
  { name: "Motivation", color: "#74959a", icon: "➝" }
];

const moods = [
  { name: "calm", color: "#81968b", icon: "☼" },
  { name: "happy", color: "#c5a353", icon: "☺" },
  { name: "hopeful", color: "#8c83a5", icon: "✧" },
  { name: "grateful", color: "#b58b4b", icon: "♡" },
  { name: "confident", color: "#74959a", icon: "↗" },
  { name: "motivated", color: "#b88157", icon: "➝" },
  { name: "loving", color: "#c27b72", icon: "♡" },
  { name: "lonely", color: "#82968e", icon: "☾" },
  { name: "sad", color: "#8192a3", icon: "☁" },
  { name: "anxious", color: "#8f91a0", icon: "◇" },
  { name: "tired", color: "#a18f7d", icon: "☾" },
  { name: "reflective", color: "#a08766", icon: "✳" }
];

const lessons = {
  calm: { title: "Make room for a breath", takeaway: "A brief pause will not solve every problem, but it can give you a kinder place to begin again.", question: "What is one thing you can set down for a moment?", steps: ["Let your shoulders soften.", "Follow one gentle breath.", "Choose just the next small step."] },
  happy: { title: "Let joy be enough", takeaway: "You do not have to wait for a perfect day to notice a good moment. Let the small joys count.", question: "What is one small thing that brought you a little joy today?", steps: ["Notice what is already good.", "Let yourself enjoy it without rushing.", "Carry that small warmth with you."] },
  hopeful: { title: "Keep a little light", takeaway: "Hope does not ask you to know how everything ends. It is the choice to stay open to what might still grow.", question: "What is something you hope to welcome into your life?", steps: ["You do not need all the answers.", "Leave room for a new beginning.", "Take one step toward possibility."] },
  grateful: { title: "Notice what is here", takeaway: "Gratitude is not pretending that everything is easy. It is also making room to notice what is holding you up.", question: "Who or what would you like to thank, even quietly?", steps: ["Find one thing you can appreciate.", "Give it your attention for a moment.", "Let that appreciation be enough."] },
  confident: { title: "Remember your own strength", takeaway: "Confidence can be quiet. It grows as you keep your promises to yourself and let your voice take up space.", question: "What is one thing you have handled that you once thought you could not?", steps: ["Remember how much you have learned.", "Give your own voice a little room.", "Move forward without needing perfection."] },
  motivated: { title: "Begin where you are", takeaway: "Momentum often follows the first small action. Pick something gentle enough to begin right where you are.", question: "What is a tiny first step you could take today?", steps: ["Make the step smaller than your worry.", "Start with what is in front of you.", "Let beginning be the win."] },
  loving: { title: "Start with a little kindness", takeaway: "Care is something you can practice in small ways: in how you listen, how you speak, and how you treat yourself.", question: "What would a kinder response to yourself sound like?", steps: ["Make room for a softer answer.", "Offer the patience you would offer a friend.", "Let care include you, too."] },
  lonely: { title: "Leave a door open", takeaway: "Feeling alone can be hard to carry. A small moment of reaching out may be a beginning, not a burden.", question: "Who might you feel comfortable sending a simple hello to?", steps: ["You deserve connection and kindness.", "Think of one safe person or place.", "Reach out in a way that feels manageable."] },
  sad: { title: "Be gentle with this day", takeaway: "You do not have to rush a difficult feeling away. Let someone you trust know if you need more support.", question: "What would help you feel a little more cared for today?", steps: ["You are allowed to feel what you feel.", "You do not have to carry it all alone.", "Choose one gentle thing for yourself."] },
  anxious: { title: "Return to right now", takeaway: "If it feels comfortable, notice the ground beneath you and take a few slow breaths. If worry feels overwhelming, reach out to someone you trust.", question: "What is one thing you can see, hear, or feel right now?", steps: ["Notice where your feet meet the ground.", "Name one thing that is here with you.", "Take the next moment one breath at a time."] },
  tired: { title: "Rest is allowed", takeaway: "Rest is a real part of caring for yourself, not a prize you must earn by finishing everything.", question: "What is one responsibility you could pause or make easier?", steps: ["Notice what your body might need.", "Choose a small way to rest.", "Continue when you have a little more room."] },
  reflective: { title: "Look back with kindness", takeaway: "Reflection is not a test. You can learn from the past while remembering that you were doing the best you could with what you knew.", question: "What did you learn about yourself in a recent season?", steps: ["Remember what that moment asked of you.", "Notice one thing you understand now.", "Carry the lesson, not the blame."] }
};

const GENERATED_QUOTE_COUNT = 1_000_000;
const QUOTES_PER_PAGE = 24;
const quoteIngredients = {
  qualities: ["quiet courage", "self-trust", "patience", "hope", "inner strength", "kindness", "confidence", "peace", "curiosity", "purpose"],
  possibilities: ["grow roots", "find its voice", "become steadier", "open new doors", "weather change", "bloom again", "shape a fresh start", "shine through uncertainty", "deepen", "guide you forward"],
  practices: ["listen to what you need", "take the next gentle step", "make room for rest", "speak to yourself kindly", "ask someone you trust for support", "let go of what you cannot control", "return to this breath", "notice what is working", "try again without demanding perfection", "honor the pace you can manage"],
  moments: ["breath", "moment", "kind choice", "small step", "new beginning", "quiet pause", "open door", "gentle reminder", "honest conversation", "fresh morning"],
  reminders: ["remember that progress can be quiet", "give yourself permission to begin again", "make space for what matters", "trust that change takes time", "notice what this moment can teach you", "treat your effort with respect", "let hope stay a little longer", "welcome support when it is offered", "keep your own wellbeing in the picture", "choose a gentler next step"]
};
const moodContexts = {
  calm: "a slow day",
  happy: "a bright day",
  hopeful: "an uncertain day",
  grateful: "an ordinary day",
  confident: "a day of change",
  motivated: "a hard day",
  loving: "a day spent caring for others",
  lonely: "a day of distance",
  sad: "a heavy day",
  anxious: "a day filled with unknowns",
  tired: "a low-energy day",
  reflective: "a day of looking inward"
};
const moodCategories = {
  calm: "Life",
  happy: "Happiness",
  hopeful: "Faith",
  grateful: "Happiness",
  confident: "Success",
  motivated: "Motivation",
  loving: "Love",
  lonely: "Life",
  sad: "Life",
  anxious: "Faith",
  tired: "Life",
  reflective: "Life"
};
const generatedSearchTerms = [
  ...Object.values(quoteIngredients).flat(),
  ...Object.values(moodContexts),
  ...Object.values(moodCategories),
  ...moods.map(({ name }) => name),
  "your", "can", "as", "you", "one", "at", "a", "time", "while", "even", "on", "obioma", ".", "—"
].map((term) => term.toLowerCase());
const quoteByStaticId = new Map(quotes.map((quote) => [quote.id, quote]));

const storageKey = "obioma-favorites";
const legacyStorageKey = "obiomaSaved";
const reflectionsStorageKey = "obioma-private-reflections";
const homePage = document.querySelector("#home-page");
const favoritesPage = document.querySelector("#favorites-page");
const quoteGrid = document.querySelector("#quote-grid");
const favoritesGrid = document.querySelector("#favorites-grid");
const searchInput = document.querySelector("#quote-search");
const favoriteSearchInput = document.querySelector("#favorite-search");
const toast = document.querySelector("#toast");
let activeCategory = "All";
let activeMood = "All";
let quotePage = 1;
let currentQuote = getDailyQuote();
let toastTimeout;
let lessonInterval = 0;
let lessonQuote = null;
let lessonStepIndex = 0;
let lessonReturnFocus = null;
let reflections = readReflections();

function getDailyQuote() {
  const today = new Date();
  const dayNumber = Math.floor(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) / 86400000);
  const index = ((dayNumber * 7919) % GENERATED_QUOTE_COUNT + GENERATED_QUOTE_COUNT) % GENERATED_QUOTE_COUNT;
  return getGeneratedQuote(index);
}

function getGeneratedQuote(index) {
  const mood = moods[index % moods.length].name;
  const combination = Math.floor(index / moods.length);
  const quality = quoteIngredients.qualities[combination % 10];
  const possibility = quoteIngredients.possibilities[Math.floor(combination / 10) % 10];
  const practice = quoteIngredients.practices[Math.floor(combination / 100) % 10];
  const moment = quoteIngredients.moments[Math.floor(combination / 1_000) % 10];
  const reminder = quoteIngredients.reminders[Math.floor(combination / 10_000) % 10];

  return {
    id: `g${index}`,
    text: `Your ${quality} can ${possibility} as you ${practice}, one ${moment} at a time, while you ${reminder} — even on ${moodContexts[mood]}.`,
    author: "OBIOMA",
    category: moodCategories[mood],
    mood
  };
}

function getQuoteById(id) {
  const savedQuote = quoteByStaticId.get(id);
  if (savedQuote) return savedQuote;
  if (typeof id !== "string" || !/^g\d+$/.test(id)) return null;
  const index = Number(id.slice(1));
  return Number.isSafeInteger(index) && index >= 0 && index < GENERATED_QUOTE_COUNT
    ? getGeneratedQuote(index)
    : null;
}

function getRandomQuote(mood = "All") {
  if (mood === "All") return getGeneratedQuote(Math.floor(Math.random() * GENERATED_QUOTE_COUNT));
  const moodIndex = moods.findIndex((item) => item.name === mood);
  if (moodIndex === -1) return getRandomQuote();
  const combinationCount = Math.floor((GENERATED_QUOTE_COUNT - 1 - moodIndex) / moods.length) + 1;
  const combination = Math.floor(Math.random() * combinationCount);
  const index = combination * moods.length + moodIndex;
  return getGeneratedQuote(index);
}

function getRecommendedMood() {
  const counts = new Map(moods.map(({ name }) => [name, 0]));
  for (const id of favorites) {
    const mood = getQuoteById(id)?.mood;
    if (mood && counts.has(mood)) counts.set(mood, counts.get(mood) + 1);
  }

  const recommended = [...counts].sort((a, b) => b[1] - a[1])[0];
  return recommended?.[1] > 0 ? recommended[0] : currentQuote.mood;
}

function generatedQuotesMayMatch(query) {
  if (!query) return true;
  return query.split(/\s+/).every((word) => generatedSearchTerms.some((term) => term.includes(word)));
}

function readFavorites() {
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved !== null) {
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? [...new Set(parsed.filter((id) => getQuoteById(id))) ] : [];
    }

    const legacy = localStorage.getItem(legacyStorageKey);
    if (!legacy) return [];
    const parsedLegacy = JSON.parse(legacy);
    if (!Array.isArray(parsedLegacy)) return [];
    return parsedLegacy
      .map((item) => {
        const text = Array.isArray(item) ? item[0] : item?.text;
        return quotes.find((quote) => quote.text === text)?.id;
      })
      .filter(Boolean);
  } catch {
    return [];
  }
}

function readReflections() {
  try {
    const saved = localStorage.getItem(reflectionsStorageKey);
    if (!saved) return {};
    const parsed = JSON.parse(saved);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

let favorites = readFavorites();

function saveFavorites() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(favorites));
    return true;
  } catch {
    showToast("Your browser couldn't save this change. Check your storage settings.");
    return false;
  }
}

function formatDate(date, options) {
  return new Intl.DateTimeFormat(undefined, options).format(date);
}

function initializeDates() {
  const now = new Date();
  document.querySelector("#topbar-date").textContent = formatDate(now, { weekday: "long", month: "long", day: "numeric" });
  document.querySelector("#daily-date").textContent = formatDate(now, { month: "short", day: "numeric", year: "numeric" });
}

function categoryIcon(category) {
  return categories.find((item) => item.name === category)?.icon || "✳";
}

function renderCategories() {
  const categoryNav = document.querySelector("#category-nav");
  categoryNav.innerHTML = moods.map(({ name, color, icon }) => `
    <button class="category-link" type="button" data-mood-filter="${name}">
      <span class="category-dot" style="--dot-color:${color}" aria-hidden="true"></span>
      <span>${name.charAt(0).toUpperCase()}${name.slice(1)}</span>
      <span class="category-symbol" aria-hidden="true">${icon}</span>
    </button>
  `).join("");

  document.querySelector("#filter-row").innerHTML = ["All", ...categories.map(({ name }) => name)].map((name) => `
    <button class="filter-chip" type="button" data-category="${name}">${name}</button>
  `).join("");
  document.querySelector("#mood-filter-row").innerHTML = ["All moods", ...moods.map(({ name }) => name)].map((name) => `
    <button class="mood-chip" type="button" data-mood-filter="${name}" aria-pressed="${name === activeMood}">
      ${name === "All moods" ? name : `${moods.find((mood) => mood.name === name).icon} ${name.charAt(0).toUpperCase()}${name.slice(1)}`}
    </button>
  `).join("");
}

function updateCategoryButtons() {
  document.querySelectorAll("[data-category]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.category === activeCategory);
    button.setAttribute("aria-pressed", String(button.dataset.category === activeCategory));
  });
  document.querySelectorAll("[data-mood-filter]").forEach((button) => {
    const mood = button.dataset.moodFilter === "All moods" ? "All" : button.dataset.moodFilter;
    button.classList.toggle("is-active", mood === activeMood);
    button.setAttribute("aria-pressed", String(mood === activeMood));
  });
}

function renderDailyQuote() {
  document.querySelector("#daily-quote").textContent = `“${currentQuote.text}”`;
  document.querySelector("#daily-author").textContent = `— ${currentQuote.author}`;
  document.querySelector("#daily-category").textContent = `${categoryIcon(currentQuote.category)}  ${currentQuote.category}`;
  const saveButton = document.querySelector("#daily-save");
  const isSaved = favorites.includes(currentQuote.id);
  saveButton.classList.toggle("is-saved", isSaved);
  saveButton.setAttribute("aria-pressed", String(isSaved));
  saveButton.setAttribute("aria-label", isSaved ? "Remove today's quote from favorites" : "Save today's quote");
  const recommendedMood = getRecommendedMood();
  document.querySelector("#smart-note").textContent = favorites.length
    ? `✳ Picked for your ${recommendedMood} side, based on the quotes you keep.`
    : `✳ A little ${recommendedMood} reminder, picked just for you.`;
}

function createQuoteCard(quote, favoriteView = false) {
  const isSaved = favorites.includes(quote.id);
  const card = document.createElement("article");
  card.className = `quote-card${favoriteView ? " favorite-quote-card" : ""}`;
  card.innerHTML = `
    <div class="quote-card-top">
      <span class="quote-card-category">${categoryIcon(quote.category)} &nbsp;${quote.category}</span>
      <button class="quote-card-heart${isSaved ? " is-saved" : ""}" type="button" data-action="favorite" data-id="${quote.id}" aria-label="${isSaved ? "Remove from" : "Add to"} favorites" aria-pressed="${isSaved}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.9c0 4.7-8.8 10-8.8 10s-8.8-5.3-8.8-10a4.6 4.6 0 0 1 8.8-1.8 4.6 4.6 0 0 1 8.8 1.8Z" /></svg>
      </button>
    </div>
    <p class="quote-card-text">“${quote.text}”</p>
    <div class="quote-card-bottom">
      <span class="quote-card-author">— ${quote.author} · ${quote.mood}</span>
      <span class="quote-card-actions">
        <button class="quote-card-watch" type="button" data-action="lesson" data-id="${quote.id}" aria-label="Watch the ${quote.mood} lesson for this quote">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 10 6-10 6V6Z" /></svg>
        </button>
        <button class="quote-card-share" type="button" data-action="share" data-id="${quote.id}" aria-label="Share quote">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="2.5" /><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="19" r="2.5" /><path d="m8.2 10.8 7.6-4.6m-7.6 7 7.6 4.6" /></svg>
        </button>
      </span>
    </div>
  `;
  return card;
}

function renderQuotes(resetPage = true) {
  if (resetPage) quotePage = 1;
  const query = searchInput.value.trim().toLowerCase();
  const matchQuote = (quote) => {
    const matchesCategory = activeCategory === "All" || quote.category === activeCategory;
    const matchesMood = activeMood === "All" || quote.mood === activeMood;
    const matchesQuery = `${quote.text} ${quote.author} ${quote.category} ${quote.mood}`.toLowerCase().includes(query);
    return matchesCategory && matchesMood && matchesQuery;
  };
  const matches = [];
  const resultLimit = quotePage * QUOTES_PER_PAGE;
  const total = quotes.length + GENERATED_QUOTE_COUNT;
  const canSearchGenerated = generatedQuotesMayMatch(query);
  let cursor = 0;

  while (cursor < total && matches.length < resultLimit) {
    if (cursor >= quotes.length && query && !canSearchGenerated) {
      cursor = total;
      break;
    }

    const quote = cursor < quotes.length ? quotes[cursor] : getGeneratedQuote(cursor - quotes.length);
    if (matchQuote(quote)) matches.push(quote);
    cursor += 1;
  }

  quoteGrid.replaceChildren(...matches.map((quote) => createQuoteCard(quote)));
  document.querySelector("#empty-search").hidden = matches.length > 0;
  document.querySelector("#clear-search").hidden = query.length === 0;
  document.querySelector("#load-more").hidden = matches.length === 0 || cursor >= total;
  updateCategoryButtons();
}

function renderFavorites() {
  const query = favoriteSearchInput.value.trim().toLowerCase();
  const savedQuotes = favorites
    .map((id) => getQuoteById(id))
    .filter(Boolean);
  const matches = savedQuotes.filter((quote) => `${quote.text} ${quote.author} ${quote.category} ${quote.mood}`.toLowerCase().includes(query));
  favoritesGrid.replaceChildren(...matches.map((quote) => createQuoteCard(quote, true)));
  document.querySelector("#empty-favorites").hidden = savedQuotes.length > 0;
  document.querySelector("#empty-favorite-search").hidden = savedQuotes.length === 0 || matches.length > 0;
  document.querySelector("#favorites-subtitle").textContent = savedQuotes.length === 1
    ? "One little reminder, saved just for you."
    : `${savedQuotes.length} little ${savedQuotes.length === 1 ? "reminder" : "reminders"}, saved just for you.`;
  document.querySelector("#clear-favorite-search").hidden = query.length === 0;
}

function updateFavoriteCounts() {
  document.querySelector("#favorite-count").textContent = String(favorites.length);
  document.querySelector("#topbar-favorite-count").textContent = String(favorites.length);
}

function toggleFavorite(id) {
  const quote = getQuoteById(id);
  if (!quote) return;
  const wasSaved = favorites.includes(id);
  favorites = wasSaved ? favorites.filter((favoriteId) => favoriteId !== id) : [...favorites, id];
  const saved = saveFavorites();
  updateFavoriteCounts();
  renderDailyQuote();
  renderQuotes(false);
  renderFavorites();
  if (saved) showToast(wasSaved ? "Removed from your favorites." : "Saved to your favorites.");
}

function renderLessonStep() {
  const lesson = lessons[lessonQuote.mood];
  const steps = [lessonQuote.text, ...lesson.steps];
  document.querySelector("#lesson-step-count").textContent = `A LITTLE LESSON · ${lessonStepIndex + 1} OF ${steps.length}`;
  document.querySelector("#lesson-step").textContent = steps[lessonStepIndex];
  document.querySelectorAll("#lesson-progress span").forEach((bar, index) => {
    bar.classList.toggle("is-current", index <= lessonStepIndex);
  });
}

function setLessonPlaying(playing) {
  const dialog = document.querySelector(".lesson-dialog");
  const button = document.querySelector("#lesson-play");
  window.clearInterval(lessonInterval);
  lessonInterval = 0;
  dialog.classList.toggle("is-paused", !playing);
  button.setAttribute("aria-pressed", String(playing));

  if (!playing) {
    const complete = lessonStepIndex === 3;
    button.innerHTML = complete ? "<span aria-hidden=\"true\">↻</span> Replay lesson" : "<span aria-hidden=\"true\">▶</span> Play lesson";
    return;
  }

  if (lessonStepIndex === 3) lessonStepIndex = 0;
  button.innerHTML = "<span aria-hidden=\"true\">Ⅱ</span> Pause lesson";
  renderLessonStep();
  lessonInterval = window.setInterval(() => {
    lessonStepIndex += 1;
    if (lessonStepIndex >= 4) {
      lessonStepIndex = 3;
      renderLessonStep();
      setLessonPlaying(false);
      return;
    }
    renderLessonStep();
  }, 4200);
}

function openLesson(quote) {
  if (!quote || !lessons[quote.mood]) return;
  lessonQuote = quote;
  lessonStepIndex = 0;
  lessonReturnFocus = document.activeElement;
  const lesson = lessons[quote.mood];
  const dialog = document.querySelector(".lesson-dialog");
  const screen = document.querySelector("#lesson-screen");
  screen.dataset.mood = quote.mood;
  document.querySelector("#lesson-title").textContent = lesson.title;
  document.querySelector("#lesson-takeaway").textContent = lesson.takeaway;
  document.querySelector("#reflection-question").textContent = lesson.question;
  document.querySelector("#reflection-answer").value = typeof reflections[quote.id] === "string" ? reflections[quote.id] : "";
  document.querySelector("#reflection-status").textContent = reflections[quote.id] ? "Your answer is saved on this device." : "Only saved on this device.";
  document.querySelector("#lesson-dialog").hidden = false;
  document.body.style.overflow = "hidden";
  renderLessonStep();
  setLessonPlaying(true);
  document.querySelector("#lesson-close").focus();
}

function closeLesson() {
  const overlay = document.querySelector("#lesson-dialog");
  if (overlay.hidden) return;
  window.clearInterval(lessonInterval);
  lessonInterval = 0;
  overlay.hidden = true;
  document.body.style.overflow = "";
  if (lessonReturnFocus instanceof HTMLElement) lessonReturnFocus.focus();
}

function saveReflection() {
  if (!lessonQuote) return;
  const answer = document.querySelector("#reflection-answer").value.trim();
  if (answer) reflections[lessonQuote.id] = answer;
  else delete reflections[lessonQuote.id];

  try {
    localStorage.setItem(reflectionsStorageKey, JSON.stringify(reflections));
    document.querySelector("#reflection-status").textContent = answer ? "Your answer is saved on this device." : "Your answer has been cleared.";
    showToast(answer ? "Your reflection was saved on this device." : "Your reflection was cleared.");
  } catch {
    document.querySelector("#reflection-status").textContent = "Could not save. Check your browser storage settings.";
    showToast("Your answer couldn't be saved. Check your browser storage settings.");
  }
}

async function shareQuote(quote) {
  const text = `“${quote.text}” — ${quote.author}\n\nA little light for every day. Find yours with OBIOMA.`;
  if (typeof navigator.share === "function") {
    try {
      await navigator.share({ title: "A little light for every day — OBIOMA", text });
    } catch (error) {
      if (error.name !== "AbortError") showToast("This quote couldn't be shared right now.");
    }
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    showToast("Quote copied. Share a little light!");
  } catch {
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.append(field);
    field.select();
    const copied = document.execCommand("copy");
    field.remove();
    showToast(copied ? "Quote copied. Share a little light!" : "Copying isn't available in this browser.");
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function showPage(page) {
  const isFavorites = page === "favorites";
  homePage.hidden = isFavorites;
  favoritesPage.hidden = !isFavorites;
  document.querySelectorAll('[data-page="home"]').forEach((button) => button.classList.toggle("is-active", !isFavorites));
  document.querySelectorAll('[data-page="favorites"]').forEach((button) => button.classList.toggle("is-active", isFavorites));
  if (isFavorites) renderFavorites();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("click", (event) => {
  const pageButton = event.target.closest("[data-page]");
  if (pageButton) {
    event.preventDefault();
    showPage(pageButton.dataset.page);
    return;
  }

  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    activeCategory = categoryButton.dataset.category;
    activeMood = "All";
    renderQuotes();
    return;
  }

  const moodButton = event.target.closest("[data-mood-filter]");
  if (moodButton) {
    activeMood = moodButton.dataset.moodFilter === "All moods" ? "All" : moodButton.dataset.moodFilter;
    activeCategory = "All";
    renderQuotes();
    return;
  }

  const actionButton = event.target.closest("[data-action]");
  if (actionButton) {
    const quote = getQuoteById(actionButton.dataset.id);
    if (actionButton.dataset.action === "favorite") toggleFavorite(actionButton.dataset.id);
    if (actionButton.dataset.action === "share" && quote) shareQuote(quote);
    if (actionButton.dataset.action === "lesson") openLesson(quote);
  }
});

document.querySelector("#daily-save").addEventListener("click", () => toggleFavorite(currentQuote.id));
document.querySelector("#daily-share").addEventListener("click", () => shareQuote(currentQuote));
document.querySelector("#daily-lesson").addEventListener("click", () => openLesson(currentQuote));
document.querySelector("#lesson-play").addEventListener("click", () => {
  const isPlaying = document.querySelector("#lesson-play").getAttribute("aria-pressed") === "true";
  setLessonPlaying(!isPlaying);
});
document.querySelector("#lesson-close").addEventListener("click", closeLesson);
document.querySelector("#save-reflection").addEventListener("click", saveReflection);
document.querySelector("#reflection-answer").addEventListener("input", () => {
  document.querySelector("#reflection-status").textContent = "Unsaved changes.";
});
document.querySelector("#lesson-dialog").addEventListener("click", (event) => {
  if (event.target === event.currentTarget) closeLesson();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLesson();
});
document.querySelector("#new-quote").addEventListener("click", () => {
  currentQuote = getRandomQuote(activeMood === "All" ? getRecommendedMood() : activeMood);
  renderDailyQuote();
});
document.querySelector("#load-more").addEventListener("click", () => {
  quotePage += 1;
  renderQuotes(false);
});
searchInput.addEventListener("input", () => renderQuotes());
favoriteSearchInput.addEventListener("input", renderFavorites);
document.querySelector("#clear-search").addEventListener("click", () => {
  searchInput.value = "";
  renderQuotes();
  searchInput.focus();
});
document.querySelector("#clear-favorite-search").addEventListener("click", () => {
  favoriteSearchInput.value = "";
  renderFavorites();
  favoriteSearchInput.focus();
});

initializeDates();
renderCategories();
renderDailyQuote();
renderQuotes();
renderFavorites();
updateFavoriteCounts();
