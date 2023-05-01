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
  operand.push(getOperandValue());
  document.querySelector("#operand").value = "";
  addition = true;
}

function result() {
  console.log(calculate());
}

function minus() {
  operand.push(getOperandValue());
  document.querySelector("#operand").value = "";
  subtraction = true;
}

function multiply() {
  operand.push(getOperandValue());
  document.querySelector("#operand").value = "";
  multiplication = true;
}

function divide() {
  operand.push(getOperandValue());
  document.querySelector("#operand").value = "";
  division = true;
}
