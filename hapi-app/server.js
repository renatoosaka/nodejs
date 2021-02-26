const hapi = require("@hapi/hapi")

const PORT = process.env.PORT ?? 3000
const HOSTNAME = process.env.HOSTNAME ?? "localhost"

const initialize = async () => {
  const server = hapi.server({
    port: PORT,
    host: HOSTNAME
  })

  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Welcome to Hapi"
    }
  })

  await server.start()
  console.log(`Server running on ${server.info.uri}`)
}

initialize()