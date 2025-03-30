const numeroAzar = Math.floor(Math.random() * 100) + 1
const mensaje = document.getElementById('mensaje')
let numeroEntrada = document.getElementById('numeroEntrada');
let intentos = 0
document.getElementById('intentos').innerHTML = intentos

// Funcion para comprobar el resultado
function comprobarResultado(){
    let valor = parseInt(numeroEntrada.value)
    
    if (isNaN(valor) || valor < 1 || valor > 100) {
        mensaje.textContent = 'Por favor, introduce un número válido entre 1 y 100.';
        return;
    }

    if (valor === numeroAzar) {
        mensaje.textContent = '¡Felicidades! ¡Has adivinado el número correcto!';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
    } else if (valor < numeroAzar) {
        mensaje.textContent = 'El número es mayor. Intenta de nuevo.';
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = 'El número es menor. Intenta de nuevo.';
        mensaje.style.color = 'red';
    }
    intentos ++;
    document.getElementById('intentos').innerHTML = intentos
}