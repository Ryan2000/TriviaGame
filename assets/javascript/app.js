/**
 * Created by ryanhoyda on 5/22/17.
 */

questionCsv =
    [
        "Who played Andy Dufresne in the ShawShank Redemption?, Morgan Freeman, Tim Robbins, Robert Dinero, William Sadler, Correct Answer Tim Robbins",
        "The Godfather was released in what year?, 1972, 1971, 1973, 1974, Correct Answer 1972",
        ""
        //and so on
    ];

var questions = [];
var currentQuestion = 0;

$(document).ready(function(){
    for(var i = 0; i < questionCsv.length; i++){
        buildQuestions(questionCsv[i]);
    }

    $("#submit").click(function() {
        var nextQuestion = questions[currentQuestion++];
        updateQuestion(nextQuestion);
    });
});


function buildQuestions(question){
    //Question, Answer 1, Answer 2, Answer 3, Answer 4, Correct Answer
    parts = question.split(',');
    var question = {
        question: parts[0],
        one: parts[1],
        two: parts[2],
        three: parts[3],
        four: parts[4],
        answer: parts[5]
    };
    questions.push(question);
}

function updateQuestion(newQuestion) {
    $('#question1').text(newQuestion.question);
    $('#a1').next().text(newQuestion.one);
    $('#a2').next().text(newQuestion.two);
    $('#a3').next().text(newQuestion.three);
    $('#a4').next().text(newQuestion.four);

}

function checkAnswers() {

}

function timer() {

}

function scoreCalculator() {

}

function gameReset() {

}
