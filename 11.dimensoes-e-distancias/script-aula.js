// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector(".animais-lista img");

const imgTop = img.offsetTop;
console.log(imgTop);

// Retorne a soma da largura de todas as imagens
function somaImages() {
  const images = document.querySelectorAll("img");
  let soma = 0;

  images.forEach((image) => {
    soma = soma + image.offsetWidth;
  });
  console.log(soma);
}

window.onload = function () {
  somaImages();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll("a");

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, "Possui acessibilidade");
  } else {
    console.log(link, "Não Possui boa acessibilidade");
  }
});
console.log(links);

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserScreen = window.matchMedia("(max-width: 720px)").matches;
const menu = document.querySelector(".menu");

if (browserScreen) {
  menu.classList.add("menu-mobile");
  console.log(menu);
}
