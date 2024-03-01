const express = require('express')
const { connectBD } = require('./src/config/db')
const { charactersRouter } = require('./src/api/routes/characters')
require('dotenv').config()
const cors = require('cors')
const CHARACTERS = require('./src/api/models/characters.js')
const { usersRouter } = require('./src/api/routes/users.js')

connectBD()
const PORT = 8080
const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/v1/characters', charactersRouter)
app.use('/api/v1/users', usersRouter)

app.use('*', (req, res, next) => {
  return res.status(404).json('Ruta no encontrada')
})

app.listen(PORT, () => {
  console.log('escuchamos el puerto en http://loclalhost' + PORT)
})
