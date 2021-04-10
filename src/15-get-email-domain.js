function getEmailDomain(email) {
  const mass = email.split('@');
  const res = mass[mass.length - 1];
  return res;
}

module.exports = getEmailDomain;
