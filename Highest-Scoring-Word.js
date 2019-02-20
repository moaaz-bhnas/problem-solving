// Kata => https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

var high = function( str ) {
  var words = str.split(" "), // ["man", "i", "need" ..]
      unicodeAlphabetOffset = 96,
      wordReducer = (score, currentLetter) => score + (currentLetter.charCodeAt() - unicodeAlphabetOffset),
      scores = words.map( word => word.split("").reduce( wordReducer, 0 ) ), // [28, 9, 28 ..]
      highestScore = Math.max(...scores),
      highestScoringWord = words[scores.indexOf(highestScore)];
  return highestScoringWord;
}