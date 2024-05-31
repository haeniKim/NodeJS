const path = require("path");
//const http = require("http"); // http -> global module
const express = require("express");
const bodyParser = require("body-parser");

const app = express(); // 함수로 실행시 새로운 객체 생성, 유효한 요청 핸들러

const adminRoutes = require("./routes/admin"); // routes 폴더의 상대경로
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); // 정적 폴더 등록 - 다른 파일에서 접근 시 자동으로 public 경로로 들어가짐

app.use("/admin", adminRoutes); // 객체므로 () 필요 없음
app.use(shopRoutes); // 순서 중요

// const server = http.createServer(app);

// server.listen(3000);

// 적절한 미들웨어가 존재하지 않는다면 아래로 내려가 요청은 처리되지 않음
// 404
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
