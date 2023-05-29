
const arr = ["10+5"];
const arrReplace = arr[0];
if (arrReplace.includes("-")) {
  const arrSplit = arrReplace.split("-");
  const arrReduce = arrSplit.reduce((a, b) => a - b);
  console.log(arrReduce);
} else if (arrReplace.includes("+")) {
  const arrSplit = arrReplace.split("+");
  const arrReduce = arrSplit.reduce((a, b) => Number(a) + Number(b));
  console.log(arrReduce);
}


const stringOperation = '10+5' 
console.log(stringOperation);


let expresion = [ "6",
  "-",
  "3"
]

function operar(arr, callback) {
  let result = Number(arr[0]);
  for (let i = 1; i < arr.length; i += 2) {
    let operador = arr[i];
    let numero = Number(arr[i + 1]);

    result = callback(result, operador, numero);
  }
  return result;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function split(a, b) {
  return a / b;
}

let result = operar(expresion, function(a, operador, b) {
  switch (operador) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return split(a, b);
    default:
      throw new Error('Operador inválido: ' + operador);
  }
});

console.log(result);


let array = [6, 8, 7]
let arrayJoin = array.join("")
console.log(arrayJoin);

let arrTwo = ['6+8-7']
let marks = /(\+|\-|\*|\/)/;
let separateArr = arrTwo.map( e => e.split(marks)).flat();

console.log(separateArr);

const text = "Esta oración es de ejemplo";
const lastCharacter = text[text.length - 1];

console.log(lastCharacter);