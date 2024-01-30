var a = 1_00;
var b = 2_00.5;
var c = 1e2;
var d = 2.4;
/**
 * number methods
 *
 */
console.log("______________________ number methods _____________________");

//first challnge get min numbur
console.log(Number.parseInt(Math.min(a, b, c, d)));
//scond challenge 10000 output a + d
console.log(Math.round(d) * 50 * Number.parseInt(a));
// third challenge
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(parseInt(d));
console.log(Number.parseInt(d));
///forth

console.log(((Number.parseFloat(a) / Math.ceil(d)) * 2).toFixed(2));
console.log(Math.round((Number.parseFloat(a) / Math.ceil(d)) * 2));
console.log("______________________ end _____________________");
/**
 * string methods
 */
console.log("______________________ string method _____________________");

// get zero word with 'z' capital by charAt and slice methods
var str = "Elzero web school";
var capitalizedStr = str.charAt(2).toUpperCase() + str.slice(3, 6);
console.log(capitalizedStr);

// repeat H 8 times
var h = "h";
console.log(h.repeat(8).toLocaleUpperCase());

// get elzero like an array
console.log(str.slice(0, 6).split());

// remove web word from str var

console.log(str.substring(0, 7) + str.substring(11, 18));

// dynamic change first and last to lowwerCase in string
var str1 = "mido anwar by javascript";
console.log(
  str.substring(0, 1).toLowerCase() +
    str.substring(1, str.length - 1).toUpperCase() +
    str.substring(str.length - 1).toLowerCase()
);
console.log(
  str1.substring(0, 1).toLowerCase() +
    str1.substring(1, str1.length - 1).toUpperCase() +
    str1.substring(str1.length - 1).toLowerCase()
);
console.log("______________________ end _____________________");
/**
 * if train
 */
/// first challenge;
console.log("______________________ / if condition_____________________");
let conNum = 50;
conNum < 10
  ? console.log(10)
  : conNum >= 10 && conNum <= 40
  ? console.log("10 to 40")
  : conNum > 40
  ? console.log("> 40 ")
  : console.log("unknow");
///

var st = "Elzero web school";
console.log(st.replace(" web school","Elzero"));
//scond challenge
(st.split('').length * 2).toString() === "34" ? console.log("good"):console.log("bad");
// third challenge
st.charAt(st.indexOf("w")) === "w" ? console.log("good"):console.log("bad");
//forth
st !==  "string" ? console.log("good"):console.log("bad");
// fifth
st.replace("Elzero web school","number") ===  "number" ? console.log("good"):console.log("bad");
//sixth
st.replace(" web school","Elzero")==="ElzeroElzero"? console.log("good"):console.log("bad");
console.log("______________________ end _____________________");
/**
 * 
 * 
 */