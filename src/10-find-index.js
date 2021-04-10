function findIndex(array, value) {
  let a = 0;
  let b = array.length;
  let i;
  while (1) {
    i = Math.floor((a + b) / 2);
    if (array[i] === value) {
      break;
    } else if (array[i] > value) {
      b = --i;
    } else {
      a = ++i;
    }
  }
  return i;
}
module.exports = findIndex;
