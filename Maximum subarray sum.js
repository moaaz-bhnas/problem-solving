// Kata => https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

var maxSequence = function( arr ) {
  var max = 0,
      total;
  for (var i = 0; i < arr.length; i++) {
      for (var j = arr.length; j > i; j--) {
          total = arr.slice(i, j).reduce( (acc, val) => acc + val );
          if ( total > max )
              max = total;
      }
  }
  return max;
}