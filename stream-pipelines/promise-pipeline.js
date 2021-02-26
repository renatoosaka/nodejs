const fs = require("fs")
const stream = require("stream")
const util = require("util")

const pipeline = util.promisify(stream.pipeline)

const uppercase = new stream.Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase())
  }
})

async function run() {
  await pipeline(
    fs.createReadStream("./file.txt"),
    uppercase,
    fs.createWriteStream("./newfile-promise.txt")
  )

  console.log("Pipeline succeeded.")
}

run().catch((err) => {
  console.error("Pipeline failed.", err)
})