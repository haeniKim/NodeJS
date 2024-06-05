const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop");

// const rootDir = require("../util/path"); - html 방식에서 필요
// const adminData = require("./admin");

const router = express.Router();

// 첫 페이지를 방문한 사용자가 볼 수 있어야 함
router.get("/", shopController.getIndex); // 시작 페이지 추가

router.get("/products", shopController.getProducts);

router.get("/cart", shopController.getCart);

router.get("/orders", shopController.getOrders);

router.get("/checkout", shopController.getCheckout);

module.exports = router;
