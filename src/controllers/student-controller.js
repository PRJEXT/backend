// como avalia o interesse da matéria
// como avalia a qualidade a qualidade de ensino
// conta pra gente mais sobre a experiencia de ensino

// aqui chamamos um ou mais serviços que faram o que é preciso fazer com as informações que está vindo no request.

class StudentController {
  create(request, response) {
    const { avaliacaoMateria, avaliacaoEnsino, comentario } = request.body
  }
}

export default new StudentController();
