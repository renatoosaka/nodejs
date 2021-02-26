const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  host: "localhost",
  port: 4321
})

transporter.sendMail(
  {
    from: "email@example.com",
    to: "johndoe@example.com",
    subject: "Hello",
    text: "Hello World"
  }, (err, info) => {
    if (err) {
      console.error(err)
    }

    console.log("Message Sent:", info)
  }
)