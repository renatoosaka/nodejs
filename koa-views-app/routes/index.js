const router = require("koa-router")()

router.get("/", async function (ctx) {
  ctx.state = {
    title: "Koa.js Views EJS"
  }

  await ctx.render("index")
})

module.exports = router