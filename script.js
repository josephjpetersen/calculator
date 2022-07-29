const screen = document.querySelector('.screen');
const numButtons = Array.from(document.getElementsByClassName('num-buttons'));
const calcButtons = Array.from(document.getElementsByClassName('calc-buttons'));
const clearButtons = Array.from(document.getElementsByClassName('clear-buttons'));

let num1 = undefined;
let num2 = undefined;
let operator = false;

clearButtons.forEach((button) =>
  button.addEventListener('click', () => {
    if (button.innerText === 'AC') {
      num1 = undefined;
      num2 = undefined;
      operator = false;
      screen.innerText = '';
    } else {
      if (operator == true) {
        num2 = undefined;
        screen.innerText = '';
      } else {
        num1 = undefined;
        num2 = undefined;
        operator = false;
        screen.innerText = '';
      }
    }
  })
)

numButtons.forEach((button) =>
  button.addEventListener('click', () => {
    if (operator == true) {
      if (num2 === undefined) {
        num2 = button.innerText;
      } else if (num2 >= 0) {
        num2 += button.innerText;
      }
      screen.innerText = num2;
    } else if (operator == false) {
        if (num1 === undefined) {
          num1 = button.innerText;
        } else if (num1 >= 0) {
          num1 += button.innerText;
        }
      screen.innerText = num1;
    }
  })
);



function getSum (x, y) {
  return x + y;
}

function getDifference (x, y) {
  return x - y;
}

function getProduct (x, y) {
  return x * y;
}

function getQuotient (x, y) {
  return x / y;
}

function getRemainder (x, y) {
  return x % y;
}

function operate (x, y, operator) {

  let result = 0;

  if (operator == '+') {
    result = getSum(x, y)
  } else if (operator == '-') {
    result = getDifference(x, y);
  } else if (operator == 'x') {
    result = getProduct(x, y);
  } else if (operator == '÷') {
    result = getQuotient(x, y);
  } else if (operator == '%') {
    result = getRemainder(x, y);
  }

  return result;
}