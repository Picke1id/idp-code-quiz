// SELECTING ELEMENTS
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choices = document.getElementById("choices");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const scoreDiv = document.getElementById("scoreContainer");
const end = document.getElementById("end");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const highScores = document.getElementById("highScores");
const userInitials = document.getElementById("userInitials");
 

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
let count = 0;

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
    counter.innerHTML = "<p>" + 'Timer:' +'00:'+ `${seconds}` +"</p>";
    timer--;
    // END QUIZ IF TIMER HITS ZERO
    if (timer == -1){
        alert("GAME OVER");
        clearInterval(clock);
    }
}

// FUNCTION FOR CHECKING ANSWERS
function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        answerIsCorrect();
    }
    else{
        // answer is wrong
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }
    else if (runningQuestion == lastQuestion) {
    // end the quiz and show the score
        question.style.display = "none";
        choices.style.display = "none";
        counter.style.display = "none";
        scoreRender();
        clearInterval(clock)
        end.style.display = "";
    }
}

// FUNCTION FOR CORRECT ANSWER
function answerIsCorrect(){
    timer += 5;
    counter.innerHTML = "<p>"+ 'Timer:' +'00:'+timer +"</p>";
}

// FUNCTION FOR INCORRECT ANSWER
function answerIsWrong(){
    timer -= 5;
    counter.innerHTML = "<p>"+ 'Timer:' +'00:'+timer +"</p>";
}

// FUNCTION FOR RENDERING SCORE
function scoreRender(){
    scoreDiv.style.display = "block";
    
    scoreDiv.innerHTML += "<p>"+ 'Your final score is' + ' ' +timer + '!' +"</p>";
}

// EVENT FOR SAVING & VIEWING HIGH SCORES
saveScoreBtn.addEventListener("click",saveHighScore);

// FUNCTION FOR SAVING & VIEWING SCORES
function saveHighScore(){
    scoreDiv.style.display = "none";
    allDone.style.display = "none";
    userInitials.style.display = "none";
    saveScoreBtn.style.display = "none";
    highScores.style.display = "";
    var results = "<p>"+ userInitials.value + ' - ' +timer +"</p>"; 
    localStorage.setItem("showit", results);
    document.getElementById("showHighScores").innerHTML = localStorage.getItem("showit"); 
}

// EVENT FOR RETURNING TO QUIZ
goBack.addEventListener("click", returnHome);

// FUNCTION FOR RETURNING HOME
function returnHome(){
    highScores.style.display = "none";
    quiz.style.display = "block";
    renderQuestion();
    renderCounter();
}
