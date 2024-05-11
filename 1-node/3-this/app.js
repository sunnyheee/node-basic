function hello() {
  console.log(this);
  console.log(this === global); //   true
}
hello();

class A {
  constructor(num) {
    this.num = num;
  }
  memberFunction() {
    console.log("--- class ---");
    console.log(this); // A { num: 1 }
    console.log(this === global); // false
    // 클래스에서 this란 자기 자신을 가르키고 있음
    // 클래스 밖에서의 this는 global을 가르키고 있음
  }
}

const a = new A(1);
a.memberFunction();

console.log("--- global scope ---");
// 함수의 안도 클래스 안도 아닐경우
console.log(this); // {} 아무것도 출력 안됨
console.log(this === exports); // exports다
