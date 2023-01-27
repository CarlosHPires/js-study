// const Dom = {
//   seletor: "li",
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     this.element().classList.add("ativar");
//   },
// };

function Dom(seletor) {
  this.element = function () {
    return document.querySelector(seletor);
  };
  this.ativar = function (classe) {
    this.element().classList.add(classe);
  };
}

const li = new Dom("li");
const ul = new Dom("ul");

const liLast = new Dom("li:last-child");

console.log(li.element());
console.log(ul.element());
console.log(liLast.ativar("uma-classe-qualquer"));
console.log(liLast.element());
