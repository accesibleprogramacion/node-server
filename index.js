const http = require('http')

let users = [
    {
      id: 1,
      user: 'Juan',
    },
    {
      id: 2,
      user: 'Agustina',
    },
]

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify(users))
})

const PORT = 3001
app.listen(PORT)
console.log(`El servidor está levantado en el puerto ${PORT}`) 