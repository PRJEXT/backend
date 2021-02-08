import express from 'express'

import authMiddleware from '../middlewares/auth-middleware.js'
import reviewController from '../controllers/review-controller.js'
import institutionController from '../controllers/institution-controller.js'

const router = express.Router()

router.use('/public', authMiddleware.checkCredentials, express.static('public'))
router.post('/review', reviewController.create)
router.post('/institution', institutionController.create)

export default router
