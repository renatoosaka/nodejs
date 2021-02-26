async function routes(fastify) {
  fastify.get("/", async (request, reply) => {
    return { message: "Hello world - plugin"}
  })
}

module.exports = routes