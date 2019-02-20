// Kata => https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  var result = 0;
  if (arr.length > 0) {
    for (var i = 0; i < arr.length; i++) {
      if (Math.sign(arr[i]) === 1) {
        result += arr[i];
      } 
    }
  } else {
    return 0;
  }
  return result;
}