// Kata => https://www.codewars.com/kata/53f40dff5f9d31b813000774

const recoverSecret = triplets => {
  /* --- Get the length of the secret string --- */
  const allUniqueLetters = new Set();
  for (const triplet of triplets)
    for (const letter of triplet)
      allUniqueLetters.add(letter);
  const completeSecretStringLength = allUniqueLetters.size;                                                                                                   
  
  /* --- Build the secret string --- */
  let secretString = triplets[0].join('');
  // Completion test depending on the length
  const secretStringCompleted = () => (secretString.length === completeSecretStringLength) ? true : false; 
  
  // (1) Add letters on both sides until the secret string reaches to the first and last letter
  (function addLettersOnBothSides() {
    for (let i = 1; i < triplets.length; i++) {
      const currentTriplet = triplets[i];
      const secretStringFirstLetter = secretString[0];
      const secretStringLastLetter = secretString[secretString.length-1];
      let lettersToAdd;
  
      if ((secretStringFirstLetter === currentTriplet[1]) || (secretStringFirstLetter === currentTriplet[2])) { // It's not the first letter
        lettersToAdd = currentTriplet.slice(0, currentTriplet.indexOf(secretStringFirstLetter)).join('');
        secretString = lettersToAdd + secretString;
        
        if (secretStringCompleted()) 
          return;
        
        i = 1;
      } else if ((secretStringLastLetter === currentTriplet[0]) || (secretStringLastLetter === currentTriplet[1])) { // It's not the last letter
        lettersToAdd = currentTriplet.slice(currentTriplet.indexOf(secretStringLastLetter) + 1).join('');
        secretString += lettersToAdd;
        
        if (secretStringCompleted())
          return;
        
        i = 1;
      }
    }
  })();
  
  if (secretStringCompleted()) 
    return secretString;
  
  // (2) Search for the consecutive letters in your secret string and find letters that lives between them in triplets
  (function addMiddles() {
    for (const index in secretString) {
      const lastIndex = index === (secretString.length - 1)
      if (lastIndex)
        break;
      for (let i = 1; i < triplets.length; i++) { // First triplet's letters are all included, hence "i = 1"
        const currentTriplet = triplets[i]
        const [tripletFirstLetter, tripletMiddleLetter, tripletLastLetter] = currentTriplet;
        if ((secretString[index] === tripletFirstLetter) && (secretString[Number(index)+1] === tripletLastLetter)) {
          secretString = secretString.slice(0, (secretString.indexOf(tripletFirstLetter)+1)) + tripletMiddleLetter + secretString.slice(secretString.indexOf(tripletLastLetter));
          if (secretStringCompleted()) 
            return;
        }
      }
    }
  })();
  
  if (secretStringCompleted())
    return secretString;
  
  // (3) Add the remaining not included letters
  let pendingLetters = [];
  
  (function addNotIncludedLetter(notIncludedLetter) {
    if (notIncludedLetter === undefined) {
      const findNotIncludedLetter = () => {
        for (const letter of allUniqueLetters) 
          if (!secretString.includes(letter)) 
            return letter;
      }
      notIncludedLetter = findNotIncludedLetter();
    }
    
    let higherIndex;
    for (let i = 1; i < triplets.length; i++) {
      const currentTriplet = triplets[i];
      if (currentTriplet[1] === notIncludedLetter || currentTriplet[2] === notIncludedLetter) {
        const letterBefore = currentTriplet[currentTriplet.indexOf(notIncludedLetter)-1];
        const indexOfLetterBeforeInSecret = secretString.indexOf(letterBefore);
        if (indexOfLetterBeforeInSecret === -1) {
          pendingLetters.push(notIncludedLetter);
          return addNotIncludedLetter(letterBefore);
        }
        if (higherIndex === undefined) 
          higherIndex = indexOfLetterBeforeInSecret;
        else 
          higherIndex = (indexOfLetterBeforeInSecret > higherIndex) ? indexOfLetterBeforeInSecret : higherIndex;
      }
    }
    secretString = secretString.slice(0, (higherIndex + 1)) + notIncludedLetter + secretString.slice(higherIndex + 1);
    
    if (pendingLetters.length !== 0)
      addNotIncludedLetter(pendingLetters.pop());
    
    if (secretStringCompleted())
      return;
    else
      addNotIncludedLetter();
  })();
  
  return secretString;
}