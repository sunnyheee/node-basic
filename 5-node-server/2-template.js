// 개발 환경에서는 http로 하고 배포할때는 http2로 한다
const http = require("http");
const http2 = require("http2"); // https
const fs = require("fs");
// 템플릿 엔진
const ejs = require("ejs");

// ejs에 들어갈 데이터 설정
const name = "Sony";
const courses = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JS" },
  { name: "Node" },
  { name: "FE" },
];
// 서버 만드는법
const server = http.createServer((req, res) => {
  console.log("incoming...");
  // 반응처리
  // 언어처리
  res.writeHead(200, { "content-Type": "text/html; charset=utf-8" });
  const url = req.url;
  if (url === "/") {
    // ejs불러오기
    ejs
      .renderFile("./template/index.ejs", { name })
      .then((data) => res.end(data));
  } else if (url === "/courses") {
    // ejs불러오기
    ejs
      .renderFile("./template/courses.ejs", { courses })
      .then((data) => res.end(data));
  } else {
    // ejs불러오기
    ejs
      .renderFile("./template/not-found.ejs", { name })
      .then((data) => res.end(data));
  }
});

// 서버포트를 정해줘야한다
server.listen(8080);
