const path = require("path")
const koa = require("koa")
const serve = require("koa-static")
const router = require("koa-router")()
const views = require("koa-views")
const index = require("./routes")

const PORT = process.env.PORT ?? 3000

const app = new koa()

app.use(async (ctx, next) => {
  console.log("First middleware start")
  await next()
  console.log("First middleware return")
})

app.use(async (ctx, next) => {
  console.log("Second middleware start")
  await next()
  console.log("Second middleware return")
})

app.use(async (ctx, next) => {
  console.log("Third middleware start")
  await next()
  console.log("Third middleware return")
})

app.use(views(path.join(__dirname, "views"), { 
  extension: "ejs"
}))

app.use(serve(path.join(__dirname, "public")))

router.use("/", index.routes())
app.use(router.routes())


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})