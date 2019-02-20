// Kata => https://www.codewars.com/kata/52774a314c2333f0a7000688

const validParentheses = parentheses => {
  while (parentheses.length !== 0) {
    if (!(parentheses[0] === '(') || !parentheses.includes(')')) {
      return false;
    }
  
    for (let i = 1; i < parentheses.length; i++) {      
      if (parentheses[i] === ')') {
        parentheses = parentheses.slice(1, i) + parentheses.slice(Number(i)+1);
        break;
      }
    }
  }
  
  return true;
}