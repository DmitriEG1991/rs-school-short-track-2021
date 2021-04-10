function minesweeper(matrix) {
  const mass = [];
  for (let i = 0; i < matrix.length; i++) {
    const mass2 = [];
    for (let j = 0; j < matrix[0].length; j++) {
      let a = 0;
      if (i > 0 && j > 0 && matrix[i - 1][j - 1] === true) {
        a++;
      }
      if (i > 0 && matrix[i - 1][j] === true) {
        a++;
      }
      if (i > 0 && j < (matrix[0].length - 1) && matrix[i - 1][j + 1] === true) {
        a++;
      }
      if (j > 0 && matrix[i][j - 1] === true) {
        a++;
      }
      if (j < (matrix[0].length - 1) && matrix[i][j + 1] === true) {
        a++;
      }
      if (i < (matrix.length - 1) && j > 0 && matrix[i + 1][j - 1] === true) {
        a++;
      }
      if (i < (matrix.length - 1) && matrix[i + 1][j] === true) {
        a++;
      }
      if (i < (matrix.length - 1) && j < (matrix[0].length - 1) && matrix[i + 1][j + 1] === true) {
        a++;
      }
      mass2.push(a);
    }
    mass.push(mass2);
  }
  return mass;
}
module.exports = minesweeper;
