const filterArr = [1, 2, 3, 4, 5];

const greaterNumber = filterArr.filter((num) => num > 2);

console.log(greaterNumber);
console.log(filterArr);

Array.prototype.myFilter = function (cb) {
  let temp = [];

  for (let index = 0; index < this.length; index++) {
    if (cb(this[index])) {
      temp.push(this[index]);
    }
  }
  return temp;
};

const greaterNumber3 = filterArr.myFilter((num) => num > 3);
console.log(greaterNumber3);
console.log(filterArr);
