const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    // url이 스트링이며, 해당 값을 가진 경우에만 참
    res.write("<html>"); // -> res에 데이터 기록 (html 등)
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>' //name에 message라고 하면 키 message, 값 형대로 들어감.
    );
    res.write("</html>");
    return res.end();
  }
  //console.log(req.url, req.method, req.headers); // 실행시 콘솔에 로그가 출력 - node.js가 생성해준 '요청' 객체
  //process.exit(); //프로세스 종료
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      // 이벤트 핸들러 1
      console.log(chunk);
      body.push(chunk);
    }); // 특정 이벤트를 들을 수 있음
    return req.on("end", () => {
      // 이벤트 핸들러 2, 요청분석이 완료되면 req.on의 end 이벤트가 자동으로 실행
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/"); // 몇가지 메타 정보 작성 (302 - 경로 재지정)
        return res.end();
      }); // 파일 작성 (sync는 동기화 콜백도 인수로 받음)
    });
    // 핸들러 등록 후 바로 실행하지는 않고 아래의 코드로 넘어감.
  }
  res.setHeader("Content-Type", "text/html"); // '응답' (브라우저가 이해하는 default 헤더, 응답의 컨텐츠 유형)
  res.write("<html>"); // -> res에 데이터 기록 (html 등)
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = requestHandler;

// module.exports = {
//    handler: requestHandler,
//    someText: 'Some Text'
// };

//exports.handler = requestHandler;
