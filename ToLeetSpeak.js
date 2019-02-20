// Kata => https://www.codewars.com/kata/57c1ab3949324c321600013f

var toLeetSpeak = function( str ) {
  var leetCharacters = ['@', '8', '(', 'D', '3', 'F', '6', '#', '!', 'J', 'K', '1', 'M', 'N', '0', 'P', 'Q', 'R', '$', '7', 'U', 'V', 'W', 'X', 'Y', '2'],
      alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      result = "",
      leetCharacter;
  for (var i = 0; i < str.length; i++) {
      leetCharacter = (str[i] === " ") ? " " 
                                       : leetCharacters[alphabet.indexOf(str[i])];
      result += leetCharacter;
  }
  return result;
}