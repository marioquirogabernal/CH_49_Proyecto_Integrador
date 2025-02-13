//const URL_BASE = "http://localhost:8080/api/login/";
const URL_BASE = "http://3.145.32.161:80/api/login/";

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

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "email": emailIngresado,
        "password": contraseñaIngresada
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };


    fetch(URL_BASE, requestOptions)
        .then((response) => response.json())
        .then((data) => {
            if (data.accessToken) {
                localStorage.setItem('Authorization', `Bearer: ${data.accessToken}`);

                const usuario = {
                    id: data.usuario.id,
                    nombre: data.usuario.nombre,
                    telefono: data.usuario.telefono,
                    email: data.usuario.email,
                    tipo: data.usuario.tipo,
                };
                localStorage.setItem('user', JSON.stringify(usuario));

                Swal.fire({
                    title: `¡Bienvenido nuevamente, ${data.usuario.nombre}!`,
                    text: 'Inicio de sesión exitoso',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                }).then(() => {
                    window.location.href = "../index.html";
                });
            } else {
                throw new Error('Correo o contraseña incorrectos');
            }
        })
        .catch((error) => {
            Swal.fire({
                title: 'Error',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Intentar de nuevo'
            }).then(() => {
                txtEmail.value = '';
                txtContraseña.value = '';
                txtEmail.focus();
            });
        });

});