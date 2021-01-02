import StudentService from '../services/student-service.js'

class StudentController {
  create(request, response) {
    const { studentId, classId, reviewDate, review } = request.body
    const studentService = new StudentService()

    studentService.execute(studentId, classId, reviewDate, review)
    response.status(200).json({ success: true })
  }
}

export default new StudentController()
