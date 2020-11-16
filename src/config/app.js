import express from 'express'
import env from 'dotenv'
import mongoose from 'mongoose';
import router from './app.routes.js'
import cors from 'cors'

class App {
  constructor() {
    env.config();

    this.app = express()

    this.middlewares()
    this.staticFolder()
    this.routes()
    this.database()
  }

  middlewares = () => {
    this.app.use(cors())
    this.app.use(express.json())
  }

  staticFolder = () => {
    this.app.use('/public', express.static('public'))
  }

  routes = () =>  {
    this.app.use(router)
  }

  database = () => {
    mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
  }
}

export default new App().app
