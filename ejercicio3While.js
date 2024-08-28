//3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lisPta de números capturados en pantalla o en la consola.

let array = [];
let numero;

do {
    numero = parseInt(prompt("Ingresa un número (ingresa 0 para terminar):"));

    if (numero !== 0) {
        array.push(numero);
    }

} while (numero !== 0);  

console.log("Números capturados:", array);
