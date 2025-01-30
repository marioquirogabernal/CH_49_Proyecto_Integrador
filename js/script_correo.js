const txtNombre = document.getElementById("txtNombre")
const txtEmail = document.getElementById("txtEmail")
const txtTelefono = document.getElementById("txtTelefono")
const txtMensaje = document.getElementById("txtMensaje")
const btnEnviarCorreo = document.getElementById("btnEnviarCorreo");
//const formulario = document.getElementById("miFormulario");

const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

//Creacion de funcion validar nombre.
function validarName(){
    const name = txtNombre.value.trim();
    const reGex = /^[A-Za-z _-]{3,25}$/;
    return reGex.test(name);
}//funcionValidarName


//Creacion de funcion validar email.
function validarEmail() {
    const email = txtEmail.value.trim();
    const regex = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
    return regex.test(email);
}

//Creacion de funcion validar telefono.
function validarTelefono() {
    const telefono = txtTelefono.value.trim();
    const regexTelefono = /^[1-9][0-9]{9}$/; // Solo números, 10 dígitos

    if (telefono === "") {
        return false; // El campo está vacío
    }

    if (!regexTelefono.test(telefono)) {
        return false; // No cumple con el formato de 10 dígitos
    }

    return true; // El número es válido
}


function validarMensaje() {
    let mensaje = txtMensaje.value.trim();
    let regex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ _-]{3,300}$/;
    return regex.test(mensaje);
}//validación de mensajes


async function enviarCorreo(subjectAPI,asuntoAPI, MensajeAPI, emailDestinatario) {
    try {
        const response = await fetch("https://cors-anywhere.herokuapp.com/https://api.mailersend.com/v1/email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer mlsn.34b759039b519a98f11af28dc6ea67fabd41da3bb28b6505b92ad659b86005b4",
            },
            body: JSON.stringify({
                from: {
                    email: "TECHNOLOGY_SHOP@trial-pxkjn41e1kplz781.mlsender.net",
                },
                to: [
                    {
                        email: emailDestinatario, //Correo al cual se le va a enviar
                    },
                ],
                subject: subjectAPI, // Asunto del correo
                personalization: [
                    {
                        email: emailDestinatario,
                        data: {
                            asunto: asuntoAPI, // Personalización del asunto
                            mensaje: MensajeAPI, // Mensaje a enviar
                        },
                    },
                ],
                template_id: "neqvygmm8kdg0p7w", // ID la plantilla
            }),
        });
  
    } catch (error) {
        console.error("Error:", error);
        alert("Ocurrió un error al enviar el correo");
    }
  }



btnEnviarCorreo.addEventListener("click", (event) =>{
    event.preventDefault();
    let isValid = true;
    

    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";

    txtEmail.style.border = "";
    txtEmail.value = txtEmail.value.trim();

    txtNombre.style.border = "";
    txtNombre.value = txtNombre.value.trim();

    txtTelefono.value = txtTelefono.value.trim();
    txtTelefono.style.border = "";

    txtMensaje.style.border = "";
    txtMensaje.value = txtMensaje.value.trim();
    

    if(!validarName()){
        txtNombre.style.border = "solid red medium";
        alertValidacionesTexto.innerHTML += "<br/> <strong>El nombre no es válido</strong>";
        alertValidaciones.style.display = "block";
        isValid = false
    }

    if (!validarEmail()) { // si regresa false
        txtEmail.style.border = "solid red medium";
        alertValidacionesTexto.innerHTML += "<br/><strong>El email no es válido</strong>";
        alertValidaciones.style.display = "block";
        isValid = false; //bandera
    }//!validarEmail


    if (!validarTelefono()) { // si regresa false la validacion de telefono
        txtTelefono.style.border = "solid red medium";
        alertValidacionesTexto.innerHTML += "<br/><strong>El teléfono no es válido</strong>";
        alertValidaciones.style.display = "block";
        isValid = false; //bandera
    }//!validarTelefono

    if(!validarMensaje()){
        txtMensaje.style.border = "solid red medium";
        alertValidacionesTexto.innerHTML += "<br/><strong>Mensaje no válido</strong>";
        alertValidaciones.style.display = "block";
        isValid = false;
    }//Validación del mensaje

    if (isValid) {
        
        enviarCorreo(`
            ${txtNombre.value}, gracias por ponerte en contacto con TECHNOLOGY-SHOP`, 

            "¡Gracias por ponerte en contacto con nosotros!",

            `${txtNombre.value}, queremos agradecerte por haberte tomado el tiempo. 
                            
                            Hemos recibido la información que nos has proporcionado y la estamos revisando. 
                            Nuestro equipo se pondrá en contacto contigo lo más pronto posible.
                            
                            ¡Gracias por confiar en nosotros!
                    
                            Atentamente,  
                            El equipo de Technology-Shop.`,

            txtEmail.value.trim()
        );

        enviarCorreo(`
            Mensaje de Contacto de ${txtNombre.value}`, 

            "Solicitud de contactar",

            `Nombre: ${txtNombre.value}, 
             Email: ${txtEmail.value}, 
             Teléfono: ${txtTelefono.value}, 
             Mensaje: ${txtMensaje.value}, 
            `,

            "adrianmtcl4@gmail.com"

        );




    
        // Aquí se muestra el mensaje con SweetAlert2
        Swal.fire({
            title: '¡Gracias por contactarnos!',
            text: 'Pronto recibirás un correo electrónico de nosotros.',
            icon: 'success',
            confirmButtonText: 'Cerrar'
        });
    }

})