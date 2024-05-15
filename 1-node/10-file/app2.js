const fs = require("fs").promises;

// read a file
fs.readFile("./file.txt", "utf-8")
  .then((data) => console.log(data))
  .catch(console.error);

// writing a file
fs.writeFile("./file.txt", "Hello, Sunny!").catch(console.error);

fs.appendFile("./file.txt", "yeah, Sunny!")
  .then(
    // 순서가 있는 경우 then안에서 처리해야함
    // copy
    fs.copyFile("./file.txt", "./file2.txt").catch(console.error)
  )
  .catch(console.error);

// copy
fs.copyFile("./file.txt", "./file2.txt").catch(console.error);

//folder
fs.mkdir("sub-folder").catch(console.error);

fs.readdir("./").then(console.log).catch(console.error);
