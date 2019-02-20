// Kata => https://www.codewars.com/kata/52b7ed099cdc285c300001cd

const sumIntervals = intervals => {
  const nonOverlapingIntervals = intervals.slice();
  
  for (let i = 0; i < nonOverlapingIntervals.length; i++) {
    const [start, end] = nonOverlapingIntervals[i];
    for (let j = 0; j < nonOverlapingIntervals.length; j++) {
      if (i != j) { // Looping through the other intervals
        const [otherIntervalStart, otherIntervalEnd] = nonOverlapingIntervals[j];

        // Checking for overlapping
        if ((start >= otherIntervalStart && start <= otherIntervalEnd) || (end >= otherIntervalStart && end <= otherIntervalEnd)) {
          // Removing the two ovelapping intervals and turning them into a new one, ex: [1, 3], [2, 4] => [1, 4]
          nonOverlapingIntervals.splice(i, 1);
          nonOverlapingIntervals.splice(j-1, 1); // (j-1) because a preceding element is deleted
          const newInterval = [Math.min(start, otherIntervalStart), Math.max(end, otherIntervalEnd)];
          nonOverlapingIntervals.unshift(newInterval);

          // Start over
          i = 0;
        }
      }
    }
  }
  
  const sumOfIntervals = nonOverlapingIntervals.reduce(((sum, currInterval) => sum += (currInterval[1] - currInterval[0])), 0)
  return sumOfIntervals;
}