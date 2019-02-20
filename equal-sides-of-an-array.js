// Kata => https://www.codewars.com/kata/5679aa472b8f57fb8c000047

const findEvenIndex = arr => {
  for (const index in arr) {
    const rightNumbers = arr.slice(0, index);
    const rigthSum = rightNumbers.reduce(((acc, curr) => acc + curr), 0);
    const leftNumbers = arr.slice(Number(index)+1);
    const leftSum = leftNumbers.reduce(((acc, curr) => acc + curr), 0);
    if (rigthSum === leftSum) return Number(index);
  }
  return -1;
}

findEvenIndex([1,2,3,4,3,2,1]); //=> 3