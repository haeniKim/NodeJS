const fs = require("fs"); // 파일 저장을 위한 옵션들
const path = require("path");

// 경로가 엮이지 않도록 data 폴더에 저장
const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products .json"
);

const getProductsFromFile = (cb) => {
  // 코드 재사용, 헬퍼함수
  // 보이는대로 경로를 구축하고 파일을 읽어옴, 여기서 실행하고 최종적으로 이를 회신,
  // 일종의 유틸리티 함수, 단일 인스턴스에는 호출되지 않음
  // 클래스 자체에 직접 호출
  //return this.products; // 이렇게 하면 안됨 로컬 속성이 아닌 배열을 반환해야 함
  // model 개념
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      // 에러 발생시 공백 배열, fetchAll을 위해 모든 상황에서 배열 반환 해야 함.
      cb([]); // 공백 배열을 전달할 함수로서 실행
    } else {
      cb(JSON.parse(fileContent)); // 파싱된 json 데이터를 전달하는 콜백
    }
  });
};

// const products = []; -> 이제 배열 대신 파일에 데이터 저장

module.exports = class Product {
  constructor(t) {
    // 생성자 함수
    this.title = t;
  }

  save() {
    // 제품을 저장할 배열
    //products.push(this); // 클래스를 기반으로 생성된 객체 참조
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    }); // 콜백 함수 이기 때문에 여기에 인수로 전달할 함수, 익명함수에 새로운 값 전달
    // json에 저장하기 위해 기존 배열 불러오기
    // 파일 먼저 읽기
    // fs.readFile(p, (err, fileContent) => {
    // class를 참조하기 위한 화살표 함수 사용
    // let products = [];
    //   if (!err) {
    //     products = JSON.parse(fileContent);
    //   //   }
    //   products.push(this);
    //   fs.writeFile(p, JSON.stringify(products), (err) => {
    //     console.log(err);
    //   });
    //});
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
