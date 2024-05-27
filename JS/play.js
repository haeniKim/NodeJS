const name = "Max";
let age = 29;
const hasHobbies = true;

age = 30;

const summarizeUser = (userName, userAge, userHashobby) => {
  return (
    "Name is " +
    userName +
    ", Age is " +
    userAge +
    ", and the user has hobbies: " +
    userHashobby
  );
};

const add = (a, b) => a + b;

const addOne = (a) => a + 1;

const addRandom = () => 1 + 2;

console.log(add(1, 2));
console.log(addOne(4));
console.log(summarizeUser(name, age, hasHobbies));

// var : 새로운 변수를 생성하는 키워드 (과거에 자주 쓰임)
// let : 새로운 변수 생성에 사용되며, 변하지 않는 변수를 생성하는 const와 구분하기 위해 사용
// const : 변하지 않는 변수를 생성, 바뀌지 않을 값을 할당할 때 사용
