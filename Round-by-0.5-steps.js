// Kata => https://www.codewars.com/kata/51f1342c76b586046800002a

const solution = num => {
  const integer = Math.floor(num);
  const decimalPortion = num % 1;
  
  return (decimalPortion >= .25 && decimalPortion < .75) ? integer + .5
                                                         : Math.round(num);
}