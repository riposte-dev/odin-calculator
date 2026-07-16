const operators = ["+", "-", "*", "/"];

let calculatorWidget = document.querySelector("#calculator-widget");
let calculatorDisplay = document.querySelector("#display");

let calculatorInput = "";
let operator = "";
let a = 0;
let b = 0;
let result = 0;

function add(a, b) {
    if (isNaN(a)) {
        a = 0;
    }

    if (isNaN(b)) {
        b = 0;
    }

    return a + b;
}

function subtract(a, b) {
    if (isNaN(a)) {
        a = 0;
    }

    if (isNaN(b)) {
        b = 0;
    }

    return a - b;
}

function multiply(a, b) {
    if (isNaN(a)) {
        a = 1;
    }

    if (isNaN(b)) {
        b = 1;
    }

    return a * b;
}

function divide(a, b) {
    if (isNaN(a)) {
        a = 1;
    }

    if (isNaN(b)) {
        b = 1;
    }

    if (b == 0) {
        return "UNDEFINED";
    }

    return a / b;
}

function operate(a, b, operator) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

function evaluateNumberPair() {
    let numberPair = calculatorDisplay.textContent.split(operator);
    a = parseFloat(numberPair[0]);
    b = parseFloat(numberPair[1]);
    calculatorInput = operate(a, b, operator);
    result = calculatorInput;
    calculatorDisplay.textContent = Math.round(calculatorInput * 1000) / 1000;
}

calculatorWidget.addEventListener("click", (event) => {
    let target = event.target;

    if (target.nodeName != "BUTTON") {
        return;
    }

    /* If user pressed an operator button, check for any existing operators and perform that operation first */
    if (operators.includes(target.textContent)) {
        for (let i = 0; i < calculatorInput.length; i++) {
            if (operators.includes(calculatorInput[i])) {
                evaluateNumberPair();
            }
        }
    }
    
    switch (target.textContent) {
        case "+":
            operator = "+";
            result = "";
            break;
        case "-":
            operator = "-";
            result = "";
            break;
        case "*":
            operator = "*";
            result = "";
            break;
        case "/":
            operator = "/";
            result = "";
            break;
        default:
            if (result != "") {
                calculatorInput = "";
                result = "";
                calculatorDisplay.textContent = "";
            }
    }

    switch (target.textContent) {
        case "=":
            evaluateNumberPair();
            break;
        case "CLEAR":
            a = 0;
            b = 0;
            calculatorInput = "";
            calculatorDisplay.textContent = calculatorInput;
            break;
        case "DEL":
            calculatorInput = calculatorInput.slice(0, calculatorInput.length - 1);
            calculatorDisplay.textContent = calculatorInput;
            break;
        default:
            calculatorInput += target.textContent;
            calculatorDisplay.textContent = calculatorInput;
            break;
    }
});