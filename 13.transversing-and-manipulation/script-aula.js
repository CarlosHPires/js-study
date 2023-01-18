// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");

const menuClone = menu.cloneNode(true);

copy.appendChild(menuClone);

// Selecione o primeiro DT da dl de Faq

const faq = document.querySelector(".faq");
const firstDT = faq.querySelector('dt);

// Selecione o DD referente ao primeiro DT

const nextDD = firstDT.nextElementSibling;
console.log(nextDD);

// Substitua o conteúdo html de .faq pelo de .animais

const animais = document.querySelector(".animais");

faq.innerHTML = animais.innerHTML;
