const fs = require('fs')
// vscode에게 이건 node 모듈이야 하고 알려줌

console.log(global)
// -> 브라우저의 글로벌 객체인 윈도우에 정의되지만 nodejs에서는 글로벌자체가 객체가 된다

global.hello = ()=> {
    console.log('hello')
    global.console.log('hello')
}

global.hello()
hello()
// global를 생략 가능
// https://nodejs.org/docs/latest/api/globals.html