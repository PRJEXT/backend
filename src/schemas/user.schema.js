import mongoose from 'mongoose'

import bcrypt from 'bcrypt'
import generateNonce from '../utils/generate-nonce.js'

const UserSchema = mongoose.Schema({
  name: String,
  bio: String,
  publicAddress: String,
  nonce: { type: Number, default: generateNonce }
})

export default mongoose.model('User', UserSchema)
