// Liste 5 objetos nativos
String;
Object;
Array;
Function;
Number;

// Liste 5 objetos do browser
Window;
Document;
HTMLAllCollection;
NodeList;
History;

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
// Chrome Existe = webkitVisibilityState
// Firefox Não Existe = webkitVisibilityState

// Chrome Existe = webkitHidden
// Firefox Não Existe = webkitHidden

if (typeof document.webkitVisibilityState !== "Undefined") {
  console.log("Existe");
} else {
  console.log("Não Existe");
}

if (typeof document.webkitHidden !== "Undefined") {
  console.log("Existe");
} else {
  console.log("Não Existe");
}
