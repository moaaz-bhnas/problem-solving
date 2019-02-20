// Kata => https://www.codewars.com/kata/54df2067ecaa226eca000229

var f = function( n ) {
  if ( Number.isInteger(n) && n > 0 ) {
      var result = 0;
      for (var count = 1; count <= n; count++) {
          result += count;
      }
      return result;
  }
  else
      return false;
}