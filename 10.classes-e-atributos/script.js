// Classes //
const menu = document.querySelector(".menu");

menu.classList.add("ativo", "teste"); // adiciona classes
menu.classList.remove("azul"); // remove a classe azul
menu.classList.toggle("azul"); // alterna entre ter e não ter a classe

if (menu.classList.contains("azul")) {
  menu.classList.add("possui-azul");
} else {
  menu.classList.add("nao-possui-azul");
}

// Atributos //

const animais = document.querySelector(".animais");
console.log(animais.attributes["data-texto"]);

const img = document.querySelector("img");
const srcImg = img.getAttribute("alt");
img.setAttribute("alt", "É uma raposa novas");
const possuiAlt = img.hasAttribute("alt");

console.log(possuiAlt);

const carro = {
  portas: 4,
  andar: function (km) {
    console.log(`Andou ${km}`);
  },
};
