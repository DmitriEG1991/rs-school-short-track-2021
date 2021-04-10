function getSumOfDigits(n) {
  let str = String(n);
  let res;
  do {
    let a = 0;
    for (let i = 0; i < str.length; i++) {
      a += Number(str[i]);
    }
    str = String(a);
    res = a;
  } while (str.length > 1);
  return res;
}

module.exports = getSumOfDigits;
