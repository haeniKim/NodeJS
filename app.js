const path = require("path");
//const http = require("http"); // http -> global module
const express = require("express");
const bodyParser = require("body-parser");
// const expressHbs = require("express-handlebars"); // express에 자동 설치되는 건 아니므로 불러와야 함

const app = express(); // 함수로 실행시 새로운 객체 생성, 유효한 요청 핸들러

// 동적 템플릿 사용시 필요 - node.js로만 하면 전부 수동으로 해야함,
// app.set - express 전체에 세팅
// viewengine, views key

// // 1. Pug
//app.set("view engine", "pug"); // pug사용시 템플릿 렌더링할 때마다 이걸 사용해야 함. pug를 기본 엔진으로 정의

// //2. Handlebars
//app.engine("hds", expressHbs({layoutsDir: 'views/layouts', defaultLayout: 'main-layout', extname: 'hbs'})); // 내장되어 있지 않은 경우 새로 뜽록 필요
//app.set("view engine", "hds");

// //3. EJS
app.set("view engine", "ejs");

app.set("views", "views"); // views 폴더에 모든 views가 있다고 정의. 렌더링 설정

const adminData = require("./routes/admin"); // routes 폴더의 상대경로
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); // 정적 폴더 등록 - 다른 파일에서 접근 시 자동으로 public 경로로 들어가짐

app.use("/admin", adminData.routes); // 객체므로 () 필요 없음
app.use(shopRoutes); // 순서 중요

// const server = http.createServer(app);

// server.listen(3000);

// 적절한 미들웨어가 존재하지 않는다면 아래로 내려가 요청은 처리되지 않음
// 404
app.use((req, res, next) => {
  //res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", { pageTitle: "Page Not Found" }); // pug
});

app.listen(3000);
