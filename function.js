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

// function challenge

function randomx(a, b, c) {
  let name;
  let age;
  let status;
  let arr = [];
  arr.push(a, b, c);
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    typeof arr[i] == "string"
      ? (name = arr[i])
      : typeof arr[i] == "number"
      ? (age = arr[i])
      : typeof arr[i] == "boolean"
      ? (status = arr[i])
      : "   ";

    console.log(arr[i]);
  }

  return `Hello  ${name}, Your age is ${age} ,you are ${
    status == true ? "available" : "not available"
  } for hire`;
}
console.log(randomx(true, 12, "mido"));
console.log(randomx("koko", 12, true));
console.log(randomx(66, true, "dodo"));
console.log(randomx(false, "lolo", 12))
document.write(`<hr>`);
document.write(`this is the end of file function.js`);
document.write(`<hr>`);
