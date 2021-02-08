import reviewService from '../services/review-service.js'
import redisService from '../services/redis-service.js'
import Review from '../database/schemas/review.js'

class ReviewController {
  async create(request, response) {
    const { studentId, classId, reviewDate, review } = request.body

    try {
      const incomingReview = { studentId, classId, reviewDate, review }

      const { _id } = await reviewService.execute(incomingReview)

      console.log(_id)

      redisService.broadcastReview({ ...incomingReview, id: _id })

      response.status(200).json({ success: true })
    } catch (error) {
      response.status(500).send(error)
    }
  }

  async dashboardResult(request, response) {
    try {
      const positiveCount = await reviewService.positiveCount()
      const negativeCount = await reviewService.negativeCount()

      const result = {
        positiveCount: positiveCount,
        negativeCount: negativeCount,
        totalCount: positiveCount + negativeCount
      }

      response.status(200).json(result)
    } catch (error) {
      response.status(500).send(error)
    }
  }
}

export default new ReviewController()
