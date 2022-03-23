// variables used
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var homeSection = document.getElementById('home');
var startQuiz = document.getElementById('start');
var questionTitle = document.getElementById('question-title');
var questionOptions = document.getElementById('question-options');
var highScores = document.getElementById('highscores');
var questionResults = document.getElementById('results');
var quizResults = [];
var currentQuestionSlide = 0;

var quizQuestions = [
    {
        question: "Commonly used data types DO not include:",
        answers: {
            1: 'strings',
            2: 'booleans',
            3: 'alerts',
            4: 'numbers'
        },
        correctAnswer: 'numbers'
    },
    {
        question: "The condition in an if/else statement is enclosed with ___.",
        answers: {
            1: 'quotes',
            2: 'curly brackets',
            3: 'parenthesis',
            4: 'square brackets'
        },
        correctAnswer: 'square brackets'
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        answers: {
            1: 'numbers and strings',
            2: 'other arrays',
            3: 'booleans',
            4: 'all of the above'
        },
        correctAnswer: 'all of the above'
    },
    {
        question: "String values must be enclosed within ___ when being assigned to variables.",
        answers: {
            1: 'commas',
            2: 'curly brackets',
            3: 'quotes',
            4: 'parenthesis'
        },
        correctAnswer: 'quotes'
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is",
        answers: {
            1: 'JavaScript',
            2: 'terminal/bash',
            3: 'for loops',
            4: 'console.log'
        },
        correctAnswer: 'JavaScript'
    }
]
var currentQuestion = quizQuestions[currentQuestionSlide];

// functions used
function nextQuestion(currentQuestion){
    questionTitle.innerHTML = currentQuestion.question;
    questionOptions.innerHTML = null;
    for (number in currentQuestion.answers) {
        const button = document.createElement("button");
        button.innerText = number + ': ' + currentQuestion.answers[number];
        button.value = currentQuestion.answers[number]

        button.addEventListener("click", clickAnswer)
        questionOptions.appendChild(button);
    }
}

function clickAnswer(event) {
    var selectedAnswer = event.target.value;
    if (selectedAnswer === currentQuestion.correctAnswer) {
        quizResults.push('correct')
        questionOptions.innerHTML = correct;
    }
    else {
        quizResults.push('incorrect')
        questionOptions.innerHTML = incorrect;
    }
    console.log(quizResults);
    currentQuestionSlide++
    currentQuestion = quizQuestions[currentQuestionSlide];
    nextQuestion(currentQuestion)
}

function generateQuiz() {
    homeSection.style.display = 'none';
    quizContainer.style.display = 'block';
    nextQuestion(currentQuestion)
}

//function timer() {
//  var countdown = 60;
//    var interval = setInterval(function () {
//        document.getElementById('countdown').innerHTML = countdown;
//        count--;
//        if (count === 0) {
//            clearInterval(interval);
//            document.getElementById('countdown').innerHTML = 'Done';
//        }
//    }, 1000);
//}

function scores() {
    //var viewscores = ;
}

quizContainer.style.display = 'none';
// clicking Start, proceeding to next question
startQuiz.addEventListener('click', generateQuiz);
highScores.addEventListener('click', scores);
