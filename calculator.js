function suma(a, b) {
  return a + b;
}
function resta(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  return a / b;
}

function operate(operador, a, b) {
  switch (operador) {
    case "+":
      return suma(a, b);
    case "-":
      return resta(a, b);
    case "*":
      return multiplicar(a, b);
    case "/":
      return dividir(a, b);
    default:
      return "¡Error operador incorrecto!";
  }
}

const display = document.querySelector(".calculator-display");

let firstNumber = "";
let secondNumber = "";
let operador = "";

function buttonClick(event) {
  const buttonValue = event.target.textContent;

  if (
    buttonValue === "+" ||
    buttonValue === "-" ||
    buttonValue === "*" ||
    buttonValue === "/"
  ) {
    operador = buttonValue;
    display.textContent = operador;
    display.textContent = firstNumber + " " + operador + " " + secondNumber + " = " + result;
  } else if (buttonValue === "=") {
    const result = operate(
      operador,
      parseInt(firstNumber),
      parseInt(secondNumber)
    );
  } else if (buttonValue === "C") {
    firstNumber = "";
    secondNumber = "";
    operador = "";
    display.textContent = "0";
  } else {
    if (operador === "") {
      firstNumber = firstNumber + buttonValue;
      display.textContent = firstNumber;
    } else {
      secondNumber = secondNumber + buttonValue;
      display.textContent = secondNumber;
    }
  }
}
function operate() {
  let result = 0;

  switch (operador) {
    case "+":
      result = parseInt(firstNumber) + parseInt(secondNumber);
      break;
    case "-":
      result = parseInt(firstNumber) - parseInt(secondNumber);
      break;
    case "*":
      result = parseInt(firstNumber) * parseInt(secondNumber);
      break;
    case "/":
      result = parseInt(firstNumber) / parseInt(secondNumber);
      break;
  }

  display.textContent = result;
}

const buttons = document.querySelectorAll(".calculator-key");
buttons.forEach((button) => button.addEventListener("click", buttonClick));
