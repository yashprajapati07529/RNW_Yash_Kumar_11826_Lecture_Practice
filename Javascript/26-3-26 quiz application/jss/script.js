const Question = [
    {
        question: "C language was invented in which laboratories.?",
        option: ["Uniliver Labs", "IBM Labs", " AT&T Bell Labs", " Verizon Labs"],
        answer: 2,
    },
    {
        question: "Which of the following is not a valid data type in C?",
        option: ["int", "float", "string", "char"],
        answer: 2,
    },
    {
        question: "How do you define the body of a user-defined function in C?",
        option: ["Using curly braces {}", "Using parentheses ()", " Using square brackets []", "Using angle brackets <>"],
        answer: 0,
    },
    {
        question: "How do you declare a pointer variable in C? ",
        option: ["int pointer;", "int *ptr;", " pointer int;", "*int ptr;"],
        answer: 1,
    },
    {
        question: "What is the size of the int data type in C? ",
        option: ["1byte", "int *ptr;", " It depends on the system/compiler", "4byte"],
        answer: 3,
    },
]

/* static variables */

let timeRemaining = 300;
let currentQuestion = 0;
let startTime = Date.now();
let selectedAnswer = null;
let score = 0;
let timeInterval;

console.log(score);
console.log("startTime", startTime);


/* Dom Elements */

const quizBody = document.getElementById("quizBody")
const questionCounter = document.getElementById("questionCounter")
const nextBtn = document.getElementById("nextBtn")
const progressBar = document.getElementById("progressBar")
const timer = document.getElementById("timer")
const resultsContainer = document.getElementById("resultsContainer")
const quizFooter = document.getElementById("quizFooter")
const restartBtn = document.getElementById("restartBtn")

const initQuizApp = () => {
    let timeRemaining = 300;
    let currentQuestion = 0;
    let startTime = Date.now();
    let selectedAnswer = null;
    let score = 0;
    let timeInterval;

    resultsContainer.classList.add("content-hide")

    startTimer()
}

const startTimer = () => {
    clearInterval(timeInterval)
    timeInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay()
        console.log(timeRemaining);
        if (timeRemaining <= 0) {
            clearInterval(timeInterval)
        }

    }, 1000)
}

const updateTimerDisplay = () => {
    const minutes = Math.floor(timeRemaining / 60);

    const seconds = timeRemaining % 60;

    timer.textContent = `${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`

    console.log(timer);
}



document.addEventListener("DOMContentLoaded", () => {
    initQuizApp()

})