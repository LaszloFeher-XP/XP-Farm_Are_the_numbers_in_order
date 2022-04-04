class Kata {

  inAscOrder(arr) {
    const ordered = [...arr];
    ordered.sort((a, b) => {
      return a - b;
    });
    return arr.join('') === ordered.join('');
  }
}

module.exports = {
  Kata,
};