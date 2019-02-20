// Kata => https://www.codewars.com/kata/54bb6f887e5a80180900046b

var reverse = function( str ) {
  return str.split("").reverse().join("");
} 

var longestPalindrome = function( str ) {
  var longestStr = 0;
  for (var i = 0; i < str.length; i++) 
      for (var j = str.length; j > i; j--) {
          var substr = str.slice(i, j)
          if (substr === reverse(substr) && substr.length > longestStr) 
              longestStr = substr.length;
      }
  return longestStr;
}