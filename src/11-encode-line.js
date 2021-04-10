function encodeLine(str) {
  let res = '';
  let a = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      a++;
    } else if (str[i] !== str[i + 1] && a === 1) {
      res += str[i];
    } else {
      res = res + String(a) + str[i];
      a = 1;
    }
  }
  return res;
}

module.exports = encodeLine;
