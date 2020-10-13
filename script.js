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
