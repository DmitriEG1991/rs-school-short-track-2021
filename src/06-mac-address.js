function isMAC48Address(n) {
  const str = String(n);
  const arr = str.split('');
  let res = true;
  const mass = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', '-'];
  for (let i = 0; i < arr.length; i++) {
    if (mass.includes(arr[i]) !== true) {
      res = false;
    }
  }
  return res;
}

module.exports = isMAC48Address;
