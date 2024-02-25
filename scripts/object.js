// let userName = document.querySelector('[name="userName"]');
// let userpassword = document.querySelector('[name="password"]');

// document.forms[0].onsubmit = function (e) {
//   let userValid = false;
//   let password = false;

//   if (userName.value !== "" && userName.value.length >= 10) {
//     userValid = true;
//   }
//   if (userpassword.value !== "" && userpassword.value.length >= 10) {
//     password = true;
//   }
//   if (userValid === false || password === false) {
//     console.log(userName.value);
//     console.log(userName.value.length);
//   }
//   e.preventDefault();
// };
// let divs = document.getElementById("show");
// let para = document.createElement("p");
// divs.prepend(para);
// //para.remove();
// divs.classList.add("mido");
// // divs.style.color = "red";
// // divs.style.fontWeight = "bold";
// divs.style.cssText =
//   "color: red; font-size: 20px; background: yellow; dispaly:flex; width:200px;";
// userName.before("user name");
// password.before("password");

// let parag = document.querySelector("#parag");
// let btnbtn = document.querySelector("#btnbtn");
// btnbtn.onclick = function () {
//   let newp = parag.cloneNode(true);
//   newp.classList = "clone";
//   newp.cssText = "color:green; background:gray;";
//   document.body.appendChild(newp);
// };
// let cloned = document.querySelector(".clone");
// // cloned.onclick = function () {
// //   console.log("i am cloned");
// // };
// document.addEventListener("click", function (e) {
//   if (e.target.className === "clone") {
//     console.log("cloned");
//   }
// });
// console.log(divs.classList.contains("mido"));
// console.log(userName.parentElement.parentElement);
// console.log(divs.classList);

/**
 * dom challenge
 */
// create elements;
let container = document.createElement("div");
let header = document.createElement("header");
let links = document.createElement("ul");
let content = document.createElement("div");
let footer =document.createElement("footer");

//create list items for navbar;
let names = ["Home", "About", "Service", "Contact"];
for (let i = 0; i < names.length; i++) {
  let li = document.createElement("li");
  li.innerHTML = names[i];
  li.style.cssText = "margin: 10px 10px; font-weight: bold;";
  links.append(li);
}
// create card ele in content div
for (let i = 1; i <= 15; i++) {
  let card = document.createElement("div");
  card.className = "card";
  card.style.cssText =
    "margin:10px;width:300px;height:100px;display:flex; flex-direction:column;align-itmes:center;  justify-content:space-between;background-color:#6495ED;";
  let p = document.createElement("p");
  let h = document.createElement("h4");
  h.style.cssText = "text-align: center;height:40%;";
  p.style.cssText = "text-align: center; height:40%;font-size:20px;";

  p.innerHTML = i;
  h.innerHTML = "Product";

  card.prepend(h);
  card.append(p);
  content.append(card);
}
// append elements
let logo = document.createElement("p");
logo.innerHTML = "Mido";
footer.innerHTML = "This web page by java script only";
container.className = "container";
header.className = "main";
header.prepend(logo);
header.append(links);
document.body.prepend(container);
container.prepend(header);
container.append(content);
container.append(footer);

// page style
container.style.cssText =
  "width: 100%;display: flex;flex-direction: column;align-items: center;justify-content: center";
header.style.cssText =
  "width: 100%;height:80px; display: flex;flex-direction: row;align-items: center;justify-content: space-between;background-color: #dcdcdc;";
links.style.cssText =
  "display: flex;flex-direction: row;align-items: center;justify-content: center;width: 300px;list-style-type: none;";
logo.style.cssText =
  "font-size: 30px;font-weight: bold; width:100px; text-align:center; color:green;";
content.style.cssText =
  "padding:20px 0;width: 100%;display: flex;flex-direction: row;align-items: center;justify-content: space-between; flex-wrap:wrap;";
footer.style.cssText ="width:100%;background-color: green; height:50px;color:yellow;text-align: center;"