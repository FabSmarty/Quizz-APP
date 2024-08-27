const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 1
    },
    // Add 8 more questions here
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.querySelector(".question");
const choicesEl = document.querySelectorAll(".choice");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");
const resultEl = document.getElementById("result");
const quizEl = document.getElementById("quiz");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    choicesEl.forEach((button, index) => {
        button.textContent = currentQuestion.choices[index];
        button.onclick = () => checkAnswer(index);
    });
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestionIndex].answer) {
        score++;
    }
    nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
    nextBtn.disabled = true;
});

function showResult() {
    quizEl.classList.add("hidden");
    resultEl.classList.remove("hidden");
    scoreEl.textContent = score;
}

document.getElementById("restart-btn").addEventListener("click", () => {
    score = 0;
    currentQuestionIndex = 0;
    quizEl.classList.remove("hidden");
    resultEl.classList.add("hidden");
    loadQuestion();
});

loadQuestion();
nextBtn.disabled = true;
