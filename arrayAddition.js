let a = [1, 2, 3, 4, 5, 6];

Array.prototype.myAddition = function () {
  //using reduce
  return this.reduce((acc, curr) => {
    return (acc += curr);
  }, 0);
};

console.log(a.myAddition());

Array.prototype.myAddition1 = function () {
  // using for loop
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum;
};

console.log(a.myAddition1());
