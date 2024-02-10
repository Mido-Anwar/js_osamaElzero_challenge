console.log("________  functions  challenge ______________________________");

let list = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");
list.forEach((ele) => {
  ele.onclick = function () {
    list.forEach(function (ele) {
      ele.classList.remove("active");
    });
    this.classList.add("active");
    allDivs.forEach(function (ele) {
      ele.style.display = "none";
    });
  };
});

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
let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let finalnums = myNums.reduce(function (acc, curennt, index, arr) {
//  return acc + curennt;

// });

// console.log(finalnums);

/// higher function challenge;
let mystring = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,z";
// retrive Elzero web school from myString var;
let solution = mystring
  .split(",")
  .map(function (ele, index, arr) {
    return ele === "_" ? " " : ele;
  })

  .filter(function (ele, index, arr) {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .reduce(function (acc, curennt, index, arr) {
    arr.length = arr.length--;

    let name = acc + curennt;
    return name;
  }).slice(true);
  //* from you tube 
// let solution = mystring
//   .split(",");
// .filter((ele) => isNaN(Number.parseInt(ele)))
// .map((ele, ind, arr) => {
//   arr.length = arr.length--;
//   return ele.replace("_", " ");
// })
// .reduce((acc, ele, index, arr) => acc + ele)
// .slice(true);
console.log(solution);
