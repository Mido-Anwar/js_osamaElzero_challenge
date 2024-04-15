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

let tojson= '{"name":"mido","age":35}';
console.log(typeof tojson);

let tostr= JSON.parse(tojson);
console.log(typeof tostr);

let mygithubtojson= JSON.stringify(mygithub);
console.log(mygithubtojson.login);
