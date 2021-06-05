// variables
const btnEnviar = document.querySelector('#enviar');


// Eventos
eventsListeners();
function eventsListeners(){
        document.addEventListener('DOMContentLoaded', iniciarApp);
}


// Funciones
function iniciarApp() {
        btnEnviar.disabled = true;
        btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}