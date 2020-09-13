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

start.addEventListener("click", function() {
    countDown();
})

//TODO:Create function that will let the use click each answer

//TODO: Create an array of questions and answers

//TODO: Create an object for each question that holds each answer

//TODO: Create a random generator that pulls each question from a question bank array

//TODO: Create a random generator that can replace each question and answers with a new question/answer from a question bank