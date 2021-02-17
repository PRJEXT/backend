import institutionService from '../services/institution-service.js'

class AuthMiddleware {
  /**
   *  Verifica se a chave de API fornecida pelo cliente no campo authorization
   *  dos cabecalhos de requisicao e o dominio de onde a requisicao esta sendo feita e
   *  a mesma que esta salva no banco de dados
   */

  checkCredentials(request, response, next) {
    if (request.session.allow) {
      next()
    } else {
      const { key, name } = request.query
      const domain = request.get('host')

      institutionService.checkCredentials(name, key, function (
        match,
        institution
      ) {
        if (match && domain === institution.domain) {
          request.session.allow = true
          next()
        } else {
          response.status(401).send('Nao authorizado')
        }
      })
    }
  }
}

export default new AuthMiddleware()
