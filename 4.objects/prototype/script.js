function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function () {
    return "abraçou";
  };

  this.andar = function () {
    return "andou pelo objeto";
  };
}

Pessoa.prototype.andar = function () {
  return this.nome + " Pessoa andou";
};

Pessoa.prototype.nadar = function () {
  return this.nome + " Pessoa nadou";
};

// const pessoa1 = new Pessoa("Carlos", 21);

// console.log(Pessoa.prototype);
// console.log(pessoa1.prototype);

const pais = "Brasil";
const cidade = new String("Rio");

pais.charAt(0);
cidade.charAt(0);

const listaAnimais = ["Cachoro", "Gato", "Cavalo"];

const lista = document.querySelectorAll("li");

// Transforma em uma array
const listaArray = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

const Carro = {
  marca: "ford",
  preco: 2000,
  andar() {
    return "Oi";
  },
};

// Carro // Object
// Carro.marca // String
// Carro.preco // Number
// Carro.acelerar // Function
// Carro.acelerar() // Boolean
// Carro.marca.charAt // Function
// Carro.marca.charAt(0) // String

// Verifique o nome do construtor com: .constructor.name
