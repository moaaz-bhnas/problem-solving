const validateBattlefield = field => {
  // To check the field both horizontally and vertically, I'll run the horizontal test on the field and then reverse it and run the same test.
  const fieldReversed = [];
  for (let i = 0; i < field.length; i++) {
    const newRow = [];
    for (const row of field) {
      newRow.push(row[i]);
    }
    fieldReversed.push(newRow);
  }

  /* counters --- */
  let battleship = 0, cruisers = 0, destroyers = 0, submarines = 0;
  
  /* Important Variables  --- */
  let cell, 
      cellNext, cellPrevious, cellBelow, cellAbove, 
      row, nextRow, previousRow;
  
  /* Cells Test --- */
  // Test if the cell should be (considered) because it's neither 0 nor surrounded by 1 from another line
  const cellShouldBeConsidered = (i, j) => {
    if (cell === 0) {
      return false;
    } else { // cell === 1
      if (i === 0) {
        if (cellBelow === 1) {
          return false;
        } else { // cell === 1 && cellBelow === 0
          switch (j) {
            case 0: // i === 0 && j === 0
              return (nextRow[1] === 1) ? false : true;
              break;
            case 9: // i === 0 && j === 9
              return (nextRow[8] === 1) ? false : true;
              break;
            default:
              return ((nextRow[j+1] === 1) || (nextRow[j-1] === 1)) ? false : true;
          }
        }
      } else if (i === 9) {
        if (cellAbove === 1) {
          return false;
        } else { // cell === 1 && cellAbove === 0
          switch (j) {
            case 0: // i === 9 && j === 0
              return (previousRow[1] === 1) ? false : true;
              break;
            case 9: // i === 9 && j === 9
              return (previousRow[8] === 1) ? false : true;
              break;
            default:
              return ((previousRow[j+1] === 1) || (previousRow[j-1] === 1)) ? false : true;
          }
        }
      } else {
        if ((cellBelow === 1) || (cellAbove === 1)) {
          return false;
        } else {
          if (j === 0) {
            return ((nextRow[1] === 1) || (previousRow[1] === 1)) ? false : true;
          } else if (j === 9) {
            return ((nextRow[8] === 1) || (previousRow[8] === 1)) ? false : true;
          } else {
            return ((nextRow[j-1] === 1) || (nextRow[j+1] === 1) || (previousRow[j-1] === 1) || (previousRow[j+1] === 1)) ? false : true;
          }
        }
      } 
    }
  }
  
  /* Ships Test --- */
  /* =================================================
    (1) Battleship
  ==================================================== */
  const battleshipTest = (i, j) => {
    if ((cellNext === 1) && (row[j+2] === 1) && (row[j+3] === 1)) {
      if ((i === 0) && (j === 0)) {
      /*
      [
        [1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0]
      ]
      */
        if ((row[4] === 0) && (nextRow[2] === 0) && (nextRow[3] === 0) && (nextRow[4] === 0)) {
          return true;
        }
      } else if ((i === 0) && (j === 6)) {
        /*
        [
          [0, 1, 1, 1, 1],
          [0, 0, 0, 0, 0]
        ]
        */
        if ((nextRow[8] === 0) && (nextRow[9] === 0)) {
          return true;
        }
      } else if (i === 0) {
        /*
        [
          [0, 1, 1, 1, 1, 0],
          [0, 0, 0, 0, 0, 0]
        ]
        */
        if ((row[j+4] === 0) && (nextRow[j+2] === 0) && (nextRow[j+3] === 0) && (nextRow[j+4] === 0)) {
          return true;
        }
      } else if ((i === 9) && (j === 0)) {
        /*
        [
          [0, 0, 0, 0, 0],
          [1, 1, 1, 1, 0]
        ]
        */
        if ((row[4] === 0) && (previousRow[2] === 0) && (previousRow[3] === 0) && (previousRow[4] === 0)) {
          return true;
        }
      } else if ((i === 9) && (j === 6)) {
        /*
        [
          [0, 0, 0, 0, 0],
          [0, 1, 1, 1, 1]
        ]
        */
        if ((previousRow[8] === 0) && (previousRow[9] === 0)) {
          return true;
        }
      } else if (i === 9) {
        /*
        [
          [0, 0, 0, 0, 0, 0],
          [0, 1, 1, 1, 1, 0]
        ]
        */
        if ((row[j+4] === 0) && (previousRow[j+2] === 0) && (previousRow[j+3] === 0) && (previousRow[j+4] === 0)) {
          return true;
        }
      } else if (j === 0) {
        /*
        [
          [0, 0, 0, 0, 0],
          [1, 1, 1, 1, 0],
          [0, 0, 0, 0, 0]
        ]
        */
        if ((row[4] === 0) && (nextRow[2] === 0) && (nextRow[3] === 0) && (nextRow[4] === 0) && (previousRow[2] === 0) && (previousRow[3] === 0) && (previousRow[4] === 0)) {
          return true;
        }
      } else if (j === 6) {
        /*
        [
          [0, 0, 0, 0, 0],
          [0, 1, 1, 1, 1],
          [0, 0, 0, 0, 0]
        ]
        */
        if ((nextRow[8] === 0) && (nextRow[9] === 0) && (previousRow[8] === 0) && (previousRow[9] === 0)) {
          return true;
        }
      } else {
        /*
        [
          [0, 0, 0, 0, 0, 0],
          [0, 1, 1, 1, 1, 0],
          [0, 0, 0, 0, 0, 0]
        ]
        */
        if ((row[j+4] === 0) && (nextRow[j+2] === 0) && (nextRow[j+3] === 0) && (nextRow[j+4] === 0) && (previousRow[j+2] === 0) && (previousRow[j+3] === 0) && (previousRow[j+4] === 0)) {
          return true;
        }
      }
      return false;
    } else {
      return false;
    }
  }
  
  /* =================================================
    (2) Cruiser
  ==================================================== */
  const cruiserTest = (i, j) => {
    if ((cellNext === 1) && (row[j+2] === 1)) {
      if ((i === 0) && (j === 0)) { 
      /*
      [
        [1, 1, 1, 0],
        [0, 0, 0, 0]
      ]
      */
        if ((row[3] === 0) && (nextRow[2] === 0) && (nextRow[3] === 0)) {
          return true;
        }
      } else if ((i === 0) && (j === 7)) {
        /*
        [
          [0, 1, 1, 1],
          [0, 0, 0, 0]
        ]
        */
        if ((nextRow[9] === 0)) {
          return true;
        }
      } else if (i === 0) {
        /*
        [
          [0, 1, 1, 1, 0],
          [0, 0, 0, 0, 0]
        ]
        */
        if ((row[j+3] === 0) && (nextRow[j+2] === 0) && (nextRow[j+3] === 0)) {
          return true;
        }
      } else if ((i === 9) && (j === 0)) {
        /*
        [
          [0, 0, 0, 0],
          [1, 1, 1, 0]
        ]
        */
        if ((row[3] === 0) && (previousRow[2] === 0) && (previousRow[3] === 0)) {
          return true;
        }
      } else if ((i === 9) && (j === 7)) {
        /*
        [
          [0, 0, 0, 0],
          [0, 1, 1, 1]
        ]
        */
        if ((previousRow[9] === 0)) {
          return true;
        }
      } else if (i === 9) {
        /*
        [
          [0, 0, 0, 0, 0],
          [0, 1, 1, 1, 0]
        ]
        */
        if ((row[j+3] === 0) && (previousRow[j+2] === 0) && (previousRow[j+3] === 0)) {
          return true;
        }
      } else if (j === 0) {
        /*
        [
          [0, 0, 0, 0],
          [1, 1, 1, 0],
          [0, 0, 0, 0]
        ]
        */
        if ((row[3] === 0) && (nextRow[2] === 0) && (nextRow[3] === 0) && (previousRow[2] === 0) && (previousRow[3] === 0)) {
          return true;
        }
      } else if (j === 7) {
        /*
        [
          [0, 0, 0, 0],
          [0, 1, 1, 1],
          [0, 0, 0, 0]
        ]
        */
        if ((nextRow[9] === 0) && (previousRow[9] === 0)) {
          return true;
        }
      } else {
        /*
        [
          [0, 0, 0, 0, 0],
          [0, 1, 1, 1, 0],
          [0, 0, 0, 0, 0]
        ]
        */
        if ((row[j+3] === 0) && (nextRow[j+2] === 0) && (nextRow[j+3] === 0) && (previousRow[j+2] === 0) && (previousRow[j+3] === 0)) {
          return true;
        }
      }
      return false;
    } else {
      return false;
    }
  }
  
  /* =================================================
    (3) Destroyer
  ==================================================== */
  const destroyerTest = (i, j) => {
    if (cellNext === 1) {
      if ((i === 0) && (j === 0)) { 
      /*
      [
        [1, 1, 0],
        [0, 0, 0]
      ]
      */
        if ((row[2] === 0) && (nextRow[2] === 0)) {
          return true;
        }
      } else if ((i === 0) && (j === 8)) {
        /*
        [
          [0, 1, 1],
          [0, 0, 0]
        ]
        */
        if ((nextRow[9] === 0)) {
          return true;
        }
      } else if (i === 0) {
        /*
        [
          [0, 1, 1, 0],
          [0, 0, 0, 0]
        ]
        */
        if ((row[j+2] === 0) && (nextRow[j+2] === 0)) {
          return true;
        }
      } else if ((i === 9) && (j === 0)) {
        /*
        [
          [0, 0, 0],
          [1, 1, 0]
        ]
        */
        if ((row[2] === 0) && (previousRow[2])) {
          return true;
        }
      } else if ((i === 9) && (j === 8)) {
        /*
        [
          [0, 0, 0],
          [0, 1, 1]
        ]
        */
        return true;
      } else if (i === 9) {
        /*
        [
          [0, 0, 0, 0],
          [0, 1, 1, 0]
        ]
        */
        if ((row[j+2] === 0) && (previousRow[j+2] === 0)) {
          return true;
        }
      } else if (j === 0) {
        /*
        [
          [0, 0, 0],
          [1, 1, 0],
          [0, 0, 0]
        ]
        */
        if ((row[2] === 0) && (nextRow[j+2] === 0) && (previousRow[j+2] === 0)) {
          return true;
        }
      } else if (j === 8) {
        /*
        [
          [0, 0, 0],
          [0, 1, 1],
          [0, 0, 0]
        ]
        */
        return true;
      } else {
        /*
        [
          [0, 0, 0, 0],
          [0, 1, 1, 0],
          [0, 0, 0, 0]
        ]
        */
        if ((row[j+2] === 0) && (nextRow[j+2] === 0) && (previousRow[j+2] === 0)) {
          return true;
        }
      }
      return false;
    } else {
      return false;
    }
  }
  
  /* =================================================
    (4) Submarine
  ==================================================== */
  const submarineTest = (i, j) => {
    if (j === 9) {
      return true;
    } else {
      return (cellNext === 0) ? true : false;
    }
  }
  
  /* Horizontal Test --- */
  const horizontalTest = field => {
    for (let i = 0; i < field.length; i++) { // Loop through rows
      row = field[i];
      for (let j = 0; j < row.length; j++) { // Loop through cells
        // Determining Important cells
        cell = row[j];
        if (i === 0) { // First Row
          nextRow = field[1];
          cellBelow = nextRow[j];
        } else if (i === 9) { // Last Row
          previousRow = field[8];
          cellAbove = previousRow[j];
        } else { // Middle Row
          nextRow = field[i+1];
          cellBelow = nextRow[j];
          previousRow = field[i-1];
          cellAbove = previousRow[j];
        }
        if (j === 0) { // First Cell
          cellNext = row[1];
        } else if (j === 9) { // Last Cell
          cellPrevious = row[8];
        } else { // Middle Cell
          cellNext = row[j+1];
          cellPrevious = row[j-1];
        }

        if (cellShouldBeConsidered(i, j)) {
          if (battleshipTest(i, j)) { // Battleship
            battleship++;
            j += 4;
          } else if (cruiserTest(i, j)) { // Cruiser
            cruisers++;
            j += 3;
          } else if (destroyerTest(i, j)) { // Destroyer
            destroyers++;
            j += 2;  
          }  else if (submarineTest(i, j)) { // Submarine
            submarines++;
            j++;
          }
        }
      }
    }
  }
  
  horizontalTest(field);
  horizontalTest(fieldReversed);
  submarines /= 2;

  return ((battleship === 1) && (cruisers == 2) && (destroyers === 3) && (submarines === 4)) ? true : false;
}