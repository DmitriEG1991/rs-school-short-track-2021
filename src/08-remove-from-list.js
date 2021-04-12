function removeKFromList(l, k) {
  let a = l;
  do {
    if (a.value === k) {
      a.value = a.next.value;
      a.next = a.next.next;
    } else {
      a = a.next;
    }
  } while (!(a.next === null));
  return l;
}

module.exports = removeKFromList;
