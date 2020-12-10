import StudentService from '../services/student-service.js'

class StudentController {
  create(request, response) {
    const { idAluno, idDisciplina, dataAvaliacao, avComentario } = request.body
    const studentService = new StudentService()

    studentService.execute(idAluno, idDisciplina, dataAvaliacao, avComentario)
    response.status(200).json({ success: true })
  }
}

export default new StudentController()
