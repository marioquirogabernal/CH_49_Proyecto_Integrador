// Obtener los datos guardados en localStorage
const datosUsuariosLogin = JSON.parse(localStorage.getItem('datos')) || [];

// Selección de elementos del formulario
const txtEmail = document.getElementById('txtEmail');
const txtContraseña = document.getElementById('txtContraseña');
const login = document.getElementById('formularioLogin');

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

// Aplicar la función a los campos de contraseña
muestraContraseña('txtContraseña', 'togglePassword');



// Evento de envío del formulario de login
login.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailIngresado = txtEmail.value.trim();
    const contraseñaIngresada = txtContraseña.value.trim();

    // Verificar si los datos existen en el almacenamiento
    const usuarioEncontrado = datosUsuariosLogin.find(user => user.email === emailIngresado && user.password === contraseñaIngresada);

    if (usuarioEncontrado) {
        sessionStorage.setItem('user', JSON.stringify(usuarioEncontrado));

        Swal.fire({
            title: `¡Bienvenido nuevamente, ${usuarioEncontrado.nombre}!`,
            text: 'Inicio de sesión exitoso',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        }).then(() => {
            window.location.href = "./index.html";
        });
    } else {
        Swal.fire({
            title: 'Error',
            text: 'Correo o contraseña incorrectos',
            icon: 'error',
            confirmButtonText: 'Intentar de nuevo'
        }).then(() => {
            // Limpiar los campos después del error
            txtEmail.value = '';
            txtContraseña.value = '';
            txtEmail.focus(); // Poner el cursor en el campo de email
        });
    }
});