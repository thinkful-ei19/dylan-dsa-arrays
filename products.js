function computeProducts(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let other in arr) {
      if (arr[i] !== arr[other]) {
        product *= arr[other];
      }
    }
    newArr.push(product);
  }
  return newArr;
}

console.log(computeProducts([1, 3, 9, 4]));