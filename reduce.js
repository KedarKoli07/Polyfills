const reduceArr = [1, 2, 3, 4, 5];

const multiply = reduceArr.reduce((acc, itr) => {
  return acc * itr;
}, 1);

// console.log(multiply);
// console.log(reduceArr);

Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;
  for (let index = 0; index < this.length; index++) {
    acc = acc ? cb(acc, this[index]) : this[index];
  }
  return acc;
};

const multiplyMyReduce = reduceArr.myReduce((acc, itr) => {
  return acc * itr;
}, 1);
console.log(multiplyMyReduce);
console.log(reduceArr);
