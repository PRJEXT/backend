import { Router } from 'express'

import studentRoutes from './student.routes'

const routes = Router()

// rota meramente ilustrativa.
routes.use('/student', studentRoutes)
