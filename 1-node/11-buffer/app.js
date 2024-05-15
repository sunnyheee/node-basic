// 메모리에서 고정된 사이즈의 메모리 덩어리
// 숫자의 배열이라고 생각하면 된다(메모리 안에 있는 데이터 차체를 말함)

const buf = Buffer.from("Hi");
console.log(buf);
// <Buffer 48 69>

console.log(buf.length);
// 2

console.log(buf[0]);
// 72

console.log(buf[1]);
// 105

console.log(buf.toString());
// Hi

// create
const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2); // fast

console.log(buf2, buf3);
// <Buffer 00 00> <Buffer 00 00>
// 메모리가 있는경우는 괜찮지만 없는경우 초기화되서 나올수도있다

buf2[0] = 72;
buf2[1] = 105;
console.log(buf2.toString());
// Hi

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
