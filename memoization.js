const memoizedSquare = function () {
  let chache = {};
  return function (num) {
    if (chache[num]) {
      console.log("Fetching from cache:", num);
      return chache[num];
    } else {
      console.log("Calculating:", num);
      let result = num * num;
      chache[num] = result;
      return result;
    }
  };
};

const square = memoizedSquare();

console.log(square(5)); // ❗Calculating... 25
console.log(square(5)); // ✅ Fetching from cache... 25
console.log(square(6)); // ❗Calculating... 36
console.log(square(6)); // ✅ Fetching from cache... 36
