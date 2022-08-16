/*Add your JavaScript here*/

var hScore = 0;
var vScore = 0;
var qCount = 0;

var result = document.getElementById("result");
var restart = document.getElementById("restart");
var displayRes = document.getElementById("displayRes");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");


q1a1.addEventListener("click", villain);
q1a2.addEventListener("click", hero);
q2a1.addEventListener("click", hero);
q2a2.addEventListener("click", villain);
q3a1.addEventListener("click", hero);
q3a2.addEventListener("click", villain);
q4a1.addEventListener("click", villain);
q4a2.addEventListener("click", hero);
q5a1.addEventListener("click", hero);
q5a2.addEventListener("click", villain);
restart.addEventListener("click", rQuiz);


function villain(){
  vScore += 1
  qCount += 1

  console.log("Question count = " + qCount +" villain Score = " +vScore)

  if (qCount == 5){
    console.log("The quiz is done!")
    updateResult()
  }
}


function hero(){
  hScore += 1
  qCount += 1

  console.log("Question count = " + qCount +" hero Score = " +hScore)
  
  if (qCount == 5){
    console.log("The quiz is done!")
    updateResult()
  }
  
}

function updateResult(){

  beforeRes.addEventListener("click", showRes);
  
}

function showRes(){

  if (hScore >=3){
    result.innerHTML = "You are a hero!";
    console.log("You are a hero!")
  } else if (vScore >=3){
    result.innerHTML = "You are a villain!";
    console.log("You are a villain!")
  }
}

function rQuiz(){
  result.innerHTML = "You are a..";
  qCount = 0;
  hScore = 0;
  vScore = 0;
  console.log("Question count = " + qCount +" hero Score = " +hScore + " villain Score = " + vScore);
  enableQs();
}

q1a1.addEventListener("click", dQ1);
q1a2.addEventListener("click", dQ1);
q2a1.addEventListener("click", dQ2);
q2a2.addEventListener("click", dQ2);
q3a1.addEventListener("click", dQ3);
q3a2.addEventListener("click", dQ3);
q4a1.addEventListener("click", dQ4);
q4a2.addEventListener("click", dQ4);
q5a1.addEventListener("click", dQ5);
q5a2.addEventListener("click", dQ5);

function dQ1() {
  q1a1.disabled = true; 
  q1a2.disabled = true; 
}

function dQ2() {
  q2a1.disabled = true; 
  q2a2.disabled = true; 
}

function dQ3() {
  q3a1.disabled = true; 
  q3a2.disabled = true; 
}

function dQ4() {
  q4a1.disabled = true; 
  q4a2.disabled = true; 
}

function dQ5() {
  q5a1.disabled = true; 
  q5a2.disabled = true; 
}

function enableQs(){
  q1a1.disabled = false; 
  q1a2.disabled = false; 
  q2a1.disabled = false; 
  q2a2.disabled = false;
  q3a1.disabled = false; 
  q3a2.disabled = false;
  q4a1.disabled = false; 
  q4a2.disabled = false;
  q5a1.disabled = false; 
  q5a2.disabled = false;
}