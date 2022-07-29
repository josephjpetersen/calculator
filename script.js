const screen = document.querySelector('.screen');
const numButtons = Array.from(document.getElementsByClassName('num-buttons'));
const calcButtons = Array.from(document.getElementsByClassName('calc-buttons'));
const clearButtons = Array.from(document.getElementsByClassName('clear-buttons'));

let num1 = undefined;
let num2 = undefined;
let operator = false;
let resultState = false;

clearButtons.forEach((button) =>
  button.addEventListener('click', () => {
    if (button.innerText === 'AC') {
      num1 = undefined;
      num2 = undefined;
      operator = false;
      resultState = false;
      screen.innerText = '';
    } else {
      if (num1 && num2) {
        if (resultState = true) {
          num1 = undefined;
          num2 = undefined;
          operator = false;
          resultState = false;
          screen.innerText = '';
        } else {
          num2 = undefined;
          operator = false;
          screen.innerText = num1;
        }
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
    if (operator !== false) {
      if (resultState == true) {
        num2 = undefined;
        resultState = false;
        console.log('reset');
      }
      if (num2 === undefined) {
        num2 = button.innerText;
      } else {
        num2 += button.innerText;
      }
      screen.innerText = num2;
    } else if (operator == false) {
        if (num1 === undefined) {
          num1 = button.innerText;
        } else {
          num1 += button.innerText;
        }
      screen.innerText = num1;
    }
  })
);

calcButtons.forEach((button) =>
  button.addEventListener('click', () => {
    if (num1 === undefined) {
      return;
    } else if (num1 && !num2) {
      if (button.innerText === '='){
        return;
      } else {
        operator = button.innerText;
      }
    } else {
      if (button.innerText === '='){
        num1 = operate (num1, num2, operator);
        resultState = true;
        screen.innerText = num1;
      } else {
        operator = button.innerText;
      }
    }
  })
)

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

function operate (num1, num2, operator) {

  let result = 0;
  x = Number(num1);
  y = Number(num2)

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

  return +result.toFixed(9);
}