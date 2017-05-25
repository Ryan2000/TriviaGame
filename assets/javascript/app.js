/**
 * Created by ryanhoyda on 5/22/17.
 */

questionCsv =
    [
        "Who played Andy Dufresne in the ShawShank Redemption?, Morgan Freeman, Tim Robbins, Robert Dinero, William Sadler, Correct Answer Tim Robbins",
        "Question 2, Answer 1, Answer 2, Answer 3, Answer 4, Correct Answer",
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

function updateQuestion(newQuestion){
    $('#question1').text(newQuestion.question);
    $('#a1').html(newQuestion.one);
    $('#a2').html(newQuestion.two);
    $('#a3').html(newQuestion.three);
    $('#a4').html(newQuestion.four);
}



