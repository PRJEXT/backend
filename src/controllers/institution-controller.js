import institutionService from '../services/institution-service.js'

class InstitutionController {
  async create(request, response, next) {
    try {
      const { name, domain, key } = request.body
      console.log(name, domain, key)
      const institution = await institutionService.create({ name, domain, key })

      response.json(institution)
    } catch (error) {
      console.log(error)
      response.send(error)
    }
  }
}

export default new InstitutionController()
