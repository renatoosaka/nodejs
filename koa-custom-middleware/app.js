const path = require("path")
const koa = require("koa")
const serve = require("koa-static")
const router = require("koa-router")()
const index = require("./routes")
const logger = require("./middleware/logger")

const PORT = process.env.PORT ?? 3000

const app = new koa()

app.use(logger())
app.use(serve(path.join(__dirname, "public")))

router.use("/", index.routes())
app.use(router.routes())

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})