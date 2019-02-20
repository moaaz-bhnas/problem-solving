// Kata => https://www.codewars.com/kata/54d4c8b08776e4ad92000835

const isPP = n => {
  const maxM = Math.floor(Math.sqrt(n));

  for (let m = maxM; m >= 2; m--) {
    for (let k = 2; Math.pow(m, k) <= n; k++) {
      if (Math.pow(m, k) === n) {
        return [m, k];
      }
    }
  }
  
  return null;
}