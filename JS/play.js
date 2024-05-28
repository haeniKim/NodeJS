// // Section 2 : 12, 13, 14

// const name = "Max";
// let age = 29;
// const hasHobbies = true;

// age = 30;

// const summarizeUser = (userName, userAge, userHashobby) => {
//   return (
//     "Name is " +
//     userName +
//     ", Age is " +
//     userAge +
//     ", and the user has hobbies: " +
//     userHashobby
//   );
// };

// const add = (a, b) => a + b;

// const addOne = (a) => a + 1;

// const addRandom = () => 4 + 2;

// console.log(add(1, 2));
// console.log(addOne(4));
// console.log(summarizeUser(name, age, hasHobbies));
// console.log(addRandom());

// Section 2: 15, 16, 17, 18, 19
const person = {
  name: "Haeni",
  age: 24,
  greet() {
    console.log("Hi I am " + this.name);
  },
};

// person.greet();

// const copiedPerson = { ...person };
// console.log(copiedPerson);

const hobbies = ["Sports", "Cooking"];
// 배열 구조 분해
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

// for/of 구문
// for (let hobby of hobbies) {
//   console.log(hobby);
// }

// console.log(hobbies.map((hobby) => "Hobby: " + hobby));
// console.log(hobbies);

//hobbies.push("Programming");

// copy 배열 복사
// const copieArray = hobbies.slice();
//const copieArray = [hobbies];

// spread 연산자
// const copiedArray = [...hobbies];
// console.log(copiedArray);

// rest 연산자
// const toArray = (arg1, arg2, arg3) => {
//   return [arg1, arg2, arg3];
// };

// const toArray = (...args) => {
//   return args;
// };

// console.log(toArray(1, 2, 3, 4));

// const printName = (personData) => {
//   console.log(personData.name);
// };

const printName = ({ name }) => {
  console.log(name);
};

printName(person);

// 함수 밖 구조 분해
const { name, age } = person;
console.log(name, age);
