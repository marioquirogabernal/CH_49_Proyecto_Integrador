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

registro.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let isValid = true;

    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";
    
    txtName.style.border = "";
    txtName.value = txtName.value.trim();

    txtTel.style.border = "";
    txtTel.value = txtTel.value.trim();
    
    txtEmail.style.border = "";
    txtEmail.value = txtEmail.value.trim();

    txtContraseña.style.border = "";
    txtContraseña.value = txtContraseña.value.trim();

    txtConfirmarContraseña.style.border = "";
    txtConfirmarContraseña.value = txtConfirmarContraseña.value.trim();
    
    if(!validarNombre()){
        txtName.style.border = "solid red medium";
        alertValidacionesTexto.innerHTML += "<br/> <strong>El nombre no es válido</strong>";
        alertValidaciones.style.display = "block";
        isValid = false
    }
    if(!validarNumeroCelular()){
        txtTel.style.border = "solid red medium";
        alertValidacionesTexto.innerHTML += "<br/> <strong>Teléfono no válido</strong>";
        alertValidaciones.style.display = "block";
        isValid = false
    }
    if(!validarEmail()){
        txtEmail.style.border = "solid red medium";
        alertValidacionesTexto.innerHTML += "<br/> <strong>Correo no valido</strong>";
        alertValidaciones.style.display = "block";
        isValid = false
    }
    if(!validarContraseña()){
        txtConfirmarContraseña.style.border = "solid red medium";
        alertValidacionesTexto.innerHTML += "<br/> <strong>Las contraseñas deben ser iguales</strong>";
        alertValidaciones.style.display = "block";
        isValid = false
    }

    
    if(isValid){
        const name = txtName.value;
        const phone = txtTel.value;
        const Email = txtEmail.value;
        const pass =txtContraseña.value;
    
        //añade usuarios a local storage
        const usuario = {
            nombre : name,
            telefono: phone,
            email : Email,
            password : pass
        };
        datos.push(usuario);// añade al array
        localStorage.setItem("datos", JSON.stringify(datos));//añade al local storage

        sessionStorage.setItem("user", Email);

        window.location.href = `./index.html`; 

    }
    

});
