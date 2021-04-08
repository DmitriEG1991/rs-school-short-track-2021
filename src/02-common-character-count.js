function getCommonCharacterCount(s1, s2) {
  let output = 0;
  let mass = s2;
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < mass.length; j++) {
      if (s1[i] === mass[j]) {
        output++;
        mass = mass.slice(0, j) + mass.slice(j + 1);
        break;
      }
    }
  }
  return output;
}

module.exports = getCommonCharacterCount;
