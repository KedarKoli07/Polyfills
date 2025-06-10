// The .map() method is used to create a new array with transformed values. It takes a callback function, applies it to each element, and collects the returned values into a new array.

// The callback function must return a value because .map() is creating a new array.
// temp.push(callback(this[index], index, this)); stores the returned values.

const mapArr = [1, 2, 3, 4, 5];

mapArr.map((num) => console.log(num * 2));

function multiply(num) {
  return num * 2;
}

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let index = 0; index < this.length; index++) {
    temp.push(cb(this[index], index, this));
  }
  return temp;
};

const newArr = mapArr.myMap(multiply);

console.log("new", newArr);
console.log("original", mapArr);
