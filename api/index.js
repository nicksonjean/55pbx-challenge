require('./config/db')
const express = require('express')
const { PORT, API_VERSION } = require('./config/variables')
const cors = require('cors')
const http = require('http')
const socketIO = require("socket.io")
const imageRouter = require('./routes/image')

const app = express()
const server = http.createServer(app)
const io = socketIO(server, {
  transports: ['polling'],
  cors: {
    cors: {
      origin: "*"
    }
  }
})

io.on('connection', (_) => {})

app.use(express.json())
app.use(cors())
app.use(`${API_VERSION}/images`, imageRouter(io))

server.listen(PORT, () => {
  console.log(`Server on ${PORT}`)
})