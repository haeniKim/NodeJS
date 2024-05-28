// Section 3

// app.js 서버 가동
const http = require("http"); // http -> global module

// 사용자 지정 파일
const routes = require("./routes");

const server = http.createServer(routes);

server.listen(3000);
