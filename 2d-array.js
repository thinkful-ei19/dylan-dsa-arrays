function setToZero(arr) {

  const mainObj = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        mainObj.push({ i, j, has0: true });
      } else {
        mainObj.push({ i, j, has0: false });
      }
    }
  }

  for (let k = 0; k < mainObj.length; k++) {

    let item = mainObj[k];

    if (item.has0) {
      for (let l = 0; l < arr.length; l++) {
        arr[item.i][l] = 0;
        for (let m = 0; m < arr[l].length; m++) {
          arr[m][item.j] = 0;
        }
      }
    }
  }
  return arr;
}

console.log(setToZero([
  [1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1]
]));