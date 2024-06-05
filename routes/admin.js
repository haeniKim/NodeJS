const path = require("path");

const express = require("express");

const productsController = require("../controllers/products"); // 해당 경로의 모든 exports 함수 불러옴

//const rootDir = require("../util/path");

const router = express.Router(); // express 앱과 같음

// 관리자가 다루는 페이지
router.get("/add-product", productsController.getAddProduct); // ()를 적지않아 함수 참조만 하도록

router.post("/add-product", productsController.postAddProduct);

// conroller 설정하면서 다시 해당 방식으로 사용
module.exports = router;

// 방식 변경 -> app.js에서 수정
//exports.routes = router;
//exports.products = products;
