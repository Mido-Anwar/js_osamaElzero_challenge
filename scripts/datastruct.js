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
let arr2 = [6, 7, 8, 9, 10];
let arr3 = [...arr1, ...arr2];
console.log(arr3);
/**
 *  Map and Set challenge;
 */
console.log("*".repeat(50));

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
// this saloution from youtube
console.log([...n1, ...n2].length * Math.max(...n2));
// this mine but bad
console.log([...new Set([...n2, ...n1])].shift() * 7);

console.log("*".repeat(50));
console.log("regular expression");
console.log("*".repeat(50));

let gomla = "mido anwar has an apple and an orange Apple";
let dom = "com org net info io";
let reg = /apple/gi;
let domreg = /(com|org|net)/gi;
let regnum = "12345678910";
let numreg = /[0-9]/g;
// not
let notnum = "12345678910";
let numnot = /[^0-3]/g;
let charnum = "12#34%56*7&89@10";
let numchar = /[^0-9]/g;
let strreg =
  "mido88@hot.com kiki99@yahoo.com mido88@gmail.net lolo66@cici.org ahmedzaki@cima.net nono@gigi.info";
let regstr = /mido[0-9]/g;
let url = "https://www.mido.net http://kiki.org www.ahmed.com";
/**
 * flags modifires
 * ! i case insensitive
 * * g global
 * ? multilines
 */
console.log(gomla.match(reg));
console.log(dom.match(domreg));
console.log(regnum.match(numreg));
console.log(notnum.match(numnot));
console.log(charnum.match(numchar));
console.log(strreg.match(regstr));
/**
 * Character Classes;
 * capital Character == not
 * ? \d \D digit
 * ? \w  \W word or char
 * ? \b \B begging or end
 * ? \s space
 */
/**
 * Quantifires
 * ! * zero or more
 * ! + one or more
 * ! ? zero or one
 *
 * ? test
 * ! ^ start with something
 * ! $ end with something
 * ! ?= followed by somthing
 * ! ?! not followed by somthing
 *
 */
let dot = /./g;
let word = /\w@\w/g;
let digit = /\d/g;
let bee = /\bmido/g;
//let email = /\w+\d*@\w+.\w+/g;
let email = /\w+\d?@\w+.\w+/g;
let regurl = /(http\w?:\/\/)?(www.)?\w+.(com|org|net)/g;
//console.log(strreg.match(dot));
console.log(strreg.match(word));
console.log(strreg.match(bee));
console.log(bee.test(strreg));
console.log(strreg.match(email));
console.log(url.match(regurl));

/**
 * regular expression challenge
 */
let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=tobics";

let re = /((http\w?:\/\/(\w*.)?)?(\w+.\w+)):?.*/g;
//let re=/(https?)?:?(\/\/)?(www.)?\w+\.\w+:?.+/ig;
console.log("*".repeat(50));
console.log("regular expression challenge");
console.log("*".repeat(50));

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
