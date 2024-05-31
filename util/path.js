const path = require("path");

// 애플리케이션이 실행될 수 있도록 해주는 파일의 경로 확인
// 파일명을 dirname에 입력
module.exports = path.dirname(require.main.filename); // 경로의 디렉터리 이름 회신 , mainModule - 애플리케이션 시작한 주요 모듈(app.js에서 만든 모듈)
