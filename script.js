// SELECTING ELEMENTS
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const scoreDiv = document.getElementById("scoreContainer");

// CREATING QUESTIONS
let questions = [
    {
        question : "Who is the creator of JavaScript?",
        choiceA : "Tim Berners-Lee",
        choiceB : "Hakon Wium Lie",
        choiceC : "Brendan Eich",
        correct : "C"
    }, 
    
    {
        question : "What does 'DOM' stand for?",
        choiceA : "Document Object Model",
        choiceB : "Document Object Method",
        choiceC : "Document Object Modem",
        correct : "A"
    }, 
    
    {
        question : "CSS is the language used to _____ an HTML document.",
        choiceA : "Write",
        choiceB : "Style",
        choiceC : "Animate",
        correct : "B"
    }, 
    
    {
        question : "Which is an example of an event attribute used in HTML?",
        choiceA : "onclick",
        choiceB : "onscroll",
        choiceC : "Both",
        correct : "C"
    }, 
    
    {
        question : "Which is an advantage of using Web API?",
        choiceA : "It can greatly simplify complex functions",
        choiceB : "It provides complex syntax for complex code",
        choiceC : "Neither",
        correct : "A"
    }
];

// CREATING VARIABLES
let runningQuestion = 0;
let lastQuestion = questions.length - 1;
const startTime = 30;
let timer = startTime;

// FUNCTION FOR RENDERING QUESTION
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

// ACTIVATING START BUTTON
start.addEventListener("click",startQuiz);

// START QUIZ
function startQuiz(){
    start.style.display = "none";
    rules.style.display = "none";
    heading.style.display = "none";
    quiz.style.display = "block";
    renderQuestion();
    renderCounter();
    clock = setInterval(renderCounter, 1000);
}    

// FUNCTION FOR RENDERING TIMER
function renderCounter() {
    let seconds = timer;
    counter.innerHTML = "<p>" + 'Timer:' + `${seconds}` +"</p>";
    timer--;

    if (timer == -1){
        alert("GAME OVER");
        clearInterval(clock);
    }
}
    
