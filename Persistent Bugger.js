// Kata => https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

var persistence = function( num ) {
  var digitsArray, count;
  for (count = 0; num >= 10 /*single digit*/; count++) {
      digitsArray = num.toString().split("").map(Number); 
      num = digitsArray.reduce( (product, currentDigit) => product * currentDigit );
  }
  return count;
}