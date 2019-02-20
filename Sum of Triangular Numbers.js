// Kata => https://www.codewars.com/kata/580878d5d27b84b64c000b51

var sumTriangularNumbers = function( num ) {
  var result = 0,
      triangularNum = 0;
  for (var count = 1; count <= num; count++) {
      triangularNum += count;
      result += triangularNum;
  }
  return result;
}