// Kata => https://www.codewars.com/kata/5467e4d82edf8bbf40000155

const descendingOrder = num => Number(num.toString().split("").map( ele => Number(ele) ).sort( (a, b) => b - a ).join(""));