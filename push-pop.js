const MyArray = require('./from-scratch');

function main() {

  MyArray.SIZE_RATIO = 3;

  //create an instance of the array class
  let arr = new MyArray();

  //add an item to the array

  arr.push('tauhida');
  console.log(arr[0]);
  console.log(arr.get(0));
}

main();

//What is the length, capacity and memory address of your array?
//Length: 1, capacity: 3, ptr: 0

//What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code
//Length: 6, capacity: 12, ptr: 3
//We have a length of 6 because we pushed 6 items to the array. Our capacity increased to 12 because we needed to resize because our length and capacity were the same. After resizing, our capacity became (3+1) * 3 === 12. After resizing, the pointer moved down the line to make room for the 3 new spaces, putting the pointer at index 3.


//What is the length, capacity and address of your array? Explain the result of your program after adding the new lines of code
//Length: 3, capacity: 12, ptr: 3
//All we did here was get rid of the last 3 items so our length went down to 3 but our capacity and ptr stayed the same.

// What is the result? Can you explain your result?
//Result: NaN. The array is expecting only numbers.

//What is the purpose of the _resize() function in your Array class?
//The _resize() function is a private function that helps the other array functions.