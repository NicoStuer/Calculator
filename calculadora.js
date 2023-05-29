const calculator = document.getElementById("calculator");
const calcConsole = document.getElementById("result");
const currentResult = document.getElementById("currentResult");

const signsArr = ["+", "-", "*", "/"];
const regexNum = /^[0-9]$/;
const regexMarks = /(\+|\-|\*|\/)/;
let numArr = [];
let isInputEmpty = calcConsole.value === "";

calculator.addEventListener("click", (e) => {
  targetButtons(e);
});

const targetButtons = (e) => {
  if (regexNum.test(e.target.value)) {
    let num = e.target.value;
    currentResult.value += num;
  }
  if (signsArr.find((el) => el === e.target.value)) {
    let currentResultValue = currentResult.value;
    let currentResultLastIndex = currentResultValue.charAt(
      currentResultValue.length - 1
    );
    console.log(currentResultLastIndex);
    if (regexMarks.test(currentResultLastIndex)) {
      return;
    }
    calcConsole.style.display = "none";
    currentResult.value += e.target.value;
    console.log(currentResult.value);

    if (currentResult.value.length > 15) {
      const textLength = currentResult.value.length;
      const fontSize = 40 - textLength;
      currentResult.style.fontSize = fontSize + "px";
    }
  }
  if (e.target.value === "=") {
    let string = currentResult.value;
    numArr = string.split(regexMarks).flat();
    if (!isInputEmpty) {
      return;
    }
    calcConsole.style.display = "block";

    let res = operate(numArr, operatorDesign);

    calcConsole.value = res;
    numArr = [];
    numArr.push(res);
  }
  if (e.target.value == "C") {
    numArr = [];
    currentResult.value = "";
    calcConsole.value = "";
  }
  e.stopPropagation();
};

function operate(arr, operation) {
  let res = Number(arr[0]);
  for (let i = 1; i < arr.length; i += 2) {
    let operador = arr[i];
    let secondNum = Number(arr[i + 1]);

    res = operation(res, operador, secondNum);
  }
  return res;
}

function operatorDesign(a, operator, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return substract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return split(a, b);
    default:
      throw new Error("Operador inválido: " + operador);
  }
}

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function split(a, b) {
  return a / b;
}
