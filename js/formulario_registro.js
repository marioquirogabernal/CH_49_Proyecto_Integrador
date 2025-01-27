//Valiodar contraseña
let usuario = {
    nombre : '',
    telefono : '',
    email : '',
    contraseña : ''
}

//Validar numero
function validarNumeroCelular(numero) {
    const regex = /^[1-9][0-9]{9}$/; // Solo números, 10 dígitos
    return regex.test(numero);
}


const errorMessage = document.getElementById('error');
const successMessage = document.getElementById('success');


document.getElementById('formularioregistro').addEventListener('submit', function(event) {
    // Obtener usuario y crear un objeto json
    const nombre = document.getElementById('txtName').value
    const telefono = document.getElementById('txtTel').value
    const email = document.getElementById('txtEmail').value
    const password1 = document.getElementById('txtContraseña').value
    const password2 = document.getElementById('txtConfirmarContraseña').value
    if (password1 !== password2) {
        event.preventDefault(); // Evita el envío del formulario
        alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
    } else {
        usuario.contraseña = password1
    }
    event.preventDefault(); 
    usuario.nombre = nombre
    usuario.telefono = telefono
    usuario.email = email

    // Convertir el objeto en JSON
    let usuarioJSON = JSON.stringify(usuario);

    // Guardar en el Local Storage
    localStorage.setItem('usuario', usuarioJSON);

    // Causa error
    const numero = telefono.trim(); 
    console.log(numero)

    if (validarNumeroCelular(numero)) {
        usuario.telefono = telefono
    } else {
        event.preventDefault(); // Evita el envío del formulario
        alert('Numero Incorrecto');
    }
});
