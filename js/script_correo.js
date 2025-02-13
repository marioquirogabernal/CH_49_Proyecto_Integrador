const txtNombre = document.getElementById("txtNombre");
const txtEmail = document.getElementById("txtEmail");
const txtTelefono = document.getElementById("txtTelefono");
const txtMensaje = document.getElementById("txtMensaje");
const btnEnviarCorreo = document.getElementById("btnEnviarCorreo");

const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const registro = document.getElementById(`formularioregistro`);

// Creación de función validar nombre.
function validarName() {
    const name = txtNombre.value.trim();
    const reGex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ _-]{3,}$/;
    return reGex.test(name);
} // función validarName



// Creación de función validar email.
function validarEmail() {
    const email = txtEmail.value.trim();
    const regex = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
    return regex.test(email);
}



// Creación de función validar teléfono.
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
    let regex = /^.{3,}$/; // Al menos 3 caracteres de cualquier tipo
    return regex.test(mensaje);
} // validación de mensajes






async function enviarCorreo(subjectAPI, asuntoAPI, MensajeAPI, emailDestinatario) {
    try {
        const response = await fetch("https://cors-anywhere.herokuapp.com/https://api.mailersend.com/v1/email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer ",
            },
            body: JSON.stringify({
                from: {
                    email: "",
                },
                to: [
                    {
                        email: emailDestinatario, // Correo al cual se le va a enviar
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
                template_id: "", // ID la plantilla
            }),
        });
    } catch (error) {
        console.error("Error:", error);
        alert("Ocurrió un error al enviar el correo");
    }
}



registro.addEventListener('submit', function (event) {
//btnEnviarCorreo.addEventListener("click", (event) => {
    event.preventDefault();
    let isValid = true;

    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";

    // Limpiar los mensajes de error
    document.querySelectorAll('.invalid-feedback').forEach(el => el.textContent = "");

    // Limpiar las clases de error
    txtEmail.classList.remove("is-invalid");
    txtNombre.classList.remove("is-invalid");
    txtTelefono.classList.remove("is-invalid");
    txtMensaje.classList.remove("is-invalid");

    txtEmail.value = txtEmail.value.trim();
    txtNombre.value = txtNombre.value.trim();
    txtTelefono.value = txtTelefono.value.trim();
    txtMensaje.value = txtMensaje.value.trim();

    // Validar nombre
    if (!validarName()) {
        txtNombre.classList.add("is-invalid");
        document.getElementById("errorNombre").textContent = "El nombre no es válido";
        isValid = false;
    }

    // Validar email
    if (!validarEmail()) {
        txtEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "El email no es válido";
        isValid = false;
    }

    // Validar teléfono
    if (!validarTelefono()) {
        txtTelefono.classList.add("is-invalid");
        document.getElementById("errorTelefono").textContent = "El teléfono no es válido";
        isValid = false;
    }

    // Validar mensaje
    if (!validarMensaje()) {
        txtMensaje.classList.add("is-invalid");
        document.getElementById("errorMensaje").textContent = "El mensaje debe contener al menos 3 caracteres";
        isValid = false;
    }

    // Si la validación es exitosa, enviar los correos
    if (isValid) {

        // La función está deshabilitada debido a que hay un problema de cors 
        //También se debe de implementar el dotenv para ocultar las contraseñas del codigo

        /* 
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
 */

        // Aquí se muestra el mensaje con SweetAlert2
        Swal.fire({
            title: '¡Gracias por contactarnos!',
            text: 'Pronto recibirás un correo electrónico de nosotros.',
            icon: 'success',
            confirmButtonText: 'Cerrar'
        }).then(() => {
            // Limpiar los campos del formulario después de la alerta
            txtNombre.value = "";
            txtEmail.value = "";
            txtTelefono.value = "";
            txtMensaje.value = "";

            // Eliminar los estilos de error
            txtNombre.classList.remove("is-invalid");
            txtEmail.classList.remove("is-invalid");
            txtTelefono.classList.remove("is-invalid");
            txtMensaje.classList.remove("is-invalid");
        });
    }
});


// Función genérica para manejar la validación en tiempo real
function validarCampo(input, funcionValidacion, errorId, mensajeError) {
    if (funcionValidacion()) {
        input.classList.remove("is-invalid");
        document.getElementById(errorId).textContent = "";
    } else {
        input.classList.add("is-invalid");
        document.getElementById(errorId).textContent = mensajeError;
    }
}

txtNombre.addEventListener("input", () => validarCampo(txtNombre, validarName, "errorNombre", "El nombre no es válido"));
txtTelefono.addEventListener("input", () => validarCampo(txtTelefono, validarTelefono, "errorTelefono", "Teléfono no válido"));
txtMensaje.addEventListener("input", () => validarCampo(txtMensaje, validarMensaje, "errorMensaje", "El mensaje debe contener al menos 3 caracteres"));
txtEmail.addEventListener("input", () => validarCampo(txtEmail, validarEmail, "errorEmail", "El email no es válido"));


