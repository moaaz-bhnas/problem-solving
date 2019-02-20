// Kata => https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition( text ) {
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
  var indexes = [];
  for (var i = 0; i < text.length; i++) {
      if (/^[a-z]+$/i.test(text[i])) {
          indexes.push(alphabet.indexOf(text[i].toLowerCase()) + 1);
      }
  }
  text = indexes.join(' ');
  return text;
}

alphabetPosition( "Harry Potter!" );
// "8 1 18 18 25 16 15 20 20 5 18"

