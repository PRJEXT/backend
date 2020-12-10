import Avaliacao from '../database/schemas/avaliacao.js'

class StudentService {
  async execute(id_aluno, id_disciplina, data_avaliacao, av_comentario) {
    const avaliacao = new Avaliacao({
      id_aluno,
      id_disciplina,
      data_avaliacao,
      av_comentario
    })

    avaliacao.save(err => {
      if (err) console.log(err)
    })
  }
}

export default StudentService
