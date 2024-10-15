// Esto agrega el valor del boton a la pantalla
function agregar(valor) {
    document.getElementById('pantalla').value += valor;
}

// Esto borra el valor de la pantalla
function borrar() {
    document.getElementById('pantalla').value = '';

}

// Esto calcula el valor en la pantalla 
function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;
}
