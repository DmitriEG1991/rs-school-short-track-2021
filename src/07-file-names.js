function renameFiles(n) {
  const names = n;
  for (let i = 0; i < names.length; i++) {
    let a = 1;
    for (let j = i + 1; j < names.length; j++) {
      if (names[i] === names[j]) {
        names[j] = `${names[i]}(${a})`;
        a++;
      }
    }
  }
  return names;
}

module.exports = renameFiles;
