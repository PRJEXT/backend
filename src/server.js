import app from './config/app.js'
import http from 'http'

const PORT = 8080

const server = http.createServer(app)

server.listen(process.env.PORT || PORT, () => console.log('Listening request'))
