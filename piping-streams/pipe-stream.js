const fs = require("fs")

const rs = fs.createReadStream("./file.txt")

rs.pipe(process.stdout)
// rs.pipe(process.stdout, { end: false })

// rs.on("end", () => {
//   console.log("No more data.")
// })