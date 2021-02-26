const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
  const title = "Express with EJS"

  res.render("index", {
    title
  })
})

module.exports = router