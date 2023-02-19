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
        return "Anda pa alla!";
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
    } else if (buttonValue === "=") {
      const result = operate(
        operador,
        parseInt(firstNumber),
        parseInt(secondNumber)
      );
      display.textContent = result;
      firstNumber = result;
      secondNumber = "";
      operador = "";
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
  
  const buttons = document.querySelectorAll(".calculator-key");
  buttons.forEach((button) => button.addEventListener("click", buttonClick));
  
