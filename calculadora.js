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
    console.log(numArr);
  }
  if (signsArr.find((el) => el === e.target.value)) {
    let currentResultValue = currentResult.value;
    let currentResultLastIndex = currentResultValue.charAt(
      currentResultValue.length - 1
    );
    if(regexMarks.test(currentResultLastIndex)){
      return
    }
    calcConsole.style.display = "none";
    currentResult.value += e.target.value;
    console.log(currentResult.value);
    

    console.log(currentResultLastIndex);
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

    let resultado = operar(numArr, operatorDesign);

    calcConsole.value = resultado;
    numArr = [];
    numArr.push(resultado);
  }
  if (e.target.value == "C") {
    numArr = [];
    currentResult.value = "";
    calcConsole.value = "";
  }
  e.stopPropagation();
};

function operar(arr, operation) {
  let resultado = Number(arr[0]);
  for (let i = 1; i < arr.length; i += 2) {
    let operador = arr[i];
    let numero = Number(arr[i + 1]);

    resultado = operation(resultado, operador, numero);
  }
  return resultado;
}

function operatorDesign(a, operador, b) {
  switch (operador) {
    case "+":
      return sumar(a, b);
    case "-":
      return restar(a, b);
    case "*":
      return multiplicar(a, b);
    case "/":
      return dividir(a, b);
    default:
      throw new Error("Operador inválido: " + operador);
  }
}

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}
