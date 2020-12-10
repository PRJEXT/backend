import app from './app.js'
import http from 'http'

const server = http.createServer(app)

server.listen(process.env.PORT, () => console.log('Listening request'))
