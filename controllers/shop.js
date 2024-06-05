// 제품 배열과 관련된 코드 지우고 모델 부분에서 불러와 사용
const Product = require("../models/product");

//const products = []; <- 모델 사용 전

exports.getProducts = (req, res, next) => {
  //res.sendFile(path.join(rootDir, "views", "shop.html")); - html 사용하는 부분
  //const products = adminData.products; // 데이터를 가져와 템플릿에 전달 <- 모델 사용 전
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
      hasProducts: products.length > 0,
      // activeShop: true, // 2) hbs에서 추가
      // productCSS: true, // 2) hbs에서 추가
      // layout: false, // 2) hbs 특성
    }); // pug를 사용, products는 템플릿으로 전달
  });
};

exports.getIndex = (req, res, next) => {
  //const products = adminData.products; // 데이터를 가져와 템플릿에 전달 <- 모델 사용 전
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      // activeShop: true, // 2) hbs에서 추가
      // productCSS: true, // 2) hbs에서 추가
      // layout: false, // 2) hbs 특성
    }); // pug를 사용, products는 템플릿으로 전달
  });
}; // 인덱스 페이지 렌더링을 위해 미들웨어함수 사용

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    // 해당 뷰와 연결하고 데이터 전달
    path: "/cart",
    pageTitle: "Your Cart",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  }); // 뷰 렌더링
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
};
