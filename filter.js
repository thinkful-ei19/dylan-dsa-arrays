function filterArray(arr) {
  const filteredArray = [];
  arr.forEach(x => {
    if (x >= 5) {
      filteredArray.push(x);
    }
  });
  return filteredArray;
}

console.log(filterArray([2, 5, 3, 7, 10]));
