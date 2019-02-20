// Kata => https://www.codewars.com/kata/558cb3df5f511f40d500001d

const nouveau = (constructor, ...args) => {
  if ((typeof constructor() === 'object' || typeof constructor() === 'function') && constructor() !== null) return constructor(...args);
  const instance = {};
  constructor.call(instance, ...args);
  instance.__proto__ = constructor.prototype;
  return instance;
}