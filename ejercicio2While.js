//2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.
let numero1 = parseInt(prompt("ingrese un numero de 1 a 50"))
let numero2 = parseInt(prompt("ingrese otro de 1 a 50"))

let i = 0;

while (i <= 50) {
    if (i === numero1 || i === numero2) {
        console.log(i + " ¡Lotería!");
    } else {
        console.log(i);
    }
    i++;
}