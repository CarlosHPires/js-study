// Crie uma função para verificar se um valor é true
var estado = true;

function ItsTrue() {
  if (estado === true) {
    console.log("true");
  } else {
    console.log("false");
  }
}

ItsTrue();
//

// Crie uma função matemática que retorna o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(quadrado) {
  return quadrado * 4;
}

console.log(perimetro(4));

// Crie uma função que retorne o seu nome completo
// Ela deve possuir os parâmetros: nome e sobrenome

function nameComplete(nome, sobrenome) {
  return nome + sobrenome;
}

console.log(nameComplete("Carlos", " Pires"));

// Crie uma função que verifica se um número é pár

function parVerify(numero) {
  if (numero % 2 == 0) {
    console.log("O número é par");
  } else {
    console.log("O número é impar");
  }
  return numero;
}

console.log(parVerify(8));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function typeArgument(data) {
  return typeof data;
}

console.log(typeArgument(2));

// addEventListener é uma função nativa do javascript
// o primeiro parâmetro é o evento que ocorre e o segundo é o callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer

function mostrarNome(nomeCompleto) {
  nomeCompleto = "Carlos Henrique de Oliveira Pires";
  return console.log(nomeCompleto);
}

window.addEventListener("scroll", mostrarNome);

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

console.log(precisoVisitar(192));
