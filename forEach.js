// The purpose of .forEach() is not to create a new array, but to perform an operation (e.g., console.log()).
// The returned value from the callback is ignored.

const forEachArr = [1, 2, 3, 4, 5, 6, 7];
forEachArr.forEach((cb) => {
  console.log(cb * 2);
});

function multiply(num) {
  console.log(num * 3);
}

Array.prototype.myForEach = function (callback) {
  for (let index = 0; index < this.length; index++) {
    callback(this[index], index, this);
  }
};

forEachArr.myForEach(multiply);
