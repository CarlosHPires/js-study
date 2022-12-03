var ultimoItem = videoGames.pop(); // tira o último item do array
var insereItem = videoGames.push("3DS"); // adiciona um item ao final do array

var tamanhoArray = videoGames.length;

console.log("Meu array: " + videoGames);
console.log("Tirando esse item do array: " + ultimoItem);
console.log("Inserindo esse item no array: " + insereItem);
console.log("Esse é o tamanho do array: " + tamanhoArray);

for (var numero = 0; numero <= 4; numero++) {
  console.log(numero);
}

var i = 0;
while (i <= 10) {
  console.log(i);
  i = i + 5;
}

var videoGames = ["Switch", "PS5", "XBOX", "3DS", "Nintendo"];

for (var item = 0; item < videoGames.length; item++) {
  console.log(item);
}

var videoGames = ["Switch", "PS5", "XBOX", "3DS", "Nintendo"];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === "PS5") {
    break;
  }
}

var frutas = ["Banana", "Pera", "Maçã", "Abacaxi", "Uva"];

frutas.forEach(function (fruta, index, array) {
  frutas.pop();

  console.log(fruta, index, array);
});

// Crie um array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var anosBrasilCopa = [1959, 1962, 1970, 1994, 2002];
console.log(anosBrasilCopa);

// Intereja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, 'O brasil ganhou a copa de ${a}

anosBrasilCopa.forEach(function (item) {
  console.log("O Brasil ganhou a copa de: " + item);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === "Pera") {
    break;
  }
}

// Coloque a última fruta do array acima em uma variavel,
// sem remover a mesma do array.

var ultimaFruta = frutas[4];
console.log(ultimaFruta);
