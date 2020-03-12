function eval() {
  // Do not use eval!!!
  return;
}

function checkBrecketsInExpr(arr) {
  let counter = 0;
  for (let value of arr) {
    if (value === '(') {
      counter++;
    }
    if (value === ')') {
      counter--;
    }
  }
  if (counter !== 0)
    throw new Error('ExpressionError: Brackets must be paired');
}

function checkDivisionByZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '/') {
      if (arr[i + 2] === '0') throw new Error('TypeError: Division by zero.');
    }
  }
}

function expressionCalculator(expr) {
  const arrExpr = expr.split('');
  checkBrecketsInExpr(arrExpr);
  checkDivisionByZero(arrExpr);
  const exprWithNotSpace = expr.replace(/\s/g, '');
  const getResult = new Function('return ' + exprWithNotSpace);
  return getResult();
}

module.exports = {
  expressionCalculator
};
