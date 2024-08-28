//5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.

let dia = ""; 

while (dia !== 'domingo') {

    dia = prompt("Introduce un día de la semana (escribe 'domingo' para terminar):").toLowerCase();
    
    
    switch (dia) {
        case 'lunes':
            alert("Comienza la semana con energía!");
            break;
        case 'martes':
            alert("Martes, ¡a seguir trabajando!");
            break;
        case 'miércoles':
            alert("Miércoles, ya casi es fin de semana!");
            break;
        case 'jueves':
            alert("Jueves, ¡ya está cerca el viernes!");
            break;
        case 'viernes':
            alert("¡Es viernes! Prepárate para el fin de semana.");
            break;
        case 'sábado':
            alert("Sábado, disfruta de tu día libre!");
            break;
        case 'domingo':
            alert("Ve a descansar");
            break;
        default:
            alert("Por favor, introduce un día válido de la semana.");
    }
}
