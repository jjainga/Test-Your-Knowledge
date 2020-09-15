//TODO://Create object that is holding each question and answer

//TODO://Create an Array holding each object


var question = []
for (var i=0; i<100; i++) {
    question[i] = {
        Question: "Question" + i,
        AnswerA: "Answer A",
        AnswerB: "Answer B",
        AnswerC: "Answer C",
        AnswerD: "Answer D",
    };
}
console.log(question);
console.log("-----------------")
//TODO:Create unique questions and answers
question[0].Question = "Do you like Peanut butter?";

console.log(question)