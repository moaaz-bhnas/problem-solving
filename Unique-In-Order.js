// Kata => https://www.codewars.com/kata/54e6533c92449cc251001667

const uniqueInOrder = letters => {
  const result = [];
  for (let i = 0; i < letters.length; i++) {
      const current = letters[i],
            previous = letters[i-1];
      if (current !== previous) 
          result.push(letters[i]);
  }
  return result;
}