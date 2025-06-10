const a = [1, [2, 3], 4, [5, 6, 7], 8, 9, 0];
const b = [0, 1, [2, [3, [4, 5]]]];

// console.log(a.flat());
// console.log(b.flat(2));
// console.log(b.flat(Infinity));

Array.prototype.myFlat1 = function (args) {
  // using concat with spread for lvl 1
  return [].concat(...this);

  // using concat with apply for lvl 1
  //  return [].concat.apply([], this);

  // using reduce for lvl 1
  // return this.reduce((acc, val) => acc.concat(val), []);
};

console.log(a.myFlat1());

Array.prototype.myFlat2 = function (depth = 1) {
  if (depth < 1) return this.slice();
  return this.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      acc.push(...curr.myFlat2(depth - 1));
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
};

console.log(b.myFlat2());
console.log(b.myFlat2(2));
console.log(b.myFlat2(Infinity));
