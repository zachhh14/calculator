const input = document.querySelector("#operand");
const decimalButton = document.querySelector("#decimalButton");
const backspaceButton = document.querySelector("#backspace");
backspaceButton.disabled = true;
let num1 = 0;
let num2 = 0;
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

function add() {
  clearInput();
  operand.push(getOperandValue());
  addition = true;
}

function result() {
  clearInput();
  console.log(calculate());
}

function minus() {
  clearInput();
  operand.push(getOperandValue());
  subtraction = true;
}

function multiply() {
  clearInput();
  operand.push(getOperandValue());
  multiplication = true;
}

function divide() {
  clearInput();
  operand.push(getOperandValue());
  division = true;
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
  decimalButton.disabled = false;
  input.value = 0;
}

function backspace() {
  inputValue = input.value;
  inputValue = inputValue.slice(0, -1);
  //checks if the digit in the screen is the last digit
  if(inputValue.length === 0){ 
    input.value = 0;
  } else {
    input.value = inputValue;
  }
}