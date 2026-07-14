let calculatorWidget = document.querySelector("#calculator-widget");
let calculatorDisplay = document.querySelector("#display");
let a = 0;
let b = 0;
let operator;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    switch (operator) {
        case "+":
            add(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "*":
            multiply(a, b);
            break;
        case "/":
            divide(a, b);
            break;
    }
}

function getInput() {

}

calculatorWidget.addEventListener("click", (event) => {
    let target = event.target;

    if (target.nodeName != "BUTTON") {
        return;
    }

    switch (target.textContent) {
        case "CLEAR":
            calculatorDisplay.textContent = "";
            break;
        case "DEL":
            calculatorDisplay.textContent = calculatorDisplay.textContent.slice(0, calculatorDisplay.textContent.length - 1);
            break;
        case "=":
            getInput();
            break;
        default:
            calculatorDisplay.textContent += target.textContent;
            break;
    }
});