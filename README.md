# Backend Projeto Extensão

## Install :wrench:

Para fazer tudo funcionar é preciso configurar o projeto:

- Primeiro rode ``npm run config`` para clonar o repositório do front end. Quando houver alguma atualização no front end rode ``npm run updade-fe``;

- Depois rode ``npm install -g nodemon`` para instalar o nodemon de maneira global;

- Renomeie o arquivo *.env.exemple* para *.env* e cole a URI do banco de dados sem aspas na variável de ambiente MONGO_URI;

- Em seguida rode ``npm run dev`` para iniciar o servidor. Agora pode testar os widgets disponíveis na página public.

Também vai precisar da extensão do Visual Studio Code chamada "ESLint" para fazer com que o padrão seja aplicado de maneira correta. Às vezes no canto inferior direito do seu VSCode vai ter algo como: <img alt="longRoadAhead" src="https://raw.githubusercontent.com/Microsoft/vscode-eslint/master/images/2_1_10/eslint-status.png" /> , caso esse seja seu caso é só clicar em cima do ícone e dar permissão (Allow).

*Nota: vale lembrar que no deccorer do nosso desenvolvimento faremos alterações no README.*