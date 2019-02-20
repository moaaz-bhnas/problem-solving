// Kata => https://www.codewars.com/kata/55b42574ff091733d900002f

function friend(friends){
  var result = [];
  for (var i = 0; i < friends.length; i++) 
      if (friends[i].length === 4)
          result.push(friends[i]);
  return result;
}