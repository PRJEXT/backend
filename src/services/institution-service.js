import Institution from '../database/schemas/institution.js'

class InstitutionService {
  async create({ name, domain, key }) {
    const institution = await Institution.create({ name, domain, key })

    return institution
  }

  async checkCredentials(name, key, domain, cb) {
    const institution = await Institution.findOne({ name })

    if (!institution) {
      throw Error('Usuario ou chave nao existem')
    }

    const keysMatch = institution.compareKeys(key, (error, match) => {
      if (error) {
        throw Error(error)
      }

      cb(match, institution)
    })
  }
}

export default new InstitutionService()
