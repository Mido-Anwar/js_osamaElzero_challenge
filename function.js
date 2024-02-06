console.log("________  functions  challenge ______________________________");
console.log("________  ____________________ ");

function calc(...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }

  return `# ! the last result ${result} #`;
}
console.log(calc(10, 11, 33, 44, 22, 55, 66));

// function challenge 1

function randomx(a, b, c) {
  let name;
  let age;
  let status;
  let arr = [];
  arr.push(a, b, c);

  for (let i = 0; i < arr.length; i++) {
    typeof arr[i] == "string"
      ? (name = arr[i])
      : typeof arr[i] == "number"
      ? (age = arr[i])
      : typeof arr[i] == "boolean"
      ? (status = arr[i])
      : "#######";
  }

  return `Hello  ${name}, Your age is ${age} ,you are ${
    status == true ? "available" : "not available"
  } for hire`;
}
console.log(randomx(true, 12, "mido"));
console.log(randomx("koko", 12, true));
console.log(randomx(66, true, "dodo"));
console.log(randomx(false, "lolo", 12));
// arrow function challenge

// let names = function (...names) {
//   return `String [${names.join("],[")}] => Done`;
// };
// same up function
let names = (...names) => `String [${names.join("],[")}] => Done !`;
console.log(names("mido", "koko", "lili", "sisi", "wawa"));
// scond challenge
let numbers = [20, 50, 10, 60];
// that salotion bad but is no another answer else.
//let calculator = (one, two, ...nums) => `${parseInt(nums) + one + two}`;
/**
 *
 * another salotion for calc function osama elzero challenges;
 */
function calculator(one, two = 0, ...nums) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 20) {
      two = numbers[i];
    } else if (numbers[i] === 50) {
      nums = numbers[i];
    }
  }
  return one + two + nums;
}
console.log(calculator(10, 0, numbers));

let hash = "mido1988anwar";

let filterhash = hash
  .split("")
  .filter(function (ele) {
    return !isNaN(ele);
  })
  .map(function (ele) {
    return ele * ele;
  })
  .join(" ");

console.log(filterhash);

