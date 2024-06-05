// 제품 배열과 관련된 코드 지우고 모델 부분에서 불러와 사용
const Product = require("../models/product");

// 제품 관련 논리만 다루는 컨트롤러
exports.getAddProduct = (req, res, next) => {
  //res.sendFile(path.join(rootDir, "views", "add-product.html")); // 응답 보내기
  res.render("admin/add-product", {
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
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price); // add-product.ejs에서 받은 값, name이 정확해야 함, 생성자 순서 유의!
  product.save(); // 저장
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  // 모든 제품을 가져와 뷰를 렌더링
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Prodcuts",
      path: "/admin/products",
      hasProducts: products.length > 0,
    });
  });
};
