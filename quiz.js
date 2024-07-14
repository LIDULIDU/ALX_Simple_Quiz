function checkAnswer(){
    correctAnswer="4";

let userAnswer = document.querySelector('input[name="quiz"]:checked').value;
// if(userAnswer){
    if(userAnswer==correctAnswer){
        document.getElementById('feedback').textContent="correct! Well done";
    }else{
        document.getElementById('feedback').textContent="That is incorrect.Try again!"
    }
}
// else{
//     document.getElementById('feedback').textContent="Please Select an answer."
// }
// }
// document.getElementById('submit-answer').addEventListener('click',checkAnswer)