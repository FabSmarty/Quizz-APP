<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="quiz-container">
        <h1>Quiz App</h1>
        <div id="quiz">
            <div class="question">Question text here</div>
            <div class="choices">
                <button class="choice">Choice 1</button>
                <button class="choice">Choice 2</button>
                <button class="choice">Choice 3</button>
                <button class="choice">Choice 4</button>
            </div>
            <button id="next-btn">Next</button>
        </div>
        <div id="result" class="hidden">
            <h2>Your Score: <span id="score">0</span>/10</h2>
            <button id="restart-btn">Restart Quiz</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.quiz-container {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 400px;
    text-align: center;
}

h1 {
    margin-bottom: 20px;
}

.question {
    margin-bottom: 20px;
    font-size: 20px;
}

.choices {
    margin-bottom: 20px;
}

.choice {
    display: block;
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
}

.choice:hover {
    background: #0056b3;
}

#next-btn, #restart-btn {
    background: #28a745;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

.hidden {
    display: none;
}
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
