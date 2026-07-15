const operators = ["+", "-", "*", "/"];
let calculatorWidget = document.querySelector("#calculator-widget");
let calculatorDisplay = document.querySelector("#display");
let a = 0;
let b = 0;
let operator;

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
    a = parseInt(numberPair[0]);
    b = parseInt(numberPair[1]);
    calculatorDisplay.textContent = operate(a, b, operator);
}

calculatorWidget.addEventListener("click", (event) => {
    let target = event.target;

    if (target.nodeName != "BUTTON") {
        return;
    }

    if (operators.includes(target.textContent)) {
        for (let i = 0; i < calculatorDisplay.textContent.length; i++) {
            if (operators.includes(calculatorDisplay.textContent[i])) {
                evaluateNumberPair();
            }
        }
    }
    
    switch (target.textContent) {
        case "+":
            operator = "+";
            break;
        case "-":
            operator = "-";
            break;
        case "*":
            operator = "*";
            break;
        case "/":
            operator = "/";
            break;
    }

    switch (target.textContent) {
        case "=":
            evaluateNumberPair();
            break;
        case "CLEAR":
            a = 0;
            b = 0;
            calculatorDisplay.textContent = "";
            break;
        case "DEL":
            calculatorDisplay.textContent = calculatorDisplay.textContent.slice(0, calculatorDisplay.textContent.length - 1);
            break;
        default:
            calculatorDisplay.textContent += target.textContent;
            break;
    }
});