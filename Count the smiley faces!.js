// Kata => https://www.codewars.com/kata/583203e6eb35d7980400002a

var countSmileys = function( arr ) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
      if ( arr[i].length === 2 ) {
          if ( [":", ";"].includes(arr[i][0]) && [")", "D"].includes(arr[i][1]) )
              result += 1;
      } else if ( arr[i].length === 3 ) {
          if ( [":", ";"].includes(arr[i][0]) && ["-", "~"].includes(arr[i][1]) && [")", "D"].includes(arr[i][2]) )
              result += 1;
      }
  }
  return result;
}