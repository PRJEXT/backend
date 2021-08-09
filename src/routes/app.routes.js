import express from 'express'

import authMiddleware from '../middlewares/auth-middleware.js'
import userController from '../controllers/user.controller.js'

const router = express.Router()

// USER ROUTES
router.get('/api/user/nonce/:publicAddress', userController.getNonce)
router.get('/api/user', userController.get)
router.post(
  '/api/user/signIn',
  authMiddleware.publicAddressExists,
  userController.signIn
)
router.post('/api/user/signup', userController.signUp)

export default router
