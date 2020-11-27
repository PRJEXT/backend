import mongoose from 'mongoose'
import uuid from 'uuidv4'

const Avaliacao = new mongoose.Schema(
  {
    id_aluno: {
      type: uuid,
      required: true
    },
    id_disciplina: {
      type: uuid,
      required: true
    },
    data_avaliacao: {
      type: String,
      required: true
    },
    av_comentario: {
      type: String,
      required: true
    }
  },
  {
    _id: true
  }
)

module.exports = mongoose.model('Avaliacao', Avaliacao)
