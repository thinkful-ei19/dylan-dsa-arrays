function filterArray(arr) {
  const filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) filteredArray.push(arr[i]);
  }
  return filteredArray;
}

console.log(filterArray([2, 5, 3, 7, 10]));
