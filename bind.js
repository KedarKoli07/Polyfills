const user = {
  firstName: "kedar",
  lastName: "koli",
};

let printName = function (homeTown, state, msg) {
  console.log(
    `My name is ${this.firstName} ${this.lastName}. I live in ${homeTown} ${state} ${msg}`
  );
};

const person = printName.bind(user, "Navi Mumbai");
person("Maharashtra");

// first Approach

Function.prototype.myBind = function (...args) {
  let obj = this;
  param = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...param, ...args2]);
  };
};

const person2 = printName.myBind(user, "Navi Mumbai");
person2("Maharashtra");

// Second Approach
Function.prototype.myBind_V2 = function (obj = {}, ...args) {
  obj.fn = this;
  return function (...args2) {
    obj.fn(...args, ...args2);
  };
};

const person3 = printName.myBind_V2(user, " Mumbai", "pincode");
person3("Maharashtra");
