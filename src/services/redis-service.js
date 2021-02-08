import redis from 'redis'

class RedisService {
  constructor() {
    this.CHANNEL = 'analisys'
    this.client = redis.createClient(process.env.REDIS_PORT)
  }

  broadcastReview(avaliacao) {
    this.client.publish(this.CHANNEL, JSON.stringify(avaliacao))
  }
}

export default new RedisService()
