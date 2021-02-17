import Review from '../database/schemas/review.js'

class StudentService {
  async execute(studentId, classId, reviewDate, review) {
    const avaliacao = new Review({
      studentId,
      classId,
      reviewDate,
      review
    })

    avaliacao.save(err => {
      if (err) console.log(err)
    })
  }
}

export default StudentService
