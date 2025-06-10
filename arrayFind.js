const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function greaterThanFive(ele) {
  return ele > 5;
}

console.log(a.find(greaterThanFive));

Array.prototype.myFind = function (cb) {
  // console.log(this);
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};

console.log(a.myFind((num) => num > 7));
console.log(a.myFind((num) => num % 2 === 0));
