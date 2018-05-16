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

function computeProducts2(arr) {
  const newArr = [];
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    newArr.push(product / arr[i]);
  }

  return newArr;

}

console.log(computeProducts2([1, 3, 9, 4]));