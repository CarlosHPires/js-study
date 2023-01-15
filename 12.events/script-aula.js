// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const internLinks = document.querySelectorAll('a[href^="#"]');

function handleLink(e) {
  e.preventDefault();
  internLinks.forEach((link) => {
    link.classList.remove("ativo");
  });
  e.currentTarget.classList.add("ativo");
}

internLinks.forEach((link) => {
  link.addEventListener("click", handleLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll("body *");

function handleElement(e) {
  e.currentTarget.remove();
}

todosElementos.forEach((cadaElemento) => {
  cadaElemento.addEventListener("click", handleElement);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleClickT(e) {
  if (e.key === "t") {
    document.documentElement.classList.toggle("textomaior");
  }
}
window.addEventListener("keydown", handleClickT);
