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

console.log((Number.parseFloat(a) / Math.ceil(d)*2).toFixed(2));
console.log(Math.round((Number.parseFloat(a) / Math.ceil(d)*2)));
console.log("______________________ end _____________________");
/**
 * string methods
 */
console.log("______________________ string method _____________________");


var str = "Elzero web school";
var capitalizedStr = str.charAt(2).toUpperCase()+ str.slice(3,6
    );
console.log(capitalizedStr);
