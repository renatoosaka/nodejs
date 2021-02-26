const hapi = require("@hapi/hapi")
const path = require("path")

const PORT = process.env.PORT ?? 3000
const HOSTNAME = process.env.HOSTNAME ?? "localhost"

const initialize = async () => {
  const server = hapi.server({
    port: PORT,
    host: HOSTNAME
  })

  await server.register(require("@hapi/inert"))

  server.route({
    method: "GET",
    path: "/",
    handler:  {
      file: path.join(__dirname, "files", "file.txt")
    }
  })

  server.route({
    method: "GET",
    path: "/f",
    handler: (request, h) => {
      return h.file(path.join(__dirname, "files", "files.txt"))
    }
  })

  server.route({
    method: "GET",
    path: "/d/{param*}",
    handler: {
      directory: {
        path: path.join(__dirname, "files")
      }
    }
  })

  await server.start()
  console.log(`Server running on ${server.info.uri}`)
}

initialize()