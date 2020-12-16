import express from 'express'

import reviewController from '../controllers/review-controller.js'
import institutionController from '../controllers/institution-controller.js'

const router = express.Router()

router.post('/review', reviewController.create)
router.post('/institution', institutionController.create)

export default router
