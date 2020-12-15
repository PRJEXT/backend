import express from 'express'

import studentController from '../controllers/student-controller.js'
import institutionController from '../controllers/institution-controller.js'

const router = express.Router()

router.post('/student', studentController.create)
router.post('/institution', institutionController.create)

export default router
