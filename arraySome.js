const a = [12, 2, 3, 5, 7, 9, 11];

function greaterThanTen(ele) {
  return ele > 20;
}

console.log(a.some(greaterThanTen));

Array.prototype.mySome = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

const modulus = a.mySome((num) => num % 8 === 0);
const greatherthanTen = a.mySome((num) => num > 10);
console.log(modulus);
console.log(greatherthanTen);

console.log(a.mySome(greaterThanTen));
