//MYSQL --> Selecionando o banco de dados que iriamos usar
//MONGO --> Seleciona o banco de dados, se não existir ele cria uma banco de dados 
// ELE CRIA O BANCO DE DADOS.
use('ifms');

db.createCollection("aluno")
db.createCollection("aluno")

db.getCollectionNames()

db.getCollection("aluno").insertOne({
  nome:"Kat linda",
  idade: 109,
  email:"Katiely.santos@estudante.ifms.edu.br",
  cpf: "038.933.101-50",
  telefone: "67984791995"
})

//CRIEM OUTRA COLLECTION CHAMA "professor"
//nome,idade,email,cpf,endereco_trabalho,telefone

//Insira pelo menos 2 professores no banco de dados "escola"

use('escola');

db.createCollection("professor")
db.createCollection("professor")

db.getCollectionNames()

db.getCollection("professor").insertOne({
  nome:"terenciani",
  idade: 1009,
  email:"Guilhereme.terenciani@estudante.ifms.edu.br",
  cpf: "038.933.101-50",
  endereco_trabalho:"Rua: das flores, 788, Portal Residence",
  telefone: "67984791995"
})

db.getCollection("professor").insertOne({
  nome:"Gabi",
  idade: 35,
  email:"Gabi.burgath@estudante.ifms.edu.br",
  cpf: "048.211.101-80",
  endereco_trabalho:"Rua: das flores, 788, Portal Residence",
  telefone: "67987791588"
})