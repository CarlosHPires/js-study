function Book(name, author, price, amount) {
  this.name = name;
  const tax = 1.2;
  this.author = author;
  this.finalPrice = price * tax;

  this.amount = amount;
}

const book1 = new Book(
  "Happy Potter e a pedra filosofal",
  "J. K. Rowling",
  15,
  4
);

const book2 = new Book("O Príncipe", "Nicolau Maquiavel", 25, 2);
const book3 = new Book("A Arte da Guerra", "Sun Tzu", 35, 22);

console.log(book1);
console.log(book2);
console.log(book3);
