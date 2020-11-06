import express from 'express'
import router from './app.routes.js'
import cors from 'cors'

class App {
  constructor() {
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
    this.app.use('/public', express.static('frontend'))
  }

  routes = () =>  {
    this.app.use(router)
  }

  database = () => {}
}

export default new App().app
