const a = [1, 2, 3, 4, 5];

// console.log(a.flatMap((num) => [num * 2]));

Array.prototype.myFlatMap = function (cb, thisargs) {
  // console.log("hi", this);

  return this.reduce((acc, curr, i, array) => {
    const mappedValue = cb.call(thisargs, curr, i, array);
    return acc.concat(mappedValue);
  }, []);
};

// console.log(a.myFlatMap((num) => num * 2));
// console.log(a.myFlatMap((num) => [num * 2]));

let arr = [10, 40, 50, 20, 60, 30];
arr.sort((a, b) => a - b);

let result = [];
let index = 0;

for (let size = 1; index < arr.length; size++) {
  result.push(arr.slice(index, index + size));
  index += size;
}

console.log(result);

// o/p [[10],[20,30],[40,50,60] ]
