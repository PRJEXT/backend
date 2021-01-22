import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const SALT_WORK_FACTOR = 20

const InstitutionSchema = mongoose.Schema({
  name: String,
  domain: String,
  key: String
})

InstitutionSchema.pre('save', function (next) {
  const institution = this

  if (!institution.isModified('key')) {
    return next()
  }

  bcrypt.genSalt(SALT_WORK_FACTOR, (error, salt) => {
    if (error) {
      return next(error)
    }

    bcrypt.hash(institution.key, salt, (error, hash) => {
      if (error) {
        return next(error)
      }

      institution.key = hash
      next()
    })
  })
})

InstitutionSchema.methods.compareKeys = function (candidateKey, callback) {
  const institution = this

  bcrypt.compare(candidateKey, institution.key, (error, isMatch) => {
    if (error) {
      callback(error)
    }

    callback(null, isMatch)
  })
}

export default mongoose.model('Institution', InstitutionSchema)
