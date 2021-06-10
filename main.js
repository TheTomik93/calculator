let buttons = document.querySelectorAll(".button");
let numberButtons = document.querySelectorAll(".number");
let inputDisplay = document.querySelector("#displayBottom");
let resultDisplay = document.querySelector("#displayTop");
let pointButton = document.querySelector("#point");
let clearButton = document.querySelector("#clear");
let deleteButton = document.querySelector("#delete");

buttons.forEach(button => button.addEventListener("mousedown", buttonDown));
buttons.forEach(button => button.addEventListener("mouseup", buttonUp));
buttons.forEach(button => button.addEventListener("mouseout", buttonUp));
numberButtons.forEach(button => button.addEventListener("click", function() {appendNumber(button.textContent)}));
pointButton.addEventListener("click", appendPoint);
clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteLast);

function buttonDown(){
    this.style.backgroundColor = "var(--button-down)";
}

function buttonUp(){
    this.style.backgroundColor = "var(--button-up)";
}

function appendNumber(number){
    if (inputDisplay.textContent === "0"){
        inputDisplay.textContent = number;
    }
    else {
        inputDisplay.textContent += number;
    }
}

function appendPoint(){
    if (inputDisplay.textContent.includes(".")) return;
    inputDisplay.textContent += ".";
}

function clear(){
    if (inputDisplay.textContent === "0"){
        resultDisplay.textContent = "";
    }
    inputDisplay.textContent = "0";
}

function deleteLast(){
    if (inputDisplay.textContent === "0"){
        return;
    }
    inputDisplay.textContent = inputDisplay.textContent.slice(0, -1); 
}




function add(a,b){
    return (a + b);
}
function substract(a,b){
    return (a - b);
}
function multiply(a,b){
    return (a * b);
}  
function divide(a,b){
    return (a / b);
}
