// Kata => https://www.codewars.com/kata/58663693b359c4a6560001d6

var mazeRunner = function( maze, directions ) {
  var direction,
      startPoint = 2, 
      endPoint = 3, 
      wall = 1,
      row, column,
      currentNumber;
  for (let i = 0; i < maze.length; i++) {
      if ( maze[i].includes(startPoint) ) {
          row = i;
          column = maze[row].indexOf(startPoint);
          break;
      }
  }
  for (let i = 0; i < directions.length; i++) {
      direction = directions[i];
      switch ( direction ) {
          case "N" :
              row -= 1;
              if ( maze[row] === undefined )
                  return "Dead";
              else {
                  currentNumber = maze[row][column];
                  switch ( currentNumber ) {
                      case wall:
                          return "Dead";
                          break;
                      case endPoint:
                          return "Finish";
                          break;
                  }
              }
              break;
          case "S" :
              row += 1;
              if ( maze[row] === undefined )
                  return "Dead";
              else {
                  currentNumber = maze[row][column];
                  switch ( currentNumber ) {
                      case wall:
                          return "Dead";
                          break;
                      case endPoint:
                          return "Finish";
                          break;
                  }
              }
              break;
          case "E" :
              column += 1;
              if ( maze[row][column] === undefined )
                  return "Dead";
              else {
                  currentNumber = maze[row][column];
                  switch ( currentNumber ) {
                      case wall:
                          return "Dead";
                          break;
                      case endPoint:
                          return "Finish";
                          break;
                  }
              }
              break;
          case "W" :
              column -= 1;
              if ( maze[row][column] === undefined )
                  return "Dead";
              else {
                  currentNumber = maze[row][column];
                  switch ( currentNumber ) {
                      case wall:
                          return "Dead";
                          break;
                      case endPoint:
                          return "Finish";
                          break;
                  }
              }
              break;
      }
  }
  return "Lost";
}