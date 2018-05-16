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

function removeCharacters2(str, remove) {

  const letters = {};
  let newStr = '';

  for (let i = 0; i < remove.length; i++) {
    letters[remove[i]] = i;
  }

  for (let i = 0; i < str.length; i++) {
    if (!(str[i] in letters)) {
      newStr += str[i];
    }
  }

  return newStr;

}

//O(n^2)

console.log(removeCharacters2('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));