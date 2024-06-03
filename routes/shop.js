const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

// 첫 페이지를 방문한 사용자가 볼 수 있어야 함
router.get("/", (req, res, next) => {
  //console.log("shop.js", adminData.products);
  //res.sendFile(path.join(rootDir, "views", "shop.html"));
  const products = adminData.products; // 데이터를 가져와 pug 템플릿에 전달
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true, // 2) hbs에서 추가
    productCSS: true, // 2) hbs에서 추가
    layout: false, // 2) hbs 특성
  }); // pug를 사용, products는 템플릿으로 전달
}); // 새로운 미들웨어 추가 가능

module.exports = router;
