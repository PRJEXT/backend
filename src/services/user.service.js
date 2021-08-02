import User from '../schemas/user.schema.js'
import generateNonce from '../utils/generate-nonce.js'

class UserService {
  get(publicAddress) {
    return User.findOne({ publicAddress })
  }

  create({ publicAddress, name, bio }) {
    return User.create({ publicAddress, name, bio })
  }

  update({ publicAddres, name, bio }) {
    return User.findOneAndUpdate(
      { publicAddres },
      { name, bio, nonce: generateNonce() },
      { new: true }
    )
  }

  updateNonce({ publicAddress }) {
    return User.findOneAndUpdate(
      { publicAddress },
      { nonce: generateNonce() },
      { new: true }
    )
  }
}

export default new UserService()
