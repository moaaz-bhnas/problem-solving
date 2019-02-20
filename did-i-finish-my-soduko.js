// Kata => https://www.codewars.com/kata/53db96041f1a7d32dc0004d2

/* --- Rows --- */
const rowIsValid = row => {
  const duplicatesCheckerArr = [];
  for (const cell of row) {
    if ((cell === 0) || duplicatesCheckerArr.includes(cell)) {
      return false;
    } else {
      duplicatesCheckerArr.push(cell);
    }
  }
  return true;
}

const rowsAreValid = grid => {
  for (const row of grid) {
    if (!rowIsValid) {
      return false;
    }
    return true;
  }
}

/* --- Columns --- */
const columnIsValid = (grid, columnIndex) => {
  const duplicatesCheckerArr = [];
  for (const row of grid) {
    const cell = row[columnIndex];
    if ((cell === 0) || duplicatesCheckerArr.includes(cell)) {
      return false;
    } else {
      duplicatesCheckerArr.push(cell);
    }
  }
  return true;
}

const columnsAreValid = grid => {
  for (let i = 0; i < 9; i++) {
    if (!columnIsValid(grid, i)) {
      return false;
    }
  }
  return true;
}

/* --- Regions --- */
const regionIsValid = (grid, row, column) => {
  const duplicatesCheckerArr = [];
  for (let i = row; i < (row+3); i++) {
    for (let j = column; j < (column+3); j++) {
      const cell = grid[i][j];
      if ((cell === 0) || duplicatesCheckerArr.includes(cell)) {
        return false;
      } else {
        duplicatesCheckerArr.push(cell);
      }
    }
  }
  return true;
}

const regionsAreValid = grid => {
  const regionsStartingPoints = [
    [0, 0],
    [0, 3],
    [0, 6],
    [3, 0],
    [3, 3],
    [3, 6],
    [6, 0],
    [6, 3],
    [6, 6]
  ]
  
  for (const point of regionsStartingPoints) {
    const [row, column] = point;
    if (!regionIsValid(grid, row, column)) {
      return false;
    }
  }
  
  return true;
}


/* --- The Whole Board --- */
const doneOrNot = grid => {
  return (regionsAreValid(grid) && rowsAreValid(grid) && columnsAreValid(grid)) ? 'Finished!'
                                                                                : 'Try again!';
}