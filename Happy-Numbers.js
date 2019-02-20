// Kata => https://www.codewars.com/kata/59d53c3039c23b404200007e

const isHappy = num => {
  const adder = (acc, curr) => acc + Math.pow(Number(curr), 2)
  
  const sums = [];
  while (true) {
    const sum = num.toString().split('').reduce(adder, 0);
    if (sum === 1) {
      return true;
    } else if (sums.includes(sum)) {
      return false;
    } else {
      sums.push(sum)
      num = sum;
    }
  }
}

const happyNumbers = num => {
  const happyNumbers = [];
  for (let i = 1; i <= num; i++) {
    if (isHappy(i)) {
      happyNumbers.push(i);
    }
  }
  return happyNumbers;
}