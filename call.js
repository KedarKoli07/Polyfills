const user = {
  firstName: "kedar",
  lastName: "koli",
};

let printName = function (homeTown, state) {
  console.log(
    `My name is ${this.firstName} ${this.lastName}.I lived in ${homeTown} ${state}`
  );
};

// printName.call(user);
// printName.call(user,"Navi mumbai", "Maharashtra");

Function.prototype.myCall = function (obj = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Not callable");
  }
  console.log("this", this);
  obj.fn = this;
  obj.fn(...args);
};

printName.myCall(user, "Navi mumbai", "Maharashtra");
