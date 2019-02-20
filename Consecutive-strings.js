// Kata => https://www.codewars.com/kata/56a5d994ac971f1ac500003e

const longestConsec = (strarr, k) => {
  if (strarr.length === 0 || k > strarr.length || k <= 0) 
    return '';

  let longestStr = '';
  for (let i in strarr) {
    i = Number(i);
    const noElements = strarr[i+k-1] === undefined;
    if (!noElements) {
      const consecutiveStrings = strarr.slice(i, i+k).join('');

      if (consecutiveStrings.length > longestStr.length) {
        longestStr = consecutiveStrings;
      }
    }
  }
  return longestStr;
}