const once = function (fn) {
  let isExecuted = false;
  let result;
  return function (...arg) {
    if (!isExecuted) {
      isExecuted = true;
      result = fn(...arg);
    }
    return result;
  };
};

const addition = function (a, b) {
  let sum = a + b;
  return sum;
};

const checkExecution = once(addition);
console.log(checkExecution(2, 3));
console.log(checkExecution(3, 4));
console.log(checkExecution(4, 5));
