/**
 * constructor function
 */
// function User  (){
// old constructor
// };
class User {
  // private property
  #salary;
  static count = 0;
  constructor(id, username, salary) {
    this.id = id;
    this.username = username || "unknown";
    this.#salary = salary;
    this.msg = () => {
      return `hello ${this.username} your salary ${this.#salary}`;
    };
    User.count++;
  }
  getSalaryEid() {
    return parseInt(this.#salary) + 1000;
  }
  updateName(n) {
    this.username = n;
  }
  static sayHello() {
    return `Hello mido anwar`;
  }
  static CountMembers() {
    return `${this.count} Members created`;
  }
}

class Admin extends User {
  constructor(id, username, salary, permissions) {
    super(id, username, salary);
    this.p = permissions;
  }
}

let user1 = new User(100, "Ahmed", 1000);
let user2 = new User(101, "Badri", 2000);
let user3 = new User(102, "Camilia", 3000);
let admin = new Admin(50, "mido", "1000 mido", "admin");
// add propertes by prototype
User.prototype.logo = "whiscrashow";
//adding proprty to all objects
Object.prototype.love = "mido anwar";
String.prototype.addDot = function (v) {
  return `.${this}.`;
};
User.prototype.uplode = () => {
  return this.logo;
};

console.log(user1.getSalaryEid());
console.log(user1 instanceof User);
console.log(user1.msg());
console.log(admin.getSalaryEid());
console.log(admin instanceof User);
console.log(admin.msg());
console.log(User.CountMembers());
console.log(User.prototype);
console.log(User.love.addDot());

const nums = {
  a: 1,
  b: 2,
  c: 3,
};

Object.defineProperty(nums, "d", {
  //this for  change value or not
  writable: false,
  //this  remove from loops indexes
  enumerable: false,
  // for delete or update
  configurable: true,
  value: 4,
});
nums.d = 40;
console.log(nums);

let date = new Date();
let birth = new Date("June 4,88");
let diff = date - birth;
console.log(birth);
console.log(diff / 1000 / 60 / 60 / 24 / 365.25);
/**
 * Genarators
 */

function* generatNumbers() {
  // yield 1;
  // yield 2;
  // return "stop function";
  // yield 3;
  // yield 4;
  let index = 0;
  while (true) {
    yield index++;
  }
}
function* generatLetters() {
  yield "a";
  yield "b";
  yield "c";
  yield "d";
}
function* generatAll() {
  //this star for spread arrays
  yield* generatLetters();
  yield* [4, 5, 6];
}
let gene = generatNumbers();
console.log(gene.next().value);
console.log(gene.next().value);
console.log(gene.next().value);
console.log(gene.next().value);
console.log(gene.next().value);
console.log(gene.next().value);
console.log(gene.next().value);
console.log(gene.next().value);
console.log(gene.next().value);
console.log(gene.next().value);
console.log(gene.next().value);
console.log(gene.next().value);
