// variables
const btnEnviar = document.querySelector('#enviar');

const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');


// Eventos
eventsListeners();
function eventsListeners(){

        // Cuando la app se carga ...
        document.addEventListener('DOMContentLoaded', iniciarApp);

        // Campos del formulario
        email.addEventListener('blur', validarFormulario);
        asunto.addEventListener('blur', validarFormulario);
        mensaje.addEventListener('blur', validarFormulario);
}


// Funciones
function iniciarApp() {
        btnEnviar.disabled = true;
        btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

// validar formulario
function validarFormulario(e) {
        if(e.target.value.length > 0){
                console.log('si hay algo');
        }else{
                e.target.classList.add('border', 'border-red-500');
        }
}