console.log(` hello from array file `);
/**
 * array challenge
 */
console.log(`_______________________ array file __________________________ `);
console.log("_______________________ array lessons _________________________");
// Challenge Array
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

let rever = my.reverse();

console.log(rever.slice(--counter)); // ["Osama","Elham","Mazero","Ahmed"]
++counter;
++zero;

console.log(rever.slice(counter, ++counter + zero));
let insert = my.unshift("Elzero");
console.log(my.slice(0, zero));

let r = my[(++counter, counter)][--counter];
let o = my[(++counter, counter)][counter].toUpperCase();
let ao = r + o;
let fo = my.unshift(ao);
console.log(my.slice(--zero, ++zero));

// for loop lessons
console.log("________ for loop lessons");
let products = ["keybard", "mouse", "pen", "book", "pad", "iphon", "samsung"];
let colors = ["red", "green", "black"];
let showCount = 5;

document.write(`<h1>show ${showCount} products</h1>`);

for (let i = 0; i < showCount; i++) {
  document.write(`<div>`);
  document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
  for (let j = 0; j < colors.length; j++) {
    document.write(`<p> ${colors[j]}</p>`);
  }
  document.write(`<p>${colors.join(" | ")}`);
  document.write(`</div>`);
}
console.log("________  loop challenge");

let myAdmin = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
  "SOSO","Oroma"
];

document.write(`<hr>`);
document.write(`<h1>loop challenge</h1>`);
document.write(`<hr>`);

//frist challenge get admins name while stop word;
let i = 0;
for (; i < myAdmin.length; i++) {
  if (myAdmin[i] === "Stop") break;
}
document.write(`<div>We Have ${i} Admins </div>`);

for (i = 0; i < myAdmin.length; i++) {
  document.write(`<div>`);
  if (myAdmin[i] === "Stop") break;

  document.write(`The Admin for Team ${i + 1} is ${myAdmin[i]}`);
  document.write(`"<h3>Team Members </h3>`);

  for (let j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j][0] !== myAdmin[i][0]) continue;
    document.write(`<p> ${myEmployees[j]}</p>`);
  }
  document.write(`</div>`);
  document.write(`<hr>`);
}

document.write(`<hr>`);
document.write(`this is the end of file array.js`);
document.write(`<hr>`);
