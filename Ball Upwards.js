// Kata => https://www.codewars.com/kata/566be96bb3174e155300001b

var maxBall = function( initialVelocity ) {
  initialVelocity *= (5/18);
  var time = 0,
      height,
      gravity = 9.81,
      heights = [];
  do {
      time += 0.1;
      height = initialVelocity * time - 0.5 * gravity * Math.pow(time, 2);
      heights.push(height);
  } while ( height >= 0 )
  var maxHeight = Math.max(...heights),
      maxHeightTime = heights.indexOf(maxHeight) + 1;
  return maxHeightTime;
}