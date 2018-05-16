function urlify(str) {
  return str.split(' ').join('%20');
}

console.log(urlify('tauhida parveen'));
console.log(urlify('www.thinkful.com /tauh ida parv een'));

