// 비동기화 코드
// : 즉시 발생하지 않고 짧더라도 시간이 소요되는 경우

const fetchData = (callback) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
  return promise;
};

// setTimeout(일정시간 이전, 이후 실행할 함수, 타이머(1초 = 1000))
setTimeout(() => {
  console.log("Timer is done!");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);

console.log("Hi");
