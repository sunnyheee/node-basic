// console.log(count);
// console.log(getCount());
// module.exports를 사용하지 않는경우 `ReferenceError: count is not defined`에러가 남

const counter = require("./counter.js");
counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount());
