const fs = require("fs")

const file = fs.createWriteStream("./file.txt")

for (let i = 0; i < 1e3; i++) {
  file.write("Node.js is a JavaScript runtme build on Google Chrome's V8 JavaScript engine.\n")
}