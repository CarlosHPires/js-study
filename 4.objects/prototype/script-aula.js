// Função construtora
function Arma(nome, capacidadeCarregador) {
  this.nome = nome;
  this.capacidadeCarregador = capacidadeCarregador;
  this.carregou = function () {
    return this.nome + " carregou";
  };
}

// Criando método diretamente no prototype do construtor
Arma.prototype.atirou = function () {
  return this.nome + " atirou";
};

const glock = new Arma("GLOCK-17", 15);
const ak = new Arma("AK-47", 30);
const m4 = new Arma("M4A1", 30);

// Vendo o método que criamos diretamente no prototype do nosso construtor
console.log(Arma.prototype);

// Guns
console.log(glock);
console.log(m4);
console.log(ak);

// return 'undefined atirou' pq acessou diretamente o prototype (não passou pelo construtor da função pra poder pegar o this.nome)
console.log(glock.__proto__.atirou());

console.log(glock);
console.log(ak);
console.log(m4);

// prototype = return undefined
console.log(glock.prototype);
console.log(ak.prototype);
console.log(m4.prototype);
// ------------------------------------------------------ //

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};

const pessoa1 = new Pessoa("Carlos", "Pires", 22);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li; // 'HTMLLIElement'
li.click; // 'Function'
li.innerText; // 'String'
li.value; // 'Number'
li.hidden; // 'Boolean'
li.offsetLeft; // 'Number'
li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // 'String'
