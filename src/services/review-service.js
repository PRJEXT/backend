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

  async positiveCount() {
    const query = await Review.aggregate([
      {
        $match: {
          sentiment: 'positivo'
        }
      },
      {
        $count: 'positiveCount'
      }
    ])

    const { positiveCount } = query[0]

    return positiveCount
  }

  async negativeCount() {
    const query = await Review.aggregate([
      {
        $match: {
          sentiment: 'negativo'
        }
      },
      {
        $count: 'negativeCount'
      }
    ])

    const { negativeCount } = query[0]

    return negativeCount
  }
}

export default new ReviewService()
