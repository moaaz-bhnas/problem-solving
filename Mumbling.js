// Kata => https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

const accum = str => str.split("").map((letter, index) => letter.toUpperCase() + letter.toLowerCase().repeat(index)).join("-");