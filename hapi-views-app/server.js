const hapi = require("@hapi/hapi")

const PORT = process.env.PORT ?? 3000
const HOSTNAME = process.env.HOSTNAME ?? "localhost"

const initialize = async () => {
  const server = hapi.server({
    port: PORT,
    host: HOSTNAME
  })

  await server.register(require("@hapi/vision"))

  server.views({
    engines: {
      ejs: require("ejs")
    },
    relativeTo: __dirname,
    path: "views"
  })

  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return h.view("index", {
        title: "Hapi Views EJS"
      })
    }
  })

  await server.start()
  console.log(`Server running on ${server.info.uri}`)
}

initialize()