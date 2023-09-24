const input = document.querySelector("#operand");
const decimalButton = document.querySelector("#decimalButton");
const backspaceButton = document.querySelector("#backspace");
const divisionButton = document.querySelector("#divisionButton");
const multiplyButton = document.querySelector("#multiplyButton");
const minusButton = document.querySelector("#minusButton");
const addButton = document.querySelector("#addButton");
const formulaScreen = document.querySelector("#formula");

let operand = [];
let addition = false;
let subtraction = false;
let multiplication = false;
let division = false;

function calculate() {
  let equals = 0;
  switch (true) {
    case addition:
      for (let i = 0; i < operand.length; i++) {
        equals += operand[i];
      }
      break;
    case subtraction:
      for (let i = 0; i < operand.length; i++) {
        equals -= operand[i];
      }
      break;
    case multiplication:
      equals = 1;
      for (let i = 0; i < operand.length; i++) {
        equals *= operand[i];
      }
      break;
    case division:
      for (let i = 0; i < operand.length; i++) {
        equals /= operand[i];
      }
      break;

    default:
      break;
  }
  return equals;
}

function getOperandValue() {
  return parseInt(document.querySelector("#operand").value);
}

function result() {
  firstOperand = formulaScreen.textContent.slice(0, -1);
  formulaText = formulaScreen.textContent;
  operator = formulaText.charAt(formulaText.length - 1);
  secondOperand = input.value;
  switch (operator) {
    case '+':
      add(firstOperand, secondOperand);
      break;
    case '-':
      console.log(operator);
      minus(firstOperand, secondOperand);
      break;
    case 'x':
      multiply(firstOperand, secondOperand);
      break;
      case '÷':
      divide(firstOperand, secondOperand);
      break;
    default:
      break;
  }
}

function add(operationOne, operationTwo) {
  operationOne = parseInt(operationOne);
  operationTwo = parseInt(operationTwo);
  resultValue = operationOne + operationTwo;
  formulaScreen.textContent = `${operationOne} + ${operationTwo} = `
  input.value = resultValue;
}


function minus(operationOne, operationTwo) {
  operationOne = parseInt(operationOne);
  operationTwo = parseInt(operationTwo); 
  resultValue = operationOne - operationTwo;
  formulaScreen.textContent = `${operationOne} - ${operationTwo} = `
  input.value = resultValue;
  console.log(resultValue);
}

function multiply(operationOne, operationTwo) {
  operationOne = parseInt(operationOne);
  operationTwo = parseInt(operationTwo); 
  resultValue = operationOne * operationTwo;
  formulaScreen.textContent = `${operationOne} x ${operationTwo} = `
  input.value = resultValue;
}

function divide(operationOne, operationTwo) {
  operationOne = parseInt(operationOne);
  operationTwo = parseInt(operationTwo); 
  resultValue = operationOne / operationTwo;
  formulaScreen.textContent = `${operationOne} ÷ ${operationTwo} = `
  input.value = resultValue;
}

function appendDigit(digit) {
  backspaceButton.disabled = false;
  if (digit === ".") {
    decimalButton.disabled = true;
  }
  if (input.value != 0 || digit === "." || decimalButton.disabled) {
    input.value = input.value.concat(digit);
  } else {
    input.value = digit;
  }
}

function clearInput() {
  addButton.disabled = false;
  formulaScreen.textContent = "";
  input.value = 0;
}

function backspace() {
  inputValue = input.value;
  inputValue = inputValue.slice(0, -1);
  //checks if the digit in the screen is the last digit
  if (inputValue.length === 0) {
    input.value = 0;
  } else {
    input.value = inputValue;
  }
}

function appendFormula(operator){
  switch (operator) {
    case 'add':
      formulaScreen.textContent = `${input.value} +`
      break;
    case 'minus':
      formulaScreen.textContent = `${input.value} -`
      break;
    case 'multiply':
      formulaScreen.textContent = `${input.value} x`
    break;
    case 'divide':
      formulaScreen.textContent = `${input.value} ÷`
      break
    default:
      break;
  }
  input.value = 0;
}