// Llenar el dropdown de años desde el actual hasta 50 años posteriores
const yearSelect = document.getElementById('expYear');
const currentYear = new Date().getFullYear();
const txtName = document.getElementById('txtName');
const expMonth = document.getElementById('expMonth');//MES
const expYear = document.getElementById('expYear');//AÑO
const cvv = document.getElementById('cvv');//cvv
const pagoForm = document.getElementById('pagoForm');//pagoForm
const cardnumber = document.getElementById('cardnumber');//cvv


for (let i = 0; i <= 25; i++) {
    let year = currentYear + i;
    let option = document.createElement('option');
    option.value = year.toString().slice(-2);
    option.textContent = year;
    yearSelect.appendChild(option);
}


function validarNombre() {
    const name = txtName.value.trim();
    const reGex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ'-]{3,}(?:\s[A-Za-zÁÉÍÓÚáéíóúÑñ'-]+)*$/;
    return reGex.test(name);
}


function validarCard() {
    //Elimina espacios en blanco del número de la tarjeta.
    const cardNumber = cardnumber.value.replace(/\s+/g, ""); 

    // La expresión regular /^\d+$/ verifica si el número de tarjeta contiene solo dígitos (0-9).
    if (!/^\d+$/.test(cardNumber)) return false;

    const cardTypes = {
        "visa": { prefix: /^4/, length: [13, 16, 19] }, // Visa comienza con '4' y puede tener 13, 16 o 19 dígitos.
        "mastercard": { prefix: /^5[1-5]/, length: [16] }, // MasterCard comienza con '5' (y 51-55) y tiene 16 dígitos.
        "amex": { prefix: /^3[47]/, length: [15] }, // American Express comienza con '34' o '37' y tiene 15 dígitos.
        "discover": { prefix: /^6(?:011|5)/, length: [16] } // Discover comienza con '6011' o '65' y tiene 16 dígitos.
    };

    // Valida el tipo de tarjeta y longitud.
    // Se recorre cada tipo de tarjeta definido en 'cardTypes'.
    // Si el número de la tarjeta empieza con el prefijo correcto y tiene una longitud válida, 
    // se pasa a validar la tarjeta con el algoritmo de Luhn.
    for (const type in cardTypes) {
        const { prefix, length } = cardTypes[type];
        if (prefix.test(cardNumber) && length.includes(cardNumber.length)) {
            return validarLuhn(cardNumber); // Si pasa la validación, se valida con Luhn.
        }
    }

    return false;
}


// Algoritmo de Luhn para validar el número de tarjeta
function validarLuhn(numero) {
    let suma = 0;
    let alternar = false;
    for (let i = numero.length - 1; i >= 0; i--) {
        let digito = parseInt(numero[i], 10);
        if (alternar) {
            digito *= 2;
            if (digito > 9) digito -= 9;
        }
        suma += digito;
        alternar = !alternar;
    }
    return suma % 10 === 0;
}





function validarMes() {
    return expMonth.value !== ""; // Validar que el mes no esté vacío
} // Validar mes

function validarYear() {
    return expYear.value !== ""; // Validar que el año no esté vacío
} // Validar mes


function validarCVV() {
    const vcvv = cvv.value.trim();
    const reGex = /^[0-9]{3,4}$/;  // Validar solo números de 3 o 4 dígitos
    return reGex.test(vcvv);
}



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



  pagoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = true;

    document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
    document.querySelectorAll('.invalid-feedback').forEach(el => el.textContent = '');

    // Validación de nombre
    if (!validarNombre()) {
        txtName.classList.add("is-invalid");
        document.getElementById("errorNombre").textContent = "El nombre no es válido";
        isValid = false;
    }
  


   // Validación de mes
   if (!validarMes()) {
    expMonth.classList.add("is-invalid");
    document.getElementById("errorMes").textContent = "Selecciona un mes";
    isValid = false;
}


 // Validación de año
 if (!validarYear()) {
    expYear.classList.add("is-invalid");
    document.getElementById("errorYear").textContent = "Selecciona un año";
    isValid = false;
}


 // Validación de cvv
 if (!validarCVV()) {
    cvv.classList.add("is-invalid");
    document.getElementById("errorCVV").textContent = "CVV no válido";
    isValid = false;
}


 // Validación de tarjeta
 if (!validarCard()) {
    cardnumber.classList.add("is-invalid");
    document.getElementById("errorTarjeta").textContent = "Tarjeta no válida";
    isValid = false;
}




});





txtName.addEventListener("input", () => validarCampo(txtName, validarNombre, "errorNombre", "El nombre no es válido"));

cardnumber.addEventListener("input", () => validarCampo(cardnumber, validarCard, "errorTarjeta", "Tarjeta no válida"));


// Validación en tiempo real para el mes
expMonth.addEventListener("change", () => {
    validarCampo(expMonth, validarMes, "errorMes", "Selecciona un mes");
  });

// Validación en tiempo real para el año
expYear.addEventListener("change", () => {
    validarCampo(expYear, validarYear, "errorYear", "Selecciona un año");
  });
  

cvv.addEventListener("input", () => validarCampo(cvv, validarCVV, "errorCVV", "CVV no válido"));

