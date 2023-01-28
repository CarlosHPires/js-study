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
