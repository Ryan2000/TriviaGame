/**
 * Created by ryanhoyda on 5/22/17.
 */


question = {
    question: 'Some question',
    one : 'Answer one',
    two : 'Answer two',
    three : 'Answer three',
    four: 'Answer four',
    answer: 'one'
}

function updateQuestion(newQuestion){
    $('#question1').text(newQuestion.question);
    $('#a1').text(newQuestion.one);
    $('#a2').text(newQuestion.two);
    $('#a3').text(newQuestion.three);
    $('#a4').text(newQuestion.four);
}