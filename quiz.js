// variables used
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var homeSection = document.getElementById('home');
var startQuiz = document.getElementById('start');
var questionTitle = document.getElementById('question-title');
var questionOptions = document.getElementById('question-options');

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
var quizResults = []

function showSlide() {

}

// functions used
function generateQuiz() {
    var currentQuestionSlide = 0;
    homeSection.style.display = 'none';
    quizContainer.style.display = 'block';

    var currentQuestion = quizQuestions[currentQuestionSlide];
    questionTitle.innerHTML = currentQuestion.question

    function clickAnswer(event) {
        var selectedAnswer = event.target.value;
        if(selectedAnswer === currentQuestion.correctAnswer) {
            quizResults.push('correct')
        }
        else {
            quizResults.push('incorrect')
        }
        currentQuestionSlide++
        console.log(quizResults)
    }

    for(number in currentQuestion.answers){
        const button = document.createElement("button");
        button.innerText = number + ': ' + currentQuestion.answers[number];
        button.value = currentQuestion.answers[number]

        button.addEventListener("click", clickAnswer)
        questionOptions.appendChild(button);
    }

    // questionOptions.innerHTML = options.join("")
    // quizResults.push({})
    // currentQuestionSlide++;
    
}

function timer() {
    var countdown = 60;
    var interval = setInterval(function(){
        document.getElementById('countdown').innerHTML=countdown;
        count--;
        if (count === 0){
            clearInterval(interval);
            document.getElementById('countdown').innerHTML='Done';
        }
    }, 1000);
}

quizContainer.style.display = 'none';
// clicking Start, proceeding to question 1
startQuiz.addEventListener('click', generateQuiz);