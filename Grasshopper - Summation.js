// Kata => https://www.codewars.com/kata/55d24f55d7dd296eb9000030

var summation = function (num) {
  if (num === 1) {
    return num;
  }
  
  return num + summation( num - 1 );
}