//TODO:Create global variables to click
var userAnswerA = document.querySelector("#AnswerA");
var userAnswerB = document.querySelector("#AnswerB");
var userAnswerC = document.querySelector("#AnswerC");
var userAnswerD = document.querySelector("#AnswerD");
// var myAnswer = document.querySelector(".answerBtn")
var score = document.querySelector("#topScore").textContent;
var totalScore = 0;

//TODO:timer, onclick will start to count down

function countDown () {
    var timeLeft = 60

    var timeInterval = setInterval(function() {
        timer.textContent = timeLeft + " seconds";
        timeLeft--;
    
        if(timeLeft === 0) {
            timer.textContent = "Complete!!";
            clearInterval(timeInterval);
        }}, 1000)

        start.style.display = "none";
}

//TODO:Create function that will let the use click each answer and move to the next question

function changeQuestion(event) {    
    //Randomizing the question after each click
    var selectedQuestion = question[Math.floor(Math.random()*question.length)];
    var currentQuestion = selectedQuestion.Question;
    //Randomizing answers from each quesiton
    var answerArr = [];
    answerArr.push(selectedQuestion.AnswerA);
    answerArr.push(selectedQuestion.AnswerB);
    answerArr.push(selectedQuestion.AnswerC);
    answerArr.push(selectedQuestion.AnswerD);
    //checking if the answerArr is built
    console.log(answerArr);
    //Set index for correct question
    correctAnswer = answerArr[0];
    console.log(correctAnswer);
    // user answer
    var userAnswer = event.target.textContent;
    console.log(userAnswer);
    //Create scoring variable
    if(userAnswer == correctAnswer) {
        totalScore = totalScore + 10;
        score = "Score: " + totalScore;
        document.querySelector("#topScore").textContent = score;
    }
    else {
        totalScore = totalScore - 10;
        score = "Score: " + totalScore;
        document.querySelector("#topScore").textContent = score;
    }
    //Setting an answer for A, B, C, D after each click
    var randomNumber = Math.floor(Math.random()*answerArr.length);
    var selectedAnswerA = answerArr[randomNumber];
    document.querySelector("#AnswerA").textContent = selectedAnswerA;
    answerArr.splice(randomNumber,1);
    console.log(answerArr);
    console.log(correctAnswer);

    var randomNumber2 = Math.floor(Math.random()*answerArr.length);
    var selectedAnswerB = answerArr[randomNumber2];
    document.querySelector("#AnswerB").textContent = selectedAnswerB;
    answerArr.splice(randomNumber2,1);
    console.log(answerArr);
    console.log(correctAnswer);

    var randomNumber3 = Math.floor(Math.random()*answerArr.length);
    var selectedAnswerC = answerArr[randomNumber3];
    document.querySelector("#AnswerC").textContent = selectedAnswerC;
    answerArr.splice(randomNumber3,1);
    console.log(answerArr);
    console.log(correctAnswer);

    var randomNumber4 = Math.floor(Math.random()*answerArr.length);
    var selectedAnswerD = answerArr[randomNumber4];
    document.querySelector("#AnswerD").textContent = selectedAnswerD;
    answerArr.splice(randomNumber4,1);
    console.log(answerArr);
    console.log(correctAnswer);

    // Changing the question after each click
    document.querySelector("#currentQuestion").textContent = currentQuestion;
    
    //Checking if values are being assigned after click
    console.log("-----------------------")
    console.log(score);
    console.log(totalScore);
 
}
//Create Eventlisteners for each function the user is inteaded to call 
start.addEventListener("click",countDown);
// myAnswer.addEventListener("click", changeQuestion)
userAnswerA.addEventListener("mousedown", changeQuestion);
userAnswerB.addEventListener("mousedown", changeQuestion);
userAnswerC.addEventListener("mousedown", changeQuestion);
userAnswerD.addEventListener("mousedown", changeQuestion);
