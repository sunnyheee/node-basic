// 개발 환경에서는 http로 하고 배포할때는 http2로 한다
const http = require("http");
const http2 = require("http2"); // https
const fs = require("fs");

// 사용할수있는 코드 확인
console.log(http.STATUS_CODES);
// 사용할수있는 메소드 확인
console.log(http.METHODS);

// 서버 만드는법
const server = http.createServer((req, res) => {
  console.log("incoming...");
  // 요청 처리
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  console.log(req.url);
  // 반응처리
  // 언어처리
  res.writeHead(200, { "content-Type": "text/html; charset=utf-8" });
  const url = req.url;
  if (url === "/") {
    // HTML 만들기
    // 위에 writeHead에서 언어처리 하면서 html로 만들고 있기때문에 따로 설정 안해도 됨
    // res.setHeader("Content-Type", "text/html");

    // html경로 찾기
    const read = fs.createReadStream("./html/index.html");
    // pipe로 연결해주기
    read.pipe(res);
  } else if (url === "/courses") {
    const read = fs.createReadStream("./html/courses.html");
    // pipe로 연결해주기
    read.pipe(res);
  } else {
    const read = fs.createReadStream("./html/not-found.html");
    // pipe로 연결해주기
    read.pipe(res);
  }
  // pipe는 내부에서 자동으로 처리해주기 떄문에 res.end()가 필요없음

  // res.end();
});

// 서버포트를 정해줘야한다
server.listen(8080);
