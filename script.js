let phases = [
    {
        emoji: "🌑",
        name: "New Moon",
        message: "A fresh beginning awaits you ✨"
    },
    {
        emoji: "🌒",
        name: "Waxing Crescent",
        message: "Little things can grow into magic 🌱"
    },
    {
        emoji: "🌓",
        name: "First Quarter",
        message: "Keep moving towards your dreams 💫"
    },
    {
        emoji: "🌔",
        name: "Waxing Gibbous",
        message: "You are getting closer every day 🌷"
    },
    {
        emoji: "🌕",
        name: "Full Moon",
        message: "Let your little light shine ✨"
    },
    {
        emoji: "🌖",
        name: "Waning Gibbous",
        message: "Take a moment to appreciate your journey 🌸"
    },
    {
        emoji: "🌗",
        name: "Last Quarter",
        message: "Let go of what you no longer need 🍃"
    },
    {
        emoji: "🌘",
        name: "Waning Crescent",
        message: "Rest now, little moon. Tomorrow is new 🌙"
    }
];

let currentPhase = 0;

let moon = document.querySelector("#moon");
let phaseName = document.querySelector("#phaseName");
let message = document.querySelector("#message");
let nextButton = document.querySelector("#nextButton");

function changePhase() {

    currentPhase++;

    if (currentPhase >= phases.length) {
        currentPhase = 0;
    }

    moon.textContent = phases[currentPhase].emoji;
    phaseName.textContent = phases[currentPhase].name;
    message.textContent = phases[currentPhase].message;
}

moon.addEventListener("click", changePhase);
nextButton.addEventListener("click", changePhase);


