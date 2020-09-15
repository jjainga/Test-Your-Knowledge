//TODO:Create global variables to click
var userAnswerA = document.querySelector("#AnswerA");
var userAnswerB = document.querySelector("#AnswerB");
var userAnswerC = document.querySelector("#AnswerC");
var userAnswerD = document.querySelector("#AnswerD");

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
}

//TODO:Create function that will let the use click each answer and move to the next question

function changeQuestion(event) {
    //Creating what the question change to 
    var selectedQuestion = question[Math.floor(Math.random()*question.length)];
    var currentQuestion = selectedQuestion.Question;
    
    //Randomizing answers from each quesiton
    var answerArr = [];
    answerArr.push(selectedQuestion.AnswerA);
    answerArr.push(selectedQuestion.AnswerB);
    answerArr.push(selectedQuestion.AnswerC);
    answerArr.push(selectedQuestion.AnswerD);

    //checking if the answerArr is built
    console.log(answerArr)
    var randomNumber = Math.floor(Math.random()*answerArr.length)
    var selectedAnswerA = answerArr[randomNumber];
    document.querySelector("#AnswerA").textContent = selectedAnswerA;
    answerArr.splice(randomNumber,1),
    //Checking if splice works
    console.log(answerArr);
    var randomNumber2 = Math.floor(Math.random()*answerArr.length)
    var selectedAnswerB = answerArr[randomNumber2];
    document.querySelector("#AnswerB").textContent = selectedAnswerB;
    answerArr.splice(randomNumber2,1);
    console.log(answerArr);
    var randomNumber3 = Math.floor(Math.random()*answerArr.length)
    var selectedAnswerC = answerArr[randomNumber3];
    document.querySelector("#AnswerC").textContent = selectedAnswerC;
    answerArr.splice(randomNumber3,1);
    console.log(answerArr);
    var randomNumber4 = Math.floor(Math.random()*answerArr.length)
    var selectedAnswerD = answerArr[randomNumber4];
    document.querySelector("#AnswerD").textContent = selectedAnswerD;
    answerArr.splice(randomNumber4,1)
    console.log(answerArr);

    document.querySelector("#currentQuestion").textContent = currentQuestion;

}
//Create Eventlisteners for each function the user is inteaded to call 
start.addEventListener("click", function() {
    countDown();
})
userAnswerA.addEventListener("click", function() {
    changeQuestion();
})
userAnswerB.addEventListener("click", function() {
    changeQuestion();
})
userAnswerC.addEventListener("click", function() {
    changeQuestion();
})
userAnswerD.addEventListener("click", function() {
    changeQuestion();
})

//TODO: Create a random generator that pulls each question from a question bank array

//TODO: Create a random generator that can replace each question and answers with a new question/answer from a question bank