// Kata => https://www.codewars.com/kata/5613d06cee1e7da6d5000055

var step = function( g, m, n ) {
  var isPrime = function( num ) {
      for (var x = 2; x < num; x++) {
          if ( num % x === 0 ) 
              return false;
      }
      return true;
  },
      primes = [];
  for (var x = m; x <= n; x++) {
      if ( isPrime( x ) ) {
          primes.push(x);
          for (var i = 0; i < primes.length; i++) 
              if (x - primes[i] === g) 
                  return [primes[i], x];
      }
  }
  return null;
}