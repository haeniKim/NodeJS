const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router(); // express 앱과 같음

const products = [];

// 관리자가 다루는 페이지
router.get("/add-product", (req, res, next) => {
  //res.sendFile(path.join(rootDir, "views", "add-product.html")); // 응답 보내기
  res.render("add-product", {
    // 뷰 이름 등록, { 템플릿으로 전달할 객체  }
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true, // 2) hbs에서 추가되는 부분
    productCSS: true, // 2) hbs에서 추가되는 부분
    activeAddProduct: true, // 2) hbs에서 추가되는 부분
  }); // pug
}); // 새로운 미들웨어 추가 가능

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

//module.exports = router;

// 방식 변경 -> app.js에서 수정
exports.routes = router;
exports.products = products;
