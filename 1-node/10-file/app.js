const fs = require("fs");
// rename(..., callback(error, data))
// 노드js에서 필요한일들을 다 한다음에(...) 콜백을 처리해준다

// renameSync(...)
// 따로 콜백함수를 전달하지 않음, 끝날때까지 다음 함수로 넘어가지 않음
// 노드가 멈추면 안되기때문에 항상 try catch로 감싸줘야한다
// try { renameSync(...)} catch(e) {}
// renameSync는 사용하지 않는것이 좋음

// promises.rename().then().catch(0)

try {
  fs.renameSync("./file.txt", "./file-new.txt");
} catch (error) {
  console.error(error);
}

fs.rename("./file-new.txt", "./file.txt", (error) => {
  console.error(error);
});
console.log("hello");

// 리팩토링
fs.promises
  .rename("./file2.txt", "./file-new.txt")
  .then(() => console.log("Done!"))
  .catch(console.error);
