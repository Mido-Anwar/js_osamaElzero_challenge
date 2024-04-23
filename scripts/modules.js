export let a = 9;
export let b = 7;
//one time
export default function hello() {
  return `hello`;
}
// json & api episode
let mygithub = {
  login: "Mido-Anwar",
  id: 97968950,
  node_id: "U_kgDOBdbjNg",
  avatar_url: "https://avatars.githubusercontent.com/u/97968950?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Mido-Anwar",
  html_url: "https://github.com/Mido-Anwar",
  followers_url: "https://api.github.com/users/Mido-Anwar/followers",
  following_url:
    "https://api.github.com/users/Mido-Anwar/following{/other_user}",
  gists_url: "https://api.github.com/users/Mido-Anwar/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Mido-Anwar/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Mido-Anwar/subscriptions",
  organizations_url: "https://api.github.com/users/Mido-Anwar/orgs",
  repos_url: "https://api.github.com/users/Mido-Anwar/repos",
  events_url: "https://api.github.com/users/Mido-Anwar/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/Mido-Anwar/received_events",
  type: "User",
  site_admin: false,
  name: "Ahmed Nour",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: "full Stack web developer\r\n",
  twitter_username: null,
  public_repos: 5,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2022-01-18T15:08:10Z",
  updated_at: "2024-04-13T12:40:56Z",
};

let tojson = '{"name":"mido","age":35}';
console.log(typeof tojson);

let tostr = JSON.parse(tojson);
console.log(typeof tostr);

let mygithubtojson = JSON.stringify(mygithub);
console.log(mygithubtojson.login);
/// callback
setTimeout(() => {
  console.log("mido");
}, 1000);
// api

let req = new XMLHttpRequest();
req.open("get", "https://api.github.com/users/Mido-Anwar/repos", true);
req.send();
req.onreadystatechange = function () {
  // console.log(req);
  // console.log(req.readyState);
  // console.log(req.status);
  if (req.readyState === 4 && req.status === 200) {
    // console.log(req.responseText);
    let jsondata = JSON.parse(req.responseText);
    for (let i = 0; i < jsondata.length; i++) {
      let div = document.createElement("div");
      let repoName = document.createTextNode(jsondata[i].full_name);
      div.append(repoName);
      document.body.appendChild(div);
    }
  }
};
// callback hell;

setTimeout(() => {
  console.log("what is your name");
  setTimeout(() => {
    console.log("mido");
    setTimeout(() => {
      console.log("what is your job");
      setTimeout(() => {
        console.log("full stack web developer");
      }, 4000);
    }, 3000);
  }, 2000);
}, 1000);
// promise this object useing for resolve callback hell;
// let myPromise = new Promise((resolveFunc, rejectFunc) => {
//   let connect = true;
//   if (connect) {
//     resolveFunc("connect");
//   } else {
//     rejectFunc(Error("not connect"));
//   }
// });

// console.log(myPromise);

// myPromise.then(
//   (resolveValue)=> console.log(`good ${resolveValue}`),
//   (rejectFunc)=> console.log(`bad ${rejectFunc}`)
// );

// let myPromise = new Promise((resolveFunc, rejectFunc) => {
//   let users = ['mido',"kiki","lolo","jiji"];
//   if (users.length === 4) {
//     resolveFunc(users);
//   } else {
//     rejectFunc(Error(`we need 4 users, your users ${users.length}`));
//   }
// });
// myPromise.then((resolveValue)=>{
// resolveValue.length = 2;
// return resolveValue;
// }).then((resolveValue)=>{
//   resolveValue.length = 2;
//   return resolveValue;
//   }).catch(()=>{

//   }).finally();

const getData = (apiLink) => {
  return new Promise((resolve, reject) => {
    let xmlReq = new XMLHttpRequest();
    xmlReq.onload = function () {
      if (xmlReq.readyState === 4 && xmlReq.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("faild connction"));
      }
    };
    xmlReq.open("GET", apiLink);
    xmlReq.send();
  });
};

getData("https://api.github.com/users/Mido-Anwar/repos")
  .then((result) => {
    let m = result.map(function (ele) {
      return ele.name;
    });
    console.log(m);
  })
  .catch((rej) => console.log(rej));
fetch("https://api.github.com/users/Mido-Anwar/repos")
  .then((result) => {
    let data = result.json();
    return data;
  })
  .then((full) => {
    return full;
  })
  .then((end) => {
    end.map((ele) => {
      console.log(ele.name);
    });
  })
  .catch((reject) => console.log(reject))
  .finally("not work");
// #############################################
const firstPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("im first promise");
  }, 5000);
});
const socndPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("im socnd promise");
  }, 4000);
});
const thirdPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("im third promise");
  }, 3000);
});
// get all promises if all of them resolved else rejcted will be return
Promise.all([firstPromise, socndPromise, thirdPromise]).then(
  (resolveV) => console.log(resolveV),
  (rejectV) => console.log(`reject: ${rejectV}`)
);
// return all resolve & rejected
Promise.allSettled([firstPromise, socndPromise, thirdPromise]).then(
  (resolveV) => console.log(resolveV),
  (rejectV) => console.log(`reject: ${rejectV}`)
);
// first promise only
Promise.race([firstPromise, socndPromise, thirdPromise]).then(
  (resolveV) => console.log(resolveV),
  (rejectV) => console.log(`reject: ${rejectV}`)
);

//
async function getUser() {
  let users = ["kiki", "cici", "lili"];
  if (users.length > 7) {
    return "async gooooooooooood";
  } else {
    throw new Error("async baaaaaaaaaaaaaaaad");
  }
}

console.log(getUser());

getUser()
  .then([firstPromise, socndPromise, thirdPromise])
  .then(
    (resolveV) => console.log(resolveV),
    (rejectV) => console.log(`reject: ${rejectV}`)
  );

// await

async function read() {

  console.log("before ######### promise");
  try {
    console.log("try ######### promise");
    console.log(await getUser());
  } catch (reson) {
    console.log(`reason catch() : ${reson}`);
  } finally {
    console.log("finally after ######### promise");
  }
}

read();
