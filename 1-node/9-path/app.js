const path = require("path");

console.log(__dirname);
console.log(__filename);
// /Users/pakusonhi/Desktop/study/node-basic/1-node/9-path
// /Users/pakusonhi/Desktop/study/node-basic/1-node/9-path/app.js

console.log(path.sep);
console.log(path.delimiter);
// /
// :

// basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, ".js"));
// app.js
// app

//dirname
console.log(path.dirname(__filename));
// /Users/pakusonhi/Desktop/study/node-basic/1-node/9-path

// extension
console.log(path.extname(__filename));
// .js

//parse
const parsed = path.parse(__filename);
console.log(parsed);
// {
//     root: '/',
//     dir: '/Users/pakusonhi/Desktop/study/node-basic/1-node/9-path',
//     base: 'app.js',
//     ext: '.js',
//     name: 'app'
//   }

// isAbsolute
// 절대경로인지 상대경로인지 확인가능
console.log("isAbsolute?", path.isAbsolute(__dirname)); // /Users/
console.log("isAbsolute?", path.isAbsolute("../"));

// normalize
// 경로에서 에러가 있을경우 알아서 고쳐줌
console.log(path.normalize("./folder////////sub"));

// join
//
console.log(__dirname + path.sep + "image");
console.log(path.join(__dirname, "image"));
