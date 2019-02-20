// Kata => https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
  var vowels = ["a", "e", "i", "o", "u"];
  var vowelsCount = 0;
  for (var i = 0; i < str.length; i++)
      if (vowels.includes(str[i]))
          vowelsCount++
  return vowelsCount;
}