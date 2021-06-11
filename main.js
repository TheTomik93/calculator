let buttons = document.querySelectorAll(".button");
let numberButtons = document.querySelectorAll(".number");
let inputDisplay = document.querySelector("#displayBottom");
let resultDisplay = document.querySelector("#displayTop");
let pointButton = document.querySelector("#point");
let clearButton = document.querySelector("#clear");
let deleteButton = document.querySelector("#delete");
let operatorButtons = document.querySelectorAll(".operator");
let equalsButton = document.querySelector("#equals");

let numOne = 0;
let numTwo = 0;
let operator = "";
let result = 0;

buttons.forEach(button => button.addEventListener("mousedown", buttonDown));
buttons.forEach(button => button.addEventListener("mouseup", buttonUp));
buttons.forEach(button => button.addEventListener("mouseout", buttonUp));
numberButtons.forEach(button => button.addEventListener("click", function() {appendNumber(button.textContent)}));
pointButton.addEventListener("click", appendPoint);
clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteLast);
operatorButtons.forEach(button => button.addEventListener("click", function(){operatorPressed(button.textContent)}));
equalsButton.addEventListener("click", equalsPressed);

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
    numOne = 0;
    numTwo = 0;
    operator = "";
    resultDisplay.textContent = "";
    inputDisplay.textContent = "0";
}

function deleteLast(){
    if (inputDisplay.textContent === "0"){
        return;
    }
    inputDisplay.textContent = inputDisplay.textContent.slice(0, -1); 
}

function equalsPressed(){
    numTwo = Number(inputDisplay.textContent);
    resultDisplay.textContent = `${numOne} ${operator} ${numTwo} =`;
    calculate();
    operator = "";
    inputDisplay.textContent = result;
}

function operatorPressed(chosenOperator){
    numTwo = Number(inputDisplay.textContent);
    inputDisplay.textContent = "";
    calculate();
    operator = chosenOperator;
    resultDisplay.textContent = `${numOne} ${operator}`;
}

function calculate(){
    switch (operator){
        case "":
            numOne = numTwo;
            break;
        case "+": 
            add(numOne, numTwo);
            break;
        case "-": 
            substract(numOne, numTwo);
            break;
        case "*": 
            multiply(numOne, numTwo);
            break;
        case "/": 
            divide(numOne, numTwo);
            break;
        case "=":
            equals(numOne, numTwo);
        default:
            break;
    }
};

function add(a,b){
    result = (a + b);
    numOne = result;
}
function substract(a,b){
    result = (a - b);
    numOne = result;
}
function multiply(a,b){
    result = (a * b);
    numOne = result;
}  
function divide(a,b){
    result = (a / b);
    numOne = result;
}