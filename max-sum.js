function findMaxSum(arr) {
  let min = 0;
  let ans = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}

console.log(findMaxSum([-4, 6, -3, 5, 11, -2, 1]));