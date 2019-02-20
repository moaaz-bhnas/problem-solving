// Kata => https://www.codewars.com/kata/54c27a33fb7da0db0100040e

var isSquare = function(n){
  if (Number.isInteger(Math.sqrt(n))) {
    return true;
  } else {
    return false;
  }
}