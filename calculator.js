let calculatorWidget = document.querySelector("#calculator-widget");
let calculatorDisplay = document.querySelector("#display");
let a, b;
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
    let currentInput = calculatorDisplay.textContent;

    for (let i = 0; i < currentInput.length; i++) {
        let currentChar = currentInput[i];

        const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const operators = ["+", "-", "*", "/"];

        if (digits.includes(parseInt(currentChar))) {
            a += currentChar;
        }
    }
}

calculatorWidget.addEventListener("click", (event) => {
    let target = event.target;

    if (target.nodeName != "BUTTON") {
        return;
    }

    switch (target.textContent) {
        case "CLEAR":
            a = undefined;
            b = undefined;
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