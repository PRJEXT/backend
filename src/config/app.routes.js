import express from 'express'

import studentController from '../controllers/student-controller.js'

const router = express.Router();

// rota meramente ilustrativa.
router.use('/student', studentController.create)

export default router
