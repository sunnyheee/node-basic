const http = require("http");

const fruits = [
  { name: "apple" },
  { name: "banana" },
  { name: "orange" },
  { name: "painapple" },
];

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/fruit") {
    if (method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(fruits));
    } else if (method === "POST") {
      const body = [];
      req.on("data", (chunk) => {
        console.log(chunk);
        body.push(chunk);
      });

      req.on("end", () => {
        const bodyStr = Buffer.concat(body).toString();
        const fruit = JSON.parse(bodyStr);
        fruits.push(fruit);
        console.log(fruit);
        // 새로 만들었기때문에 201번으로 응답
        res.writeHead(201);
        res.end();
      });
    }
  }
});

server.listen(8080);
