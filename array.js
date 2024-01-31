console.log(` hello from array file `);
/**
 * array challenge
 */
console.log(`_______________________ array file __________________________ `);
// let zero = 0;
// let counter = 0;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
// let myfriend = [];
// //first
// console.log((myfriend = my.splice(zero, counter + 2).reverse()));
// switch (zero) {
//   case 1:
//     zero = 0;
//     counter = 2;
//     myfriend.concat(my.splice(zero, counter).reverse());
// }
// // scound
// console.log(my.slice((zero = 1), (counter = 3)).reverse());



// Challenge Array
let zero = 0;
let counter = 3;
let my = ["Ahmed","Mazero","Elham","Osama","Gamal","Ameer"];

let rever = my.reverse();
console.log(rever);
console.log(rever.slice(--counter)); // ["Osama","Elham","Mazero","Ahmed"]
++counter;
++zero;
console.log(rever);
console.log(rever.slice(counter,++counter + zero));
let insert = my.unshift("Elzero");
console.log(my.slice(0,zero));

let r = my[++counter,counter][--counter];
let o = my[++counter,counter][counter].toUpperCase();
let ao = r+o;
let fo = my.unshift(ao);
console.log(my.slice(--zero,++zero));