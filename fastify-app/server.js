const fastfy = require("fastify")()

const PORT = process.env.PORT ?? 3000

fastfy.get("/", async (request, reply) => {
  return { message: "Hello World"}
})

const startServer = async () => {
  try {
    await fastfy.listen(PORT)
    console.log(`Server started on ${fastfy.server.address().port}`)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

startServer()