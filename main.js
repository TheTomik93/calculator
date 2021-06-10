let buttons = document.querySelectorAll(".button");

buttons.forEach(button => button.addEventListener("mousedown", mousedown));
buttons.forEach(button => button.addEventListener("mouseup", mouseup));

function mousedown(){
    this.style.backgroundColor = "var(--button-down)";
}

function mouseup(){
    this.style.backgroundColor = "var(--button-up)"
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
