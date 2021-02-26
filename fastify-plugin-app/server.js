const fastify = require("fastify")()

const PORT = process.env.PORT ?? 3000

fastify.register(require("./plugins/hello-route"))

const startServer = async () => {
  try {
    await fastify.listen(PORT)
    console.log(`Server started on ${fastify.server.address().port}`)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

startServer()