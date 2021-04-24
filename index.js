const express = require('express')
const app = express()

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

app.get('/', (request, response) => {
    response.send('<h1>Servidor con express</h1>')
})

app.get('/api/users', (request, response) => {
    response.json(users)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`El servidor está levantado en el puerto ${PORT}`) 
})
