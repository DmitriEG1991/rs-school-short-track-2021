function sortByHeight(arr) {
  const mass = [];
  let mass2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      mass.push(i);
    } else {
      mass2.push(arr[i]);
    }
  }
  mass2 = mass2.sort((a, b) => a - b);
  const res = [];
  for (let i = 0, a = 0, b = 0; i < arr.length; i++) {
    if (i === mass[b]) {
      res.push(-1);
      b++;
    } else {
      res.push(mass2[a]);
      a++;
    }
  }
  return res;
}

module.exports = sortByHeight;
