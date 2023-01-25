// const carro = {
//   marca: "Marca",
//   preco: 0,
// };

// const honda = carro;
// honda.marca = "Honda";
// honda.preco = 4000;

// const fiat = carro;
// fiat.marca = "Fiat";
// fiat.preco = 3000;

function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

const honda = new Carro("Honda", 50000);
const fiat = new Carro("Fiat", 45000);
