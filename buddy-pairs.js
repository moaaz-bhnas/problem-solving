// Kata => https://www.codewars.com/kata/59ccf051dcc4050f7800008f

const buddy = (start, limit) => {
  for (let n = start; n <= limit; n++) {
    const m = getDivisorsSum(n) - 1; // From "s(n) = m + 1"
    if ((m > start) && (getDivisorsSum(m) === (n+1))) { // From "s(m) = n + 1"
      return [n, m];
    }
  }
  return "Nothing";
}

const getDivisorsSum = num => {
  let sum = 1;
  for (let divisor = 2;  divisor <= Math.sqrt(num); divisor++) {
    const quotient = num/divisor;
    if (Number.isInteger(quotient)) {
      sum += (divisor === quotient) ? divisor
                                    : (divisor + quotient);
    }
  }
  return sum;
}

buddy(23, 4669) //=> [48, 75]