import StudentService from '../services/student-services'

class StudentController {
  create(request, response) {
    const { dataAvaliacao, avComentario } = request.body
    const studentService = new StudentService()

    studentService.execute(dataAvaliacao, avComentario)

    response.status(200).json({ success: true })
  }
}

export default new StudentController()

// como avalia o interesse da matéria
// como avalia a qualidade a qualidade de ensino
// conta pra gente mais sobre a experiencia de ensino

// aqui chamamos um ou mais serviços que faram o que é preciso fazer com as informações que está vindo no request.
