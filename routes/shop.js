const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

// 첫 페이지를 방문한 사용자가 볼 수 있어야 함
router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html")); // __ 절대 경로를 고정 운영체체 호환을 위해 .join사용
}); // 새로운 미들웨어 추가 가능

module.exports = router;
