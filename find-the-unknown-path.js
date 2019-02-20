// Kata => https://www.codewars.com/kata/546d15cebed2e10334000ed9

const solveExpression = exp => {
  const operatorIndex = exp.slice(1).search(/[\+\-\*]/) + 1; // '.slice(1)': Start searching after the possible leading (-)
  const equalIndex = exp.search(/=/);
  const operator = exp[operatorIndex];
  
  const startingTestingDigit = (/^\?[\?\d]|[=\+\-\*]\?[\?\d]/.test(exp)) ? 1 : 0; // Numbers don't start with 0 unless it's 0
    
  switch (operator) {
    case '+': 
      for (let digit = startingTestingDigit; digit <= 9; digit++) {
        if (exp.includes(digit.toString())) {
          continue; // won't be one of the other given digits in the expression
        }
        const operand1 = Number(exp.slice(0, operatorIndex).replace(/\?/g, digit));
        const operand2 = Number(exp.slice(operatorIndex+1, equalIndex).replace(/\?/g, digit));
        const answer = Number(exp.slice(equalIndex+1).replace(/\?/g, digit));
        if (operand1 + operand2 === answer) {
          return digit;
        }
      }
      break;
    case '-': 
      for (let digit = startingTestingDigit; digit <= 9; digit++) {
        if (exp.includes(digit.toString())) {
          continue;
        }
        const operand1 = Number(exp.slice(0, operatorIndex).replace(/\?/g, digit));
        const operand2 = Number(exp.slice(operatorIndex+1, equalIndex).replace(/\?/g, digit));
        const answer = Number(exp.slice(equalIndex+1).replace(/\?/g, digit));
        if (operand1 - operand2 === answer) {
          return digit;
        }
      }
      break;
    case '*': 
      for (let digit = startingTestingDigit; digit <= 9; digit++) {
        if (exp.includes(digit.toString())) {
          continue;
        }
        const operand1 = Number(exp.slice(0, operatorIndex).replace(/\?/g, digit));
        const operand2 = Number(exp.slice(operatorIndex+1, equalIndex).replace(/\?/g, digit));
        const answer = Number(exp.slice(equalIndex+1).replace(/\?/g, digit));
        if (operand1 * operand2 === answer) {
          return digit;
        }
      }
  }
  
  return -1;
}