function mergeArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  const mergedArray = [];

  while (mergedArray.length < (arr1.length + arr2.length)) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else if (arr2[j] < arr1[i]) {
      mergedArray.push(arr2[j]);
      j++;
    } else if (arr1[i] === arr2[j]) {
      mergedArray.push(arr1[i], arr2[j]);
      i++;
      j++;
    } else if (!arr1[i]) {
      mergedArray.push(arr2[j]);
      j++;
    } else if (!arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    }
  }

  return mergedArray;
}

console.log(mergeArrays([1, 3, 6, 8, 11, 13], [2, 3, 5, 8, 9, 10]));