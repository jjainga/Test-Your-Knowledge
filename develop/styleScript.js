//Testing if linked
console.log("Hello World");

//TODO://Set body to a variable so we dont have to reference document anymore
var body = document.body

//TODO://Create a responsive layout to make a good user interface
var main = document.createElement("main");
var section1 = document.createElement("section");
var section2 = document.createElement("section");
var h1EL = document.createElement("h1");
var h3EL = document.createElement("h3");
var figure = document.createElement("figure");
var section3 = document.createElement("section");
var div1 = document.createElement("div");
var div2 = document.createElement("div");
var divGap = document.createElement("div")
var div3 = document.createElement("div");
var div4 = document.createElement("div");
var div5 = document.createElement("div");
var div6 = document.createElement("div");
var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button");
var div7 = document.createElement("div");
var div8 = document.createElement("div");
var div9 = document.createElement("div");
var div10 = document.createElement("div");
var start = document.createElement("button");
var startGap = document.createElement("div");
var startbtnLoction = document.createElement("div");
var timerloction = document.createElement("div");
var timer = document.createElement("span");
var topscore = document.createElement("span")


//TODO://Create classes for each element
main.className = "container";
main.className = "text-center";
section1.className = "row";
section2.className = "row";
section3.classname = "row";
//section3.className = "text-center";
figure.className = "row";
//div1.className = "col-md-2";
//divGap.className = "col-md-2";
div2.className = "col-md-12";
// div3.className = "row";
// div4.className = "row";
// div5.className = "row";
// div6.className = "row";
// button1.className = "btn1";
// button2.className = "btn1";
// button3.className = "btn1";
// button4.className = "btn1";
div7.className = "row";
div8.className = "row";
div9.className = "row";
div10.className = "row";
start.className = "start"
startGap.class = "col-md";
startbtnLoction.className = "col-md-12";
timerloction.className = "col-md";

//TODO://Set IDs for each element

main.id = "main";
section1.id = "section1";
section2.id = "section2";
section3.id = "section3";
figure.id = "figure";
// div1.id ="div1";
div2.id ="div2";
// divGap.id ="Gap";
// div3.id ="div3";
// div4.id ="div4";
// div5.id ="div5";
// div6.id ="div6";
// button1.id ="btnA";
// button2.id ="btnB";
// button3.id ="btnC";
// button4.id ="btnD";
div7.id ="AnswerA";
div8.id ="AnswerB";
div9.id ="AnswerC";
div10.id ="AnswerD";
h1EL.id = "h1id";
h3EL.id = "currentQuestion";
start.id = "startbtn";
timer.id = "timer";
topscore.id = "topScore";




//TODO://Create styling for each element
//main
main.style.margin = "auto";
main.style.width = "80%";
//main.style.textAlign = "center";
//section1
section1.style.margin = "auto";
section1.style.display = "block";
section1.style.width = "100%";
//section1.style.textAlign = "center";
section1.style.overflow = "auto";
//section2
section2.style.display = "block";
section2.style.margin = "auto";
section2.style.width = "100%";
section2.style.overflow = "auto";
section2.style.border = "4px solid black"
//section3
section3.style.display = "block";
section3.style.margin = "auto";
section3.style.width = "80%";
section3.style.overflow = "auto";
section3.style.textAlign = "center";
//Inside Section3
// startGap.style.width = "15%";
// startbtnLoction.style.width = "70%";
// timerloction.style.width = "15%";


//figure
figure.style.display = "block";
figure.style.margin = "auto";
figure.style.width = "95%";
figure.style.overflow = "auto";
//Col style
// div1.style.display = "inline-block";
// div1.style.margin = "auto";
// div1.style.width = "20%";
// div1.style.overflow = "auto";
div2.style.display = "inline-block";
div2.style.margin = "auto";
div2.style.width = "70%";
div2.style.overflow = "auto";
//div2.style.textAlign = "center";
// divGap.style.display = "inline-block";
//Button row
// div3.style.margin = "10px";
// div3.style.padding = "10px";
// div4.style.margin = "10px";
// div4.style.padding = "10px";
// div5.style.margin = "10px";
// div5.style.padding = "10px";
// div6.style.margin = "10px";
// div6.style.padding = "10px";
//Button styling
//Answer Row
div7.style.display = "block";
div7.style.margin = "10px";
div7.style.padding = "10px";
div7.style.textAlign = "center";
div7.style.border = "1px solid black"
div8.style.display = "block";
div8.style.margin = "10px";
div8.style.padding = "10px";
div8.style.textAlign = "center";
div8.style.border = "1px solid black";
div9.style.display = "block";
div9.style.margin = "10px";
div9.style.padding = "10px";
div9.style.textAlign = "center";
div9.style.border = "1px solid black";
div10.style.display = "block";
div10.style.margin = "10px";
div10.style.padding = "10px";
div10.style.textAlign = "center";
div10.style.border = "1px solid black";
//Start button style
start.style.display = "inline -block";
start.style.padding = "5px 15px";
start.style.margin = "10px";
start.style.float = "center";
//timer style
timer.style.display = "inline-block"
timer.style.float = "right";
timer.style.margin = "auto";
timer.style.padding = "5px";
//Top score style
topscore.style.float = "left";

//TODO://Create text for each element
main.textContent = "Let's take a quiz!";
h1EL.textContent = "Hello";
h3EL.textContent = "Hello again";
div7.textContent = "Answer A";
div8.textContent = "Answer B";
div9.textContent = "Answer C";
div10.textContent = "Answer D";
start.textContent = "Start Quiz";
timer.textContent = "Countdown!"
topscore.textContent = "Top Score:--"




//TODO://Append each element to the page
body.appendChild(main);
main.appendChild(section1);
main.appendChild(section2);
section1.appendChild(h1EL);
section2.appendChild(h3EL);
section2.appendChild(figure);
body.appendChild(section3);
// figure.appendChild(div1);
// figure.appendChild(divGap);
figure.appendChild(div2);
// div1.appendChild(div3);
// div1.appendChild(div4);
// div1.appendChild(div5);
// div1.appendChild(div6);
// div3.appendChild(button1);
// div4.appendChild(button2);
// div5.appendChild(button3);
// div6.appendChild(button4);
div2.appendChild(div7);
div2.appendChild(div8);
div2.appendChild(div9);
div2.appendChild(div10);
// section3.appendChild(startGap);
// section3.appendChild(startbtnLoction);
// section3.appendChild(timerloction);
// startbtnLoction.appendChild(start);
section3.appendChild(start);
section3.appendChild(timer);
section3.appendChild(topscore);




// TODO://Create a timer that starts to count down after a start button is pressed

// TODO://Create timer, needs to restart and not go passed 0

// TODO://Create button that starts timer and begins quiz

// TODO://Create questions that have a multiple choice for the answer and that changes after each answer is confirmed

// TODO://Scores user by remaining seconds left after answering each question

// TODO:

// TODO:

// TODO:

// TODO:

// TODO:

// TODO: