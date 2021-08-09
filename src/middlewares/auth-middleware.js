import userService from '../services/user.service.js'

class AuthMiddleware {
  async publicAddressExists(req, res, next) {
    const user = await userService.get(req.body.publicAddress)

    !user
      ? res.status(403).json({ message: 'Public address not registered' })
      : next()
  }
}

export default new AuthMiddleware()
