const path = require("path");

const express = require("express");

const producutsController = require("../controllers/products");

// const rootDir = require("../util/path"); - html 방식에서 필요
// const adminData = require("./admin");

const router = express.Router();

// 첫 페이지를 방문한 사용자가 볼 수 있어야 함
router.get("/", producutsController.getProducts); // 새로운 미들웨어 추가 가능

module.exports = router;
