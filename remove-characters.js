function removeCharacters(str, remove) {

  let newStr = '';
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let end = i;
    if (remove.includes(str[i])) {
      newStr += str.slice(start, end);
      end = i;
      start = end + 1;
    } else if (i === str.length - 1) {
      newStr += str.slice(start, str.length);
    }
  }
  return newStr;
}

console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));