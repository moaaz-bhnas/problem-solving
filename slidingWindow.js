function naiveMaxSubarraySum(arr, n) {
  if (arr.length === 0) return null;

  // Create a variable to hold the max value
  let maxSum = -Infinity;

  // Loop
  for (let i = 0; i + n <= arr.length; i++) {
    // Add sub array
    const subArraySum = arr
      .slice(i, i + n)
      .reduce((acc, curr) => acc + curr, 0);
    // if subArraySum > sum, then sum = subArraySum
    if (subArraySum > maxSum) maxSum = subArraySum;
  }

  return maxSum;
}

console.log(naiveMaxSubarraySum([8, 5, 4, 6, 2, 7, 1, 4], 4)); // 23
console.log(naiveMaxSubarraySum([2, 8, 4, 3], 3)); // 15
console.log(naiveMaxSubarraySum([], 3)); // null

function MaxSubarraySum(arr, n) {
  if (n < arr.length) return null;

  let prevSubarraySum = arr.slice(0, n).reduce((acc, curr) => acc + curr, 0);
  let maxSubarraySum = prevSubarraySum;

  for (let i = 1; i + n <= arr.length; i++) {
    const newSubarraySum = prevSubarraySum - arr[i - 1] + arr[i + n - 1];

    if (newSubarraySum > maxSubarraySum) maxSubarraySum = newSubarraySum;

    prevSubarraySum = newSubarraySum;
  }
  return maxSubarraySum;
}

console.log(MaxSubarraySum([8, 5, 4, 6, 2, 7, 1, 2], 4)); // 13
console.log(MaxSubarraySum([2, 8, 4, 3], 3)); // 15
console.log(MaxSubarraySum([], 3)); // null
