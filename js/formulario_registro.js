const txtName = document.getElementById('txtName');
const txtTel = document.getElementById('txtTel');
const txtEmail = document.getElementById('txtEmail');
const txtContraseña = document.getElementById('txtContraseña');
const txtConfirmarContraseña = document.getElementById('txtConfirmarContraseña');


let datos = JSON.parse(localStorage.getItem('datos')) || [];//añade o continua una array


const registro = document.getElementById(`formularioregistro`);

//Alertas bootstrap 
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

function validarNombre(){
    const name = txtName.value.trim();
    const reGex = /^[A-Za-z _-]{3,40}$/;
    return reGex.test(name);
}//Validar nombre

function validarNumeroCelular() {
    const numero = txtTel.value.trim();
    const regex = /^[1-9][0-9]{9}$/; // Solo números, 10 dígitos
    return regex.test(numero);
}//Validar numero

function validarEmail() {
    const email = txtEmail.value.trim();
    const regex = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
    return regex.test(email);
}//validar email

function validarContraseña(){
    if(txtContraseña.value === txtConfirmarContraseña.value){
        return true;
    }
    return false;
}

function validarContraseña2() {
    // Obtener los valores de las contraseñas
    const contraseña = txtContraseña.value;
    const confirmarContraseña = txtConfirmarContraseña.value;

    // Verificar que las contraseñas no estén vacías
    if (contraseña === "" || confirmarContraseña === "") {
        return false;
    }

    // Verificar que las contraseñas tengan al menos 8 caracteres
    if (contraseña.length < 8 || confirmarContraseña.length < 8) {
        return false;
    }

    // Si todas las condiciones se cumplen
    return true;
}



registro.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let isValid = true;

    // Reiniciar estilos y mensajes previos
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";

    document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
    document.querySelectorAll('.invalid-feedback').forEach(el => el.textContent = '');

    // Validación de nombre
    if(!validarNombre()){
        txtName.classList.add("is-invalid");
        document.getElementById("errorNombre").textContent = "El nombre no es válido";
        isValid = false;
    }

    // Validación de teléfono
    if(!validarNumeroCelular()){
        txtTel.classList.add("is-invalid");
        document.getElementById("errorTelefono").textContent = "Teléfono no válido";
        isValid = false;
    }

    // Validación de email
    if(!validarEmail()){
        txtEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "Correo no válido";
        isValid = false;
    }

    // Validación de contraseñas
    if(!validarContraseña()){
        txtConfirmarContraseña.classList.add("is-invalid");
        document.getElementById("errorConfirmarContraseña").textContent = "Las contraseñas deben ser iguales";
        isValid = false;
    }

    if(!validarContraseña2()){
        txtContraseña.classList.add("is-invalid");
        txtConfirmarContraseña.classList.add("is-invalid");
        document.getElementById("errorContraseña").textContent = "La contraseña debe tener al menos 8 caracteres";
        document.getElementById("errorConfirmarContraseña").textContent = "La contraseña debe tener al menos 8 caracteres";
        isValid = false;
    }

    // Si todo está bien, registrar usuario
    if(isValid){
        const usuario = {
            nombre: txtName.value,
            telefono: txtTel.value,
            email: txtEmail.value,
            password: txtContraseña.value
        };

        datos.push(usuario);
        localStorage.setItem("datos", JSON.stringify(datos));
        sessionStorage.setItem("user", usuario.email);
        window.location.href = `./index.html`; 
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
txtEmail.addEventListener("input", () => validarCampo(txtEmail, validarEmail, "errorEmail", "Correo no válido"));
txtContraseña.addEventListener("input", () => validarCampo(txtContraseña, validarContraseña2, "errorContraseña", "La contraseña debe tener al menos 8 caracteres"));
txtConfirmarContraseña.addEventListener("input", () => validarCampo(txtConfirmarContraseña, validarContraseña, "errorConfirmarContraseña", "Las contraseñas deben ser iguales"));
