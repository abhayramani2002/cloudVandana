var buttons = document.getElementsByClassName("button");
var display = document.getElementById("result");

var operand1 = 0;
var operand2 = null;
var operator = null;

function isOperator(value) {
  return value == "+" || value == "-" || value == "*" || value == "/";
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    var text = display.textContent.trim();

    if (isOperator(value)) {
      operator = value;
      operand1 = parseFloat(text);
      if (operand1) {
        display.textContent = text + operator;
      } else {
        display.textContent = "";
      }
    } else if (value == "ac") {
      display.textContent = "";
      operand1 = 0;
      operand2 = null;
      operator = null;
    } else if (value == "sign") {
      if (operand1) {
        operand1 = parseFloat(text) * -1;
      } else {
        operand1 = "-";
      }
      display.textContent = operand1;
    } else if (value == ".") {
      if (text.length && !text.includes(".")) {
        display.textContent = text + ".";
      }
    } else if (value == "%") {
      operand1 = parseFloat(text) / 100;
      display.textContent = operand1;
    } else if (value == "=") {
      operand2 = parseFloat(text.split(operator)[1]);
      if (operator === "/" && operand2 === 0) {
        display.textContent = "Error";
      } else {
        var result = calculate(operand1, operator, operand2);
        display.textContent = result;
        operand1 = result;
        operand2 = null;
        operator = null;
      }
    } else {
      display.textContent += value;
    }
  });
}

function calculate(operand1, operator, operand2) {
  switch (operator) {
    case "+":
      return operand1 + operand2;
    case "-":
      return operand1 - operand2;
    case "*":
      return operand1 * operand2;
    case "/":
      return operand1 / operand2;
    default:
      return operand2;
  }
}
