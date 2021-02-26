const express = require("express");
const bodyParser = require("body-parser");
const { join } = require("path");
const index = require("./routes/index");
const auth = require("./routes/auth");
const session = require("express-session");
const app = express();


app.use(
  session({
    name: "SESSIONID",
    secret: "Node Cookbook",
    resave: false,
    saveUninitialized: false,
  })
)

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", index);
app.use("/auth", auth);

app.listen(3000, () => {
 console.log("Server listening on port 3000");
});