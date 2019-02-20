// Kata => https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

const plus      = b => ['+', b];
const minus     = b => ['-', b];
const times     = b => ['*', b];
const dividedBy = b => ['/', b];

const zero  = arr => (arr) ? detectOperatorAndSolve(0, arr) : 0
const one   = arr => (arr) ? detectOperatorAndSolve(1, arr) : 1
const two   = arr => (arr) ? detectOperatorAndSolve(2, arr) : 2
const three = arr => (arr) ? detectOperatorAndSolve(3, arr) : 3
const four  = arr => (arr) ? detectOperatorAndSolve(4, arr) : 4
const five  = arr => (arr) ? detectOperatorAndSolve(5, arr) : 5
const six   = arr => (arr) ? detectOperatorAndSolve(6, arr) : 6
const seven = arr => (arr) ? detectOperatorAndSolve(7, arr) : 7
const eight = arr => (arr) ? detectOperatorAndSolve(8, arr) : 8
const nine  = arr => (arr) ? detectOperatorAndSolve(9, arr) : 9

const detectOperatorAndSolve = (a, arr) => {
  const [operator, b] = arr;

  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return Math.floor(a / b);
  }
}