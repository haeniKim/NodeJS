// 제품 배열과 관련된 코드 지우고 모델 부분에서 불러와 사용
const Product = require("../models/product");

//const products = []; <- 모델 사용 전

// 제품 관련 논리만 다루는 컨트롤러
exports.getAddProduct = (req, res, next) => {
  //res.sendFile(path.join(rootDir, "views", "add-product.html")); // 응답 보내기
  res.render("add-product", {
    // 뷰 이름 등록, { 템플릿으로 전달할 객체  }
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true, // 2) hbs에서 추가되는 부분
    productCSS: true, // 2) hbs에서 추가되는 부분
    activeAddProduct: true, // 2) hbs에서 추가되는 부분
  }); // pug
};

exports.postAddProduct = (req, res, next) => {
  // products.push({ title: req.body.title }); <- 모델 사용 전
  const product = new Product(req.body.title); // add-product.ejs에서 받은 값
  product.save(); // 저장
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  //res.sendFile(path.join(rootDir, "views", "shop.html")); - html 사용하는 부분
  //const products = adminData.products; // 데이터를 가져와 템플릿에 전달 <- 모델 사용 전
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true, // 2) hbs에서 추가
      productCSS: true, // 2) hbs에서 추가
      layout: false, // 2) hbs 특성
    }); // pug를 사용, products는 템플릿으로 전달
  });
};
