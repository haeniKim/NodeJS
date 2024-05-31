const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router(); // express 앱과 같음

// 관리자가 다루는 페이지
router.get("/add-product", (req, res, next) => {
  //console.log("In another Middleware");
  res.sendFile(path.join(rootDir, "views", "add-product.html")); // 응답 보내기
}); // 새로운 미들웨어 추가 가능

router.post("/add-product", (req, res, next) => {
  console.log(req.body); // 읽기 위해서는 다른 분석기 필요 => 경로 처리 미들웨어 전에 둠
  res.redirect("/");
});

module.exports = router;
