Backend do teste para grupo a

Ao clonar o repositório, digite no prompt de comando os seguintes comandos:

- Yarn install
- Yarn dev

Projeto desenvolvido com

- Express 
- TypeORM
- MySQL

Arquitetura do projeto

- Arquitetura do projeto foi organizada no padrão MVC, onde o model está na pasta ./src/entity, os controllers estão em .src/controllers e as views estão em ./src/routes. O padrão MVC é uma arquitetura básica e amplamente utilizada em projetos backend por separar a camada de modelagem de negócio com a manipulação de requisições, facilitando sua manutenção. O Express foi escolhido por ser um framework minimalista fornecendo o necessário para este teste. O TypeORM é um excelente framework por ser simples de usar, abstrair interação com banco de dados e de trocar de SGBD quando for necessário.

Melhorias a serem feitas

Se tivesse mas tempo para fazer o projeto, implementaria o filtro da listagem de estudantes e também paginação dos dados dos estudantes.