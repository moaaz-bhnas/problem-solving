// Kata => https://www.codewars.com/kata/549ee8b47111a81214000941

const knight = (start, finish) => {
  console.log(start, finish);
  const letterDifference = Math.abs(start[0].charCodeAt(0) - finish[0].charCodeAt(0));
  const numberDifference = Math.abs(Number(start[1]) - Number(finish[1]));
  let moves;
  
  /* First Case (positions are vertical) --- */
  const positionsAreVertical = (letterDifference === 0);
  if (positionsAreVertical) {
    moves = (numberDifference === 7) ? 5
          : (numberDifference === 6) ? 4
          : (numberDifference % 2 === 0) ? 2
          : 3; 
    console.log('first');
    return moves;          
  }

  /* Second Case (positions are horizontal) --- */
  const positionsAreHorizontal = (numberDifference === 0);
  if (positionsAreHorizontal) {
    moves = (letterDifference === 7) ? 5
          : (letterDifference === 6) ? 4
          : (letterDifference % 2 === 0) ? 2
          : 3; 
    console.log('second');
    return moves;          
  }

  /* Third Case (positions are diagonal) --- */
  const positionsAreDiagonal = (letterDifference === numberDifference);
  if (positionsAreDiagonal) {
    const onEdge = (start === 'a1') || start === 'a8' || start === 'h1' || (start === 'h8') || (finish === 'a1') || (finish === 'a8') || (finish === 'h1') || (finish === 'h8');
    moves = (letterDifference === 7) ? 6
          : (((letterDifference === 1) && !onEdge) || (letterDifference === 3)) ? 2
          : 4;
    console.log('third');
    return moves;          
  }

  /* Fourth Case
  _______x
  x
  */
  if ((numberDifference === 7 && letterDifference === 1) || (numberDifference === 1 && letterDifference === 7)) {
    moves = 4;
    console.log('fourth');
    return moves;    
  }

  /* Fifth Case
  _______x
  ______x
  x
  */
  const fifthCase = (letterDifference === numberDifference-5) || (numberDifference === letterDifference-5);
  if (fifthCase) {
    moves = ((letterDifference === 6) || (numberDifference === 6)) ? 3
          : 5;
    console.log('fifth');
    return moves;          
  }

  /* Sixth Case
  _______x
  ______x
  _____x
  X
  */
  const sixthCase = (letterDifference === numberDifference-4) || (numberDifference === letterDifference-4);
  if (sixthCase) {
    moves = 4;
    console.log('sixth');
    return moves;    
  }

  /* Seventh Case
  _______x
  ______x
  _____x
  ____x
  X
  */
  const seventhCase = (letterDifference === numberDifference-3) || (numberDifference === letterDifference-3);
  if (seventhCase) {
    moves = ((letterDifference === 7 && numberDifference === 4) || (letterDifference === 4 && numberDifference === 7)) ? 5
          : 3;
    console.log('seventh');
    return moves;          
  }

  /* eighth Case
  _______x
  ______x
  _____x
  ____x
  ___x
  X
  */
  const eighthCase = (letterDifference === numberDifference-2) || (numberDifference === letterDifference-2);
  if (eighthCase) {
    moves = ((letterDifference === 5 && numberDifference === 3) || (letterDifference === 6 && numberDifference === 4) || (letterDifference === 7 && numberDifference === 5) || (letterDifference === 3 && numberDifference === 5) || (letterDifference === 4 && numberDifference === 6) || (letterDifference === 5 && numberDifference === 7)) ? 4
          : 2;
    console.log('eighth');
    return moves;          
  }

  /* Ninth Case
  _______x
  ______x
  _____x
  ____x
  ___x
  __x
  X
  */
  const ninthCase = (letterDifference === numberDifference-1) || (numberDifference === letterDifference-1);
  if (ninthCase) {
    moves = ((letterDifference === 2 && numberDifference === 1) || (numberDifference === 2 && letterDifference === 1)) ? 1
          : ((letterDifference === 7) || (letterDifference === 6) || (numberDifference === 7) || (numberDifference === 6)) ? 5
          : 3;
    console.log('ninth');
    return moves;          
  }

  return 0;
}