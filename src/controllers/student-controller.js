// como avalia o interesse da matéria
// como avalia a qualidade a qualidade de ensino
// conta pra gente mais sobre a experiencia de ensino

// aqui chamamos um ou mais serviços que faram o que é preciso fazer com as informações que está vindo no request.

class StudentController {
  create(request, response) {
    console.log('Body: ', request.body);
  
    response.status(200).json({ success: true });
  }
}

export default new StudentController();
