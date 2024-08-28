//4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.

let palabras = [];
let entrada;

do {
    entrada = prompt("Ingresa una palabra (para terminar, solo presiona Enter):");


    if (entrada !== "") {
        palabras.push(entrada);
    }

} while (entrada !== "");

let resultado = palabras.join(" ");
console.log("Palabras capturadas:"+ resultado);

    