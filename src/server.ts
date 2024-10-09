import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  console.log('Hello Wordl')
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Http Runing Server')
  })
