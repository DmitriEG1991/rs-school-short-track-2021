function deleteDigit(n) {
  let str = String(n);
  const arr = str.split('');
  let min = arr[0];
  let a;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      a = i;
    }
  }
  arr.splice(a, 1);
  str = arr.join('');
  const res = Number(str);
  return res;
}

module.exports = deleteDigit;
