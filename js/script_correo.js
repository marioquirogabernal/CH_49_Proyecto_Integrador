const txtNombre = document.getElementById("txtNombre")
const txtEmail = document.getElementById("txtEmail")
const txtTelefono = document.getElementById("txtTelefono")
const txtMensaje = document.getElementById("txtMensaje")
const btnEnviarCorreo = document.getElementById("btnEnviarCorreo")
const formulario = document.getElementById("miFormulario");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

function validarNombre(){
    //Aqui poner las validaciones de Nombre
    return true
}

function validarEmail() {
    const email = txtEmail.value.trim();
    const regex = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
    return regex.test(email);
}


function validarTelefono(){
    if(txtTelefono.length<=0){
        return false;
    }
    return true;
}

btnTelefono.addEventListener("click", function(event){
    event.preventDefault();
    let isValid=true;
    txtTelefono.value = txtTelefono.value.trim();
    txtTelefono.style.border = "";

      if(txtTelefono.value.length<8){
        txtTelefono.style.border=" solid red medium";
        alertValidacionesTexto.innerHTML="<strong>Introduzca un numero de telefono valido</strong>";
        alertValidaciones.style.display="block";
        isValid=false
    }
    if(Number(txtTelefono.value)<=99999){
        txtTelefono.style.border=" solid red medium";
        alertValidacionesTexto.innerHTML="<strong>Introduzca un numero de telefono valido</strong>";
        alertValidaciones.style.display="block";
        isValid=false
    
    }
    if(txtTelefono.value.length>15){
        txtTelefono.style.border=" solid red medium";
        alertValidacionesTexto.innerHTML="<strong>Introduzca un numero de telefono valido</strong>";
        alertValidaciones.style.display="block";
        isValid=false
    }
    else{
        localStorage.setItem("Telefono", txtTelefono.value);
    }

    txtTelefono.value="";
    txtTelefono.focus();
});


function validarMensaje(){
    //Aqui poner las validaciones del Mensaje
    return true
}   

btnEnviarCorreo.addEventListener("click", (event) =>{
    event.preventDefault();

    let isValid = true;
    txtEmail.style.border = "";
    txtEmail.value = txtEmail.value.trim();;
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";

    if (!validarEmail()) { // si regresa false
        txtEmail.style.border = "solid red medium";
        alertValidacionesTexto.innerHTML += "<br/><strong>El email es invalido</strong>";

        alertValidaciones.style.display = "block";
        isValid = false; //bandera
    }//!validarEmail


    if (validarEmail() && correo && telefono && mensaje) {
        console.log("enviando correo")
        formulario.submit(); // Enviar el formulario si todo está validado
    }


})