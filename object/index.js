const obj1 = {
  name: "sharoon",
  age: 21,
  place: "calicut"
}

console.log(Object.keys(obj1)); // return an array of key names

console.log(Object.values(obj1)); // return an array of key's values

console.log(Object.entries(obj1)); // return an array of array contains key and value

console.log(Object.assign(obj1, { "cgpa": "2.56" })); // return an object with new value and also modifies the original object

Object.values(obj1).some((data) => console.log(data === "sharoon", "data mack")); //iterates over the values

