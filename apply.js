const user = {
  firstName: "Kedar",
  lastName: "Koli",
};

printName = function (homeTown, state, pincode) {
  console.log(
    `My name is ${this.firstName} ${this.lastName}. I live in ${homeTown} ${state} on pincode ${pincode}.`
  );
};

printName.apply(user, ["navi mumbai", "Maharashtra", "pincode"]);

Function.prototype.myApply = function (obj = {}, args = []) {
  if (Array.isArray(args)) {
    throw new Error("Not an array");
  }
  obj.fn = this;
  obj.fn(...args);
};

printName.myApply(user, ["navi mumbai", "Maharashtra", "123456"]);
