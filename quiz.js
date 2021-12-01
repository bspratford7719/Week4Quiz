//
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function selectingAnswer () {
    var answer = generateAnswer();
    var answerText = document.querySelector("#answer");
    answerText.value = answer;
}




const submitButton = document.getElementById('submit');
// clicking Submit, go to next question
submitButton.addEventListener('click", nextQuestion')