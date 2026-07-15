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
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

calculatorWidget.addEventListener("click", (event) => {
    let target = event.target;

    if (target.nodeName != "BUTTON") {
        return;
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
            let numberPair = calculatorDisplay.textContent.split(operator);
            a = parseInt(numberPair[0]);
            b = parseInt(numberPair[1]);
            calculatorDisplay.textContent = operate(a, b, operator);
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