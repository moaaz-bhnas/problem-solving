// Kata => https://www.codewars.com/kata/5626b561280a42ecc50000d1

var powerOfDigitsSum = function( num ) {
  var numberOfDigits = num.toString().length,
      exponent = 1,
      result = 0;
  for (var i = 0; i < numberOfDigits; i++) {
      var currentDigit = Number(num.toString()[i]);
      result += Math.pow( currentDigit, exponent );
      exponent++;
  }
  return result;
}

var sumDigPow = function( a, b ) {
  var arr = [];
  for (var num = a; num <= b; num++) 
      if ( powerOfDigitsSum( num ) === num )
          arr.push(num);
  return arr;
}