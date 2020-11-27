import mongoose from 'mongoose'
import uuid from 'uuidv4'

const Avaliacao = new mongoose.Schema(
  {
    id_aluno: {
      type: uuid,
      required: true
    }
  },
  {
    _id: true
  }
)

module.exports = mongoose.model('Avaliacao', Avaliacao)
