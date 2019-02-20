// Kata => https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

const firstNonRepeatingLetter = str => {
  const counts = new Map();
  
  for (const letter of str) {
    const lowerCaseLetter = letter.toLowerCase();
    if (counts.has(lowerCaseLetter)) {
      counts.set(lowerCaseLetter, counts.get(lowerCaseLetter)+1)
    } else {
      counts.set(lowerCaseLetter, 1)
    }
  }
  
  for (const count of counts) {
    const [letter, occurrences] = count;
    
    if (occurrences === 1) {
      const nonRepeatingLetterIndex = str.toLowerCase().indexOf(letter);
      return str[nonRepeatingLetterIndex];
    }
  }
  
  return '';
}