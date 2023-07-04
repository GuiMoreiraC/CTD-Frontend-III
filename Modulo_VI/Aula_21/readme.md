**Front End III**

# Aula 21: Prática Integradora

Olá, hora de praticar!

O objetivo desta mesa é fazer com que sejam consolidados os conceitos vistos em aula.
Trabalharemos com os conceitos de useContext(), useReducer() e LocalStorage.

## Requisitos

1. Crie um novo projeto React para cadastrar, listar e remover atendimentos de
   usuários;
2. Seu projeto deverá conter um formulário com dois campos, sendo um para receber o
   tipo de atendimento realizado (por exemplo: ”Alteração de dados cadastrais”) e
   outro campo para receber o tempo do atendimento (por exemplo: 10 minutos);
3. Você deverá implementar um contexto global para salvar os dados do atendimento;
4. É necessário utilizar o Hook useReducer() e receber as actions e payloads para
   realizar a alteração do estado global da aplicação;
5. Abaixo do formulário deverá conter uma lista com todos os atendimentos realizados;
6. O formulário deve ser criado em um componente isolado, e ser chamado na página
   principal da aplicação;
7. A lista de atendimentos deverá ser criada em um componente isolado, e ser
   chamada na página principal da aplicação;
8. Crie uma função para excluir os atendimentos individualmente a partir do click em
   um botão;
9. Utilize o LocalStorage para guardar os atendimentos cadastrados;
10. Quando um atendimento for removido da lista, este também deverá ser removido do
    LocalStorage.
