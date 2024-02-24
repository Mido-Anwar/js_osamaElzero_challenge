// setTimeout(function (){
//     window.open("https://google.com","_blank");
// },3000);
// window.close();
// setInterval(() => {
//     console.log("mido");
// }, 3000);

// console.log(location.protocol);
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.href);

// console.log(window.scrollY);
// window.localStorage.setItem("color", "green");
// let info = (window.localStorage.info = "this background from local storage");

// document.body.style.backgroundColor = window.localStorage.getItem("color");

//window.localStorage.clear();
// important example;

/**
 * التمرين تغيير لون ديف من خلال مجموععة ازرار ولك واحد منهم يحمل لون معين
 */
// let maincolors = document.querySelectorAll(".colors div");
// let view = document.querySelector(".view");
// /**
//  * check if localstorage has
//  */
// if (window.localStorage.getItem("divcolor")) {
//   view.style.backgroundColor = window.localStorage.getItem("divcolor");
//   maincolors.forEach(function (div) {
//     div.classList.remove("active");
//   });
//   document
//     .querySelector(`[data-color=${window.localStorage.getItem("divcolor")}]`)
//     .classList.add("active");
// }

// maincolors.forEach(function (div) {
//   div.style.backgroundColor = div.getAttribute("data-color");

//   div.addEventListener("click", function (e) {
//     maincolors.forEach(function (div) {
//       div.classList.remove("active");
//     });
//     e.currentTarget.classList = "active";
//     view.style.backgroundColor = e.currentTarget.getAttribute("data-color");
//     window.localStorage.setItem("divcolor", view.style.backgroundColor);
//   });
//   console.log(div.getAttribute("data-color"));
// });

/**
 * bom challenge;
 */

let taskinput = document.querySelector(".taskinp");
let taskbtn = document.querySelector(".btn");
let taskdiv = document.querySelector(".taskdiv");
taskbtn.onclick = function () {
  window.localStorage.setItem(taskinput.value, taskinput.value);
};
function arrPush() {
  let arr = [];
  for (let i = 0; i < window.localStorage.length; i++) {
    if (window.localStorage.length == 0) {
      taskdiv.innerHTML = "no records in local storage";
    } else {
      arr.push(window.localStorage.key(i).valueOf());
    }
  }
  return arr;
}
let result = arrPush();
result.forEach(function (ele) {
  let p = document.createElement("div");
  let btn = document.createElement("button");
  btn.innerHTML = "delete";
  p.append(ele);
  p.append(btn);
  taskdiv.prepend(p);
  btn.onclick = function () {
    window.localStorage.removeItem(ele);
    p.style.display = "none";
  };
});

let book = "video";
let vedio = "book";

// variables swapping
[book, vedio] = [vedio, book];
console.log(book);
console.log(vedio);
let user = {
  name: "mido",
  age: "34",
  gender: "male",
  address: "aswan",
  color: "red",
};
function showUserInfo({
  name: n,
  age: a,
  gender: g,
  address: ad,
  color: co,
} = user) {
  console.log(`my name is ${n}`);
  console.log(`my age is ${a}`);
}

/**
 *
 * destructing data challenge;
 */

let chosen = 9;

let myFriends = [
  { title: "osama", age: 39, available: true, skills: ["HTML", "css"] },
  { title: "Ahmed", age: 25, available: false, skills: ["python", "Django"] },
  { title: "sayed", age: 39, available: true, skills: ["php", "laravel"] },
];

function ChosenFriends(ch, frn) {
  if (ch == 1) {
    let [
      {
        title,
        age,
        available,
        skills: [, css],
      },
      ,
    ] = frn;

    console.log(
      `my name is: ${title} \n age: ${age} \n status :  ${
        available ? "available" : "not availble"
      } \n skilles: ${css}`
    );
  } else if (ch == 2) {
    let [
      ,
      {
        title,
        age,
        available,
        skills: [, django],
      },
    ] = frn;

    console.log(
      `my name is: ${title} \n age: ${age} \n status :  ${
        available ? "available" : "not availble"
      } \n skilles: ${django}`
    );
  } else {
    let [
      ,
      ,
      {
        title,
        age,
        available,
        skills: [, django],
      },
    ] = frn;

    console.log(
      `my name is: ${title} \n age: ${age} \n status :  ${
        available ? "available" : "not availble"
      } \n skilles: ${django}`
    );
  }
}

ChosenFriends(chosen, myFriends);
