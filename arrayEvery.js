const a = [3, 4, 5, 6, 7, 8, 9];

function greaterThanTwo(ele) {
  return ele > 6;
}

console.log(a.every(greaterThanTwo));

Array.prototype.myEvery = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (!cb(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

console.log(a.myEvery((num) => num > 4));
