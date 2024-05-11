console.log("lodding....");
// 현재까지의 콘솔로그 클리어
console.clear();

// log level
console.log("log"); //개발
console.info("info"); // 중요한 정보에 대해서 남기고 싶을때
console.warn("warn"); // 경보단계
console.error("error"); // 에러, 사용자 에러, 시스템 에러
// 브라우저에서는 표시가 되지만 노드에서는 그냥 글씨만 나온다
// 하지만 나중에 서버에 배포했을때 정말 중요한 에러나 워닝을 로그를 남길수있다
// 로그의 심각성에 따라서 레벨별로 콘솔로그를 썼을경우 나중에 배포했을대 서버의 심각성을 빠르게 알아차리기 쉽고 나중에 수정하기 쉬워진다

// assert
console.assert(2 === 3, "not same!");
console.assert(2 === 2, "same!");
// 첫번째로 전달한 값이 true가 아닐때만 출력해줌, 특정한 조건일때 로그를 출력하고싶을때 사용

// print object
const student = { name: "sunny", age: 20, company: { name: "suncomapny" } };
// 오브젝트 출력
console.log(student);
// table로 보기 편하게 출력
console.table(student);
// 옵션설정으로 보여주고 싶은 오브젝트를 설정할수있다
// https://nodejs.org/api/console.html#consoledirobj-options
console.dir(student, { showHidden: true, colors: false, depth: 0 });

// measuring time
// 시간측정, 같은 레이블이 시작하고 끝날때까지의 시간을 알수있다
// 성능확인때 매우 유용
console.time("for loop");
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd("for loop");

// counting
// 함수가 몇번 호출됬는지 확인 가능
function a() {
  console.count("a function");
}
a();
a();
// count 초기화
console.countReset("a function");
a();

// trace
// 함수가 어디서 호출됬는지 확인 가능
// 디버깅 할때 유용하다
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.log("f3");
  console.trace();
}
f1();
