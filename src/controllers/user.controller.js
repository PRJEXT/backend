import userService from '../services/user.service.js'
import verifySignature from '../utils/verify-signature.js'
import { jwtSign } from '../utils/jwt.js'

class UserController {
  async signIn(req, res) {
    const { publicAddress, signature } = req.body

    try {
      console.log('About to get the user', publicAddress, signature)

      const user = await userService.get(publicAddress)

      console.log('I got the user')

      const isVerified = verifySignature({
        publicAddress,
        signature,
        nonce: user.nonce
      })

      console.log('Is verified: ', isVerified)

      const token = jwtSign({ publicAddress })

      console.log('User is authenticated: ', token, user)

      await userService.updateNonce(publicAddress)

      console.log('Is updating nonce')

      res.json({ token, user })
    } catch (err) {
      res.status(401).json({ message: err.message })
    }
  }

  async signUp(req, res) {
    const { publicAddress, signature, name, bio } = req.body

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
