function findIndex(array, value) {
  let a = 0;
  let b = array.length;
  let i;
  let s = 0;
  while (s === 0) {
    i = Math.floor((a + b) / 2);
    if (array[i] === value) {
      s = 1;
    } else if (array[i] > value) {
      b = --i;
    } else {
      a = ++i;
    }
  }
  return i;
}
module.exports = findIndex;
