import mongoose from 'mongoose'
import uuid from 'uuidv4'

const Review = new mongoose.Schema(
  {
    studentId: {
      type: uuid,
      required: true
    },
    classId: {
      type: uuid,
      required: true
    },
    reviewDate: {
      type: String,
      required: true
    },
    review: {
      type: String,
      required: true
    }
  },
  {
    _id: true
  }
)

export default mongoose.model('Review', Review)