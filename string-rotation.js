function stringRotation(str1, str2) {
  return (str1 + str1).includes(str2);
}

console.log(stringRotation('amazon', 'azonma'));
console.log(stringRotation('amazon', 'azonam'));