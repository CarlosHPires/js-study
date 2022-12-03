var pessoa = {
  nome: "Carlos",
  idade: 21,
  altura: 1.8,
};

console.log(pessoa.idade);

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

console.log("area:", quadrado.area(4));
console.log("perimetro:", quadrado.perimetro(5));

var height = 100;

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
  metadeHeight() {
    return this.height / 2;
  },
};

menu.backgroundColor = "#000";
menu.color = "blue";

menu.esconder = function () {
  console.log("Escondi");
};

menu.esconder();
var bg = menu.backgroundColor;

// Exercicio

// Crie um objeto com os seus dados pessoas
// Deve possuir pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
  nome: "Carlos",
  sobrenome: "Pires",
  idade: 21,
  altura: 1.8,
  peso: 96,
};
// Crie um método no objeto abaixo, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function () {
  console.log(this.nome + " " + this.sobrenome);
};

dadosPessoais.nomeCompleto();

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: "Labrador",
  cor: "Preto",
  idade: 10,
  latir: function (pessoa) {
    if (pessoa === "homem") {
      console.log("AU AU AU AU");
    } else {
      console.log("Nada");
    }
  },
};
