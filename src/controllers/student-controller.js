// como avalia o interesse da matéria
// como avalia a qualidade a qualidade de ensino
// conta pra gente mais sobre a experiencia de ensino

export default class StudentController {
  create(request, response) {
    const { avaliacaoMateria, avaliacaoEnsino, comentario } = request.body

    // aqui chamamos um ou mais serviços que faram o que é preciso fazer com as informações que está vindo no request.
  }
}
