//TODO:Create global variables to click
var userAnswerA = document.querySelector("#AnswerA");
var userAnswerB = document.querySelector("#AnswerB");
var userAnswerC = document.querySelector("#AnswerC");
var userAnswerD = document.querySelector("#AnswerD");
var correctAnswer = " ";
var score = document.querySelector("#topScore");
var totalScore = 0;
var timeLeft = " ";
var quizQuestions = [];

var leaderBoardUsers = []
var usersScore = {
    Name: " ",
    Score: " "
}
lbstartingPoint();
//pushing one value to localstorage
function lbstartingPoint() {
    usersScore.Name = " ";
    usersScore.Score = " ";
    leaderBoardUsers.push(usersScore);
}


//TODO://Create loop to push questions to quizQuestions
for (var i = 0; i < 30; i++) {
    var questionList = question[Math.floor(Math.random()*question.length)];
    question.splice(questionList, 1);
    quizQuestions.push(questionList);
}
console.log(quizQuestions.length);


//TODO:timer, onclick will start to count down

function countDown (event) {
    var timeLeft = 60

    var timeInterval = setInterval(function() {
        timer.textContent = timeLeft + " seconds";
        timeLeft--;
        if (quizQuestions.lenght < 1) {
            clearInterval(timeInterval);
        }
        else if(timeLeft === 0) {
            timer.textContent = "Complete!!";
            figure.style.display = "none";
            form.style.display = "block";
            result.textContent = "Your Score is: " + totalScore;
            h3EL.textContent = "Finished!"
            clearInterval(timeInterval);
        }}, 1000)

        start.style.display = "none";
        restart.style.display = "inline-block"
}

//TODO: Create Restart function for when the user wants to start the quiz over
function restartQuiz () {
    location.reload();
}
//Scoreing
function scoring(event) {
// user answer
    var userAnswer = event.target.textContent;
    console.log(userAnswer);
  //Create scoring variable
  if(userAnswer == correctAnswer) {
    totalScore = totalScore + 10;
    score = "Score: " + totalScore;
    document.querySelector("#topScore").textContent = score;
    }
    else if (userAnswer === "Start Quiz") {

    }
    else {
    totalScore = totalScore - 10;
    score = "Score: " + totalScore;
    document.querySelector("#topScore").textContent = score;
}}

//Click Event Funciton
function changeQuestion(event) {  
    //Randomizing the question after each click
    var selectedQuestion = quizQuestions[Math.floor(Math.random()*quizQuestions.length)];
    quizQuestions.splice(selectedQuestion, 1);
        console.log(quizQuestions);
        console.log(quizQuestions.length);
    currentQuestion = selectedQuestion.Question;
    h3EL.textContent = currentQuestion
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
    //TODO:// Create form after completing quiz
    if (quizQuestions.length < 1) {
    figure.style.display = "none";
    form.style.display = "block";
    result.textContent = "Your Score is: " + totalScore;
    h3EL.textContent = "Finished!"
}}
//Unhide Figure to allow quiz to start
function unhide() {
    figure.style.display = "block";
}
//TODO://Get local Storage
getLeaderboard();
function getLeaderboard(){
    var lbData = JSON.parse(localStorage.getItem("Record"))
    leaderBoardUsers = lbData
    console.log(leaderBoardUsers);

}

printLeaderboard();
function printLeaderboard() {
    if(leaderBoardUsers.length === 0 ) {

    }
    else { 
        leaderBoardUsers.sort((a,b) => b.Score - a.Score);
        for(var i = 0; i < leaderBoardUsers.length; i++) {
        var list = document.createElement("li")
        list.textContent = leaderBoardUsers[i].Score + " " + leaderBoardUsers[i].Name;
        lbList.appendChild(list);
    }}
}
//Create Eventlisteners for each function the user is inteaded to call 
start.addEventListener("click", countDown);
start.addEventListener("click", unhide);
start.addEventListener("click", changeQuestion);
//Submit button
form.addEventListener("submit", function(event) {
    event.preventDefault();
    if(recordName.value === " ") {

    }
    else {
    usersScore.Name = recordName.value;
    usersScore.Score = totalScore;
    leaderBoardUsers.push(usersScore);
    localStorage.setItem("Record", JSON.stringify(leaderBoardUsers));
    recordName.value = " ";
}})
// myAnswer.addEventListener("click", changeQuestion)
// if(userAnswerA || userAnswerB || userAnswerC || userAnswerD) {
userAnswerA.addEventListener("click", scoring);
userAnswerB.addEventListener("click", scoring);
userAnswerC.addEventListener("click", scoring);
userAnswerD.addEventListener("click", scoring);    
userAnswerA.addEventListener("click", changeQuestion);
userAnswerB.addEventListener("click", changeQuestion);
userAnswerC.addEventListener("click", changeQuestion);
userAnswerD.addEventListener("click", changeQuestion);
// }
if(restart) {
    restart.addEventListener("click", restartQuiz)
}