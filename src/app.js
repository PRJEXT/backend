import express from 'express'
import env from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

import router from './routes/app.routes.js'
import authMiddleware from './middlewares/auth-middleware.js'

class App {
  constructor() {
    env.config()

    this.app = express()

    this.middlewares()
    this.staticFolder()
    this.routes()
    this.database()
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use('/public/*', authMiddleware.checkCredentials)
  }

  staticFolder() {
    this.app.use('/public', express.static('public'))
  }

  routes() {
    this.app.use(router)
  }

  database() {
    mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    })
  }
}

export default new App().app
