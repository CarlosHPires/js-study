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

const pessoa1 = new Pessoa("Carlos", 21);

console.log(Pessoa.prototype);
console.log(pessoa1.prototype);
