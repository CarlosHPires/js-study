function Book(name, author, price, amount) {
  this.name = name;
  const tax = 1.2;
  this.author = author;
  this.finalPrice = price * tax;

  this.amount = amount;
}

function Gun(name, pais, capacidadeCarregador) {
  this.name = name;
  this.pais = pais;
  this.capacidadeCarregador = capacidadeCarregador;
}

const book1 = new Book(
  "Happy Potter e a pedra filosofal",
  "J. K. Rowling",
  15,
  4
);

const gun1 = new Gun("AK-47", "Russia", 30);
const gun2 = new Gun("GLOCK-17", "Austria", 12);
const gun3 = new Gun("FN-SCAR", "UNITED STATES OF AMERICA", 35);

const book2 = new Book("O Príncipe", "Nicolau Maquiavel", 25, 2);
const book3 = new Book("A Arte da Guerra", "Sun Tzu", 35, 22);

console.log(book1);
console.log(book2);
console.log(book3);

console.log(gun1);
console.log(gun2);
console.log(gun3);
