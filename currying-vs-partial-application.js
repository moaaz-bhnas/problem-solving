// Kata => https://www.codewars.com/kata/53cf7e37e9876c35a60002c9

const curryPartial = (func, ...argsA) => {
  if (argsA.length >= func.length) {
    return func(...argsA);
  } else {
    return (...argsB) => curryPartial(func, ...argsA, ...argsB);
  }
};

const add = (a, b, c) => {
  return a + b + c;
}

curryPartial(add, 1, 2, 3); //=> 6