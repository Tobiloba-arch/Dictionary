const dictionary = [
  {
    word: "elated",
    meaning: "Extremely happy and excited",
    example: "She was elated after hearing the good news.",
    synonyms: ["overjoyed", "ecstatic", "thrilled", "delighted"],
  },
  {
    word: "meticulous",
    meaning: "Showing great attention to detail; very careful and precise",
    example: "He was meticulous in documenting every step of the experiment.",
    synonyms: ["precise", "thorough", "detailed", "accurate"],
  },
  {
    word: "serene",
    meaning: "Calm, peaceful, and untroubled",
    example: "The lake looked serene in the early morning light.",
    synonyms: ["calm", "tranquil", "peaceful", "still"],
  },
  {
    word: "obscure",
    meaning: "Not well known or easily understood",
    example:
      "The professor discussed some obscure points of medieval philosophy.",
    synonyms: ["unclear", "unknown", "vague", "ambiguous"],
  },
  {
    word: "vivid",
    meaning: "Producing powerful feelings or strong, clear images in the mind",
    example:
      "She gave a vivid description of her trip to the Amazon rainforest.",
    synonyms: ["graphic", "detailed", "intense", "bright"],
  },
  {
    word: "diligent",
    meaning:
      "Having or showing care and conscientiousness in one’s work or duties",
    example:
      "He is a diligent student who always submits his assignments on time.",
    synonyms: ["hardworking", "industrious", "persistent", "attentive"],
  },
  {
    word: "succinct",
    meaning: "Briefly and clearly expressed",
    example: "Her summary was succinct and to the point.",
    synonyms: ["concise", "brief", "compact", "to the point"],
  },
  {
    word: "frivolous",
    meaning: "Not having any serious purpose or value",
    example: "He was criticized for spending money on frivolous items.",
    synonyms: ["trivial", "superficial", "silly", "unimportant"],
  },
  {
    word: "arduous",
    meaning: "Involving or requiring strenuous effort; difficult and tiring",
    example: "Climbing the mountain was an arduous task.",
    synonyms: ["difficult", "challenging", "tough", "grueling"],
  },
  {
    word: "benevolent",
    meaning: "Well meaning and kindly",
    example: "The benevolent old man gave food to the poor every weekend.",
    synonyms: ["kind", "generous", "compassionate", "charitable"],
  },
];

const input = document.getElementById("input");
const submit = document.getElementById("submit");

const renderUI = (result) => {
  console.log(result);

  let ui = `
      <div>
        <h2>${result.word}</h2>
        <div class="pronunciation">adjective /${result.meanings[0].partofSpeech}/</div>

        <div class="definition"> ${result.meanings[0].definitions[0].definition}</div>
          <div class="example">
            ${result.meanings[0].definitions[0].example}
          </div>

          <div class="synonyms">
            <h3>Synonyms</h3>
            <ul>
            <li>${result.meanings[0].synonyms.join[0]}</li>
            </ul>
          </div>
        
        </div>

         `;
  document.getElementById("Wrapper").innerHTML = ui;
};

const handleFetch = async (word) => {
  try {
    document.getElementById(
      "Wrapper"
    ).innerHTML = `<h2 style="color: red">loading... please wait.</h2>`;

    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();

    if (data) {
      renderUI(data[0]);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    if (error instanceof TypeError) {
      document.getElementById(
        "Wrapper"
      ).innerHTML = `<h2 style="color: red">Word not found. Please try another word</h2>`;
    }
  }
};

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    handleFetch(e.target.value);
  }
});
