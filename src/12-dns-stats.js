function getDNSStats(domains) {
  const str = domains.join();
  let vrem = '';
  let a = '';
  const mass = [];
  const obj = {};

  for (let i = (str.length - 1); i >= 0; i--) {
    if (str[i] === '.') {
      vrem += str[i];
      const b = vrem.split('').reverse().join('');
      a += b;
      vrem = '';
      mass.push(a);
    } else if (str[i] === ',') {
      vrem += '.';
      const b = vrem.split('').reverse().join('');
      a += b;
      vrem = '';
      mass.push(a);
      a = '';
    } else if (i === 0) {
      vrem += str[i];
      vrem += '.';
      const b = vrem.split('').reverse().join('');
      a += b;
      mass.push(a);
    } else {
      vrem += str[i];
    }
  }

  for (let i = 0; i < mass.length; i++) {
    let d = 0;
    for (let j = 0; j < mass.length; j++) {
      if (mass[i] === mass[j]) {
        d++;
      }
    }
    obj[mass[i]] = d;
  }
  return obj;
}

module.exports = getDNSStats;
