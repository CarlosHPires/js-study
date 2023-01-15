const img = document.querySelector("img");
function callback(e) {
  console.log(e);
}

img.addEventListener("click", callback); // 🚀
img.addEventListener("click", callback()); // undefined
img.addEventListener("click", function () {
  console.log("Clicou");
});

img.addEventListener("click", () => {
  console.log("Clicou");
});

const animaisLista = document.querySelector(".animais-lista");
function callbackLista(e) {
  console.log(e.currentTarget);
  console.log(e.target);
  console.log(e.type);
  console.log(e.path);
}
animaisLista.addEventListener("click", callbackLista);

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(e) {
  e.preventDefault();
  console.log(this.getAttribute("href"));
  console.log(e.currentTarget);
}

linkExterno.addEventListener("click", handleLinkExterno);

const h1 = document.querySelector("h1");

function handleEvent(e) {
  console.log(e.type, e);
}

h1.addEventListener("click", handleEvent);
h1.addEventListener("mouseenter", handleEvent);
window.addEventListener("scroll", handleEvent);
window.addEventListener("resize", handleEvent);
window.addEventListener("keydown", handleEvent);

function handleKeyboard(e) {
  if (e.key === "a") {
    document.body.classList.toggle("azul");
  } else if (e.key === "v") {
    document.body.classList.toggle("vermelho");
  }
}

window.addEventListener("keydown", handleKeyboard);

const imgs = document.querySelectorAll("img");

function handleImg(e) {
  const src = e.currentTarget.getAttribute("src");
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener("click", handleImg);
});
