function af() {
  // return Array.from(arguments);
  return new Set(arguments);
}
let arr = [
  "mido",
  "kiki",
  "sisi",
  "lili",
  "popo",
  "yaya",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
];
console.log(af(arr));
console.log("#".repeat(10));
console.log(arr.copyWithin(8, 6, 8));

console.log("#".repeat(10));
function checkValue(arr, num) {
  return arr.some(function (e) {
    return e === num;
  });
}

console.log(checkValue(arr, "mido"));
//################################
console.log("#".repeat(10));
let range = {
    min: 10,
    max: 20,
  };
let checkRange = arr.some(function (e) {
  return e >= this.min && e <= this.max;
}, range);
console.log(checkRange);
console.log("#".repeat(10));
// spread operator

console.log([..."mido"]);

let arr1 = [1, 2, 3, 4, 5];
let arr2 =  [6, 7, 8, 9, 10];
let arr3 = [...arr1,...arr2];
console.log(arr3);
/**
 *  Map and Set challenge;
 */
console.log("*".repeat(50));

let n1 = [10,30,10,20];
let n2 = [30,20,10];
// this saloution from youtube
console.log([...n1, ...n2].length * Math.max(...n2));
// this mine but bad
console.log([...new Set([...n2,...n1])].shift() * 7);


