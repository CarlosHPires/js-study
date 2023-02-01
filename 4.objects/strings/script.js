// const comida = "Pizza";
// const agua = new String("Agua");

// console.log(comida.length);

// const frase = "A melhor comida";

// console.log(frase[frase.length - 1]);
// console.log(frase.charAt(frase.length - 1));

// const frase = "A melhor linguagem é ";
// const linguagem = "JavaScript";

// const fraseFinal = frase.concat(linguagem, "!!");

// const fruta = "Bananas";
// const listasFrutas = "Melancia, Banana, Laranja";

// console.log(listasFrutas.includes(fruta, 14));

// console.log(fruta.endsWith("nas"));
// console.log(fruta);

const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisas";

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi

console.log(transacao1.slice(-5));

console.log(fruta.indexOf("s"));

const preco = "R$ 99,00";

const listaPrecos = ["R$ 99", "R$ 199", "R$ 12000"];

listaPrecos.forEach((item) => {
  console.log(item.padStart(10, "-"));
});

const frase2 = "Ta";

console.log(frase2.repeat(5));

let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
listaItens = listaItens.replace(/[ ]+/g, ", ");

const arrayLista = listaItens.split(", ");

console.log(arrayLista);

const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div");
const novoHtml = htmlArray.join("section");

console.log(htmlText);
console.log(htmlArray);
console.log(novoHtml);

const frutasArray = ["Banana", "Melancia", "Laranja"];

const sexo1 = "Feminino";
const sexo2 = "feminino";
const sexo3 = "FEMININO";

sexo1.toLowerCase() === "feminino"; // true
sexo2.toLowerCase() === "feminino"; // true
sexo3.toLowerCase() === "feminino"; // true

const valor = "  R$ 25.00  ";
valor.trim(); // 'R$ 25.00';
valor.trimStart(); // 'R$ 25.00  ';
valor.trimEnd(); // '  R$ 25.00';
