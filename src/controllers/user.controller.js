import userService from '../services/user.service.js'
import verifySignature from '../utils/verify-signature.js'
import { jwtSign } from '../utils/jwt.js'

class UserController {
  async signUp(req, res) {
    const { publicAddress, signature, name, bio } = req.body

    console.log('Body of the request: ', req.body)

    const user = await userService.get(publicAddress)

    const isVerified = verifySignature({
      publicAddress,
      signature,
      nonce: user.nonce
    })

    if (!isVerified) {
      return res.status(403).json({ message: 'Signature was not verified' })
    }

    const newUser = await userService.update({
      publicAddress,
      signature,
      name,
      bio
    })

    const token = await jwtSign({ publicAddress })

    res.json({ token, user: newUser })
  }

  async create(req, res) {
    const { publicAddress, name, bio } = req.body

    if (!publicAddress) {
      return res.state(500).json({ message: 'Public address is required' })
    }

    await userService.create({ publicAddress, name, bio })
  }

  async get(req, res) {
    const { publicAddress } = req.query

    const user = await userService.get(publicAddress)

    res.json({ user })
  }

  async getNonce(req, res) {
    const { publicAddress } = req.params

    try {
      const user = await userService.get(publicAddress)

      if (user) {
        return res.json({ user })
      }

      const newUser = await userService.create({
        publicAddress
      })

      res.json({ user: newUser })
    } catch (err) {
      res.send(err)
    }
  }
}

export default new UserController()
