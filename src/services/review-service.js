import Review from '../database/schemas/review.js'

class ReviewService {
  async execute({ studentId, classId, reviewDate, review }) {
    const newReview = await Review.create({
      studentId,
      classId,
      reviewDate,
      review
    })

    return newReview
  }
}

export default new ReviewService()
