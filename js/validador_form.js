document.addEventListener("DOMContentLoaded", ()=>{
    formValidatorInit();
});

function formValidatorInit(){
    const txtNombre = document.getElementById("nombre");
    const txtCorreo = document.getElementById("email");
    const txtTelefono = document.getElementById("telefono");
    const txtMensaje = document.getElementById("mensaje");
    const btnProcesar = document.getElementById("btnProcesar");

    const isEmpty = /^\s*$/; 

    btnProcesar.addEventListener("click", ()=>{
        let hasErrors = false;

        if(isEmpty.test(txtNombre.value)) {
            alert("Error: El nombre es requerido");
            hasErrors = true;
        }

        if(isEmpty.test(txtCorreo.value)) {
            alert("Error: El correo electrónico es requerido");
            hasErrors = true;
        }

        if(isEmpty.test(txtTelefono.value)) {
            alert("Error: El teléfono es requerido");
            hasErrors = true;
        }
        if(isEmpty.test(txtMensaje.value)){
            alert("Error: El mensaje es requerido");
            hasErrors = true;
        }

        if(!hasErrors){
        alert("¡Gracias por tu solicitud, " + txtNombre.value + "! Nos pondremos en contacto pronto.");
        }
    });
}