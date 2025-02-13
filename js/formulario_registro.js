//const URL_BASE = "http://localhost:8080/api/usuarios/";
const URL_BASE = "http://3.145.32.161:80/api/usuarios/";


const txtName = document.getElementById('txtName');
const txtTel = document.getElementById('txtTel');
const txtEmail = document.getElementById('txtEmail');
const txtContraseña = document.getElementById('txtContraseña');
const txtConfirmarContraseña = document.getElementById('txtConfirmarContraseña');

const registro = document.getElementById(`formularioregistro`);

//Alertas bootstrap 
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

function validarNombre() {
    const name = txtName.value.trim();
    const reGex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ'-]{3,}(?:\s[A-Za-zÁÉÍÓÚáéíóúÑñ'-]+)*$/;
    return reGex.test(name);
}


function validarNumeroCelular() {
    const numero = txtTel.value.trim();
    const regex = /^[1-9][0-9]{9}$/; // Solo números, 10 dígitos
    return regex.test(numero);
}//Validar numero


function validarEmailUnico() {
    const email = txtEmail.value.trim();
    const regex = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
    if (!regex.test(email)) {
        return "Correo no válido";
    }

    return "";
}




function validarContraseñaCompleta() {
    const contraseña = txtContraseña.value.trim();
    const confirmarContraseña = txtConfirmarContraseña.value.trim();

    if (contraseña.length < 8) {
        return "La contraseña debe tener mínimo 8 caracteres";
    }

    if (contraseña !== confirmarContraseña) {
        return "Las contraseñas deben ser iguales.";
    }

    return ""; // Sin errores
}

// Evento de validación en tiempo real
function validarYActualizarContraseñas() {
    const error = validarContraseñaCompleta();

    if (error) {
        txtContraseña.classList.add("is-invalid");
        txtConfirmarContraseña.classList.add("is-invalid");
        document.getElementById("errorContraseña").textContent = error;
        document.getElementById("errorConfirmarContraseña").textContent = error;
    } else {
        txtContraseña.classList.remove("is-invalid");
        txtConfirmarContraseña.classList.remove("is-invalid");
        document.getElementById("errorContraseña").textContent = "";
        document.getElementById("errorConfirmarContraseña").textContent = "";
    }
}

registro.addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = true;

    // Reiniciar estilos y mensajes previos
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";

    document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
    document.querySelectorAll('.invalid-feedback').forEach(el => el.textContent = '');

    // Validación de nombre
    if (!validarNombre()) {
        txtName.classList.add("is-invalid");
        document.getElementById("errorNombre").textContent = "El nombre no es válido";
        isValid = false;
    }

    // Validación de teléfono
    if (!validarNumeroCelular()) {
        txtTel.classList.add("is-invalid");
        document.getElementById("errorTelefono").textContent = "Teléfono no válido";
        isValid = false;
    }

    // Validación de email
    // Validación de email
    const mensajeErrorEmail = validarEmailUnico();
    if (mensajeErrorEmail) {
        txtEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = mensajeErrorEmail;
        isValid = false;
    }


    // Validación de contraseñas
    const errorContraseña = validarContraseñaCompleta();

    if (errorContraseña) {
        txtContraseña.classList.add("is-invalid");
        txtConfirmarContraseña.classList.add("is-invalid");
        document.getElementById("errorContraseña").textContent = errorContraseña;
        document.getElementById("errorConfirmarContraseña").textContent = errorContraseña;
        isValid = false;
    } else {
        txtContraseña.classList.remove("is-invalid");
        txtConfirmarContraseña.classList.remove("is-invalid");
        document.getElementById("errorContraseña").textContent = "";
        document.getElementById("errorConfirmarContraseña").textContent = "";
    }


    // Si todo está bien, registrar usuario
    if (isValid) {

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const usuario = JSON.stringify({
            "email": txtEmail.value,
            "password": txtContraseña.value,
            "nombre": txtName.value,
            "telefono": txtTel.value,
            "tipo": "cliente"
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: usuario,
            redirect: "follow"
        };

        fetch(URL_BASE, requestOptions)
            .then((response) => response.json())
            .then((result) => {

                // Extraemos solo los datos necesarios (sin password)
                const usuarioSinPassword = {
                    id: result.id,
                    nombre: result.nombre,
                    telefono: result.telefono,
                    email: result.email,
                    tipo: result.tipo
                };

              // Guardar en sessionStorage sin la contraseña
              //  localStorage.setItem('user', JSON.stringify(usuarioSinPassword));

                Swal.fire({
                    title: `¡Bienvenido!`, 
                    text: 'Estamos felices de tenerte con nosotros. ¡Disfruta de tu experiencia!',
                    icon: 'success',
                    confirmButtonText: '¡Gracias!'
                }).then(() => {
                    // Después de cerrar la alerta, redirige al usuario
                    window.location.href = `./login.html`;
                });
            })
            .catch((error) => {
                //.error(error); 
                txtEmail.value = "";
                txtEmail.focus();

                Swal.fire({
                    title: 'Error',
                    text: 'Hubo un problema al registrar tu cuenta. Inténtalo más tarde o utiliza un correo diferente.',
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                });
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


//Eventos input para validación en tiempo real
txtName.addEventListener("input", () => validarCampo(txtName, validarNombre, "errorNombre", "El nombre no es válido"));
txtTel.addEventListener("input", () => validarCampo(txtTel, validarNumeroCelular, "errorTelefono", "Teléfono no válido"));
txtContraseña.addEventListener("input", validarYActualizarContraseñas);
txtConfirmarContraseña.addEventListener("input", validarYActualizarContraseñas);
// Evento de validación en tiempo real del email
txtEmail.addEventListener("input", () => {
    const mensajeError = validarEmailUnico();
    if (mensajeError) {
        txtEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = mensajeError;
    } else {
        txtEmail.classList.remove("is-invalid");
        document.getElementById("errorEmail").textContent = "";
    }
});


// Función para alternar la visibilidad de la contraseña
function muestraContraseña(inputId, toggleId) {
    const passwordInput = document.getElementById(inputId);
    const toggleIcon = document.getElementById(toggleId);

    toggleIcon.addEventListener('click', function () {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleIcon.innerHTML = '<i class="fas fa-eye-slash"></i>';
        } else {
            passwordInput.type = 'password';
            toggleIcon.innerHTML = '<i class="fas fa-eye"></i>';
        }
    });
}

// Aplicar la función a ambos campos de contraseña
muestraContraseña('txtContraseña', 'togglePassword');
muestraContraseña('txtConfirmarContraseña', 'toggleConfirmPassword');