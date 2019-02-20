// Kata => https://www.codewars.com/kata/523f5d21c841566fde000009

var array_diff = function( a, b ) {
  for (var i = 0; i < a.length; i++) 
      if ( b.includes(a[i]) ) {
          a.splice(i, 1);
          i--;
      }
  return a;
}