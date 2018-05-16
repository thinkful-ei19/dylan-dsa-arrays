const MyArray = require('./from-scratch');

function main() {

  MyArray.SIZE_RATIO = 3;

  //create an instance of the array class
  let arr = new MyArray();

  //add an item to the array
  arr.push(3);

  console.log(arr);
}

main();