// functions used


// variables used
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');



function buildingQuiz(){

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

// clicking Start, proceeding to question 1
submitButton.addEventListener('click", nextQuestion')