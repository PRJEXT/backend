import express from 'express'
import env from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

import router from './routes/app.routes.js'

class App {
  constructor() {
    env.config()

    this.app = express()

    this.middlewares()
    this.routes()
    this.database()
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(express.json())
  }

  routes() {
    this.app.use(router)
  }

  database() {
    console.log(process.env.MONGO_URI)

    mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    })
  }
}

export default new App().app
