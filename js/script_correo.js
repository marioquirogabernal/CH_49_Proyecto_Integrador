const txtNombre = document.getElementById("txtNombre")
const txtCorreo = document.getElementById("txtCorreo")
const txtTelefono = document.getElementById("txtTelefono")
const txtMensaje = document.getElementById("txtMensaje")
const btnEnviarCorreo = document.getElementById("btnEnviarCorreo")
const formulario = document.getElementById("miFormulario");

function validarNombre(){
    //Aqui poner las validaciones de Nombre
    return true
}
function validarCorreo(){
    //Aqui poner las validaciones de Correo
    return true
}
function validarTelefono(){
    //Aqui poner las validaciones de Telefono
    return true
}
function validarMensaje(){
    //Aqui poner las validaciones del Mensaje
    return true
}   

btnEnviarCorreo.addEventListener("click", (event) =>{
    let nombre = validarNombre()
    let correo = validarCorreo()
    let telefono = validarTelefono()
    let mensaje = validarMensaje()
    event.preventDefault();
    

    if (nombre && correo && telefono && mensaje) {
        console.log("enviando correo")
        formulario.submit(); // Enviar el formulario si todo está validado
    }
})