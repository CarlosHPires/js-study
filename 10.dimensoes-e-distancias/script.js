const listaAnimais = document.querySelector(".animais-lista");

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;

console.log(height);
console.log(animaisTop);

const primeiroh2 = document.querySelector("h2");
const h2left = primeiroh2.offsetLeft;

const rect = primeiroh2.getBoundingClientRect();

console.log(rect.top);

console.log(
  window.innerWidth,
  window.outerWidth,
  window.outerHeight,
  window.innerHeight,
  window.pageYOffset
);
