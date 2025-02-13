//const URL_BASE = "http://localhost:8080/api/productos/";
const URL_BASE = "http://3.145.32.161:80/api/productos/";



const productForm = document.getElementById('productForm');

const txtNombre = document.getElementById('nombreProducto');//Nombre 
const boton_subir = document.getElementById('imagenProducto');//Imagen
const txtDescripcion = document.getElementById('descripcionProducto');//Descripcion
const numPrecio = document.getElementById('precioProducto');//Precio
const categoriaProducto = document.getElementById('categoriaProducto');//Categoría
const alertValidaciones = document.getElementById("alertValidaciones");//Alerta
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");//Alerta??


const authorization = localStorage.getItem("Authorization");


window.addEventListener("load", function () {

  const  user = JSON.parse(localStorage.getItem("user"));

  if (user==null || user.tipo != "administrador") {
      Swal.fire({
          icon: "warning",
          title: "¡Atención!",
          text: "Para poder crear un productos deber ser administrador.",
          confirmButtonText: "Volver a la pagina",
          allowOutsideClick: false
      }).then(() => {
          window.location.href = "../../index.html";
      });
  }
});


boton_subir.addEventListener("click", () => {
  widget_cloudinary.open();
}, false);

let imagen;
let items = [];  // Array vacío al inicio

let widget_cloudinary = cloudinary.createUploadWidget({
  cloudName: 'dpyi3icqm',
  uploadPreset: 'preset_pabs'
}, (err, result) => {
  if (!err && result && result.event === 'success') {
    imagen = result.info.secure_url;
    document.getElementById('imagenLabel').textContent = 'Imagen subida con éxito.';
    document.getElementById('imagenPreview').src = imagen; // Actualiza la fuente de la imagen
    document.getElementById('imagenPreviewContainer').style.display = 'block'; // Muestra la vista previa
    validarImagen();
  }
});


boton_subir.addEventListener("click", () => {
    widget_cloudinary.open();
}, false);

function validarNombre() {
    const name = txtNombre.value.trim();
    let reGex = /^.{3,}$/; // Al menos 3 caracteres de cualquier tipo
    return reGex.test(name);
} // Validar nombre

function validarDescripcion() {
    let descripcion = txtDescripcion.value.trim();
    let regex = /^.{3,}$/; // Al menos 3 caracteres de cualquier tipo
    return regex.test(descripcion);
} // Validar descripción

function validarPrecio() {
    let precio = numPrecio.value.trim();
    if (precio < 0.01) {
        return false;
    }
    return true;
} // Validar precio

function validarCategoria() {
    return categoriaProducto.value !== ""; // Validar que la categoría no esté vacía
} // Validar categoría

productForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = true;

    // Reiniciar estilos y mensajes previos
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";

    document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
    document.querySelectorAll('.invalid-feedback').forEach(el => el.textContent = '');

    // Validación de nombre
    if (!validarNombre()) {
        txtNombre.classList.add("is-invalid");
        document.getElementById("errorNombre").textContent = "El nombre no es válido";
        isValid = false;
    }

    // Validación de descripción
    if (!validarDescripcion()) {
        txtDescripcion.classList.add("is-invalid");
        document.getElementById("errorDescripcion").textContent = "Inserte una descripción más larga";
        isValid = false;
    }

    // Validación de precio
    if (!validarPrecio()) {
        numPrecio.classList.add("is-invalid");
        document.getElementById("errorPrecio").textContent = "El precio debe ser mayor a 0";
        isValid = false;
    }

    // Validación de categoría
    if (!validarCategoria()) {
        categoriaProducto.classList.add("is-invalid");
        document.getElementById("errorCategoria").textContent = "Debes seleccionar una categoría";
        isValid = false;
    }

    // Validación de imagen
    if (!imagen) {
        document.getElementById("errorImagen").textContent = "No has insertado una imagen";
        document.getElementById("imagenProducto").classList.add("is-invalid");
        isValid = false;
    }

    if (isValid) {
        const myHeaders = new Headers();

          myHeaders.append("Authorization", authorization);
          myHeaders.append("Content-Type", "application/json");

          const producto = JSON.stringify({
            "nombre": txtNombre.value,
            "descripcion": txtDescripcion.value,
            "imagen": `${imagen}`,
            "precio": `${numPrecio.value}`,
            "categoria": `${categoriaProducto.value}`
          });

          const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: producto,
            redirect: "follow"
        };

          fetch(URL_BASE, requestOptions)
            .then((response) => response.text())
            .then((result) => {
              Swal.fire({
                title: 'Producto agregado correctamente',
                    text: 'El producto ha sido añadido',
                     icon: 'success',
                     confirmButtonText: 'Cerrar'
                 }).then(() => {
                     window.location.reload();
                 });
            })
            .catch((error) => console.error(error));
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


// Validación en tiempo real para el nombre
txtNombre.addEventListener("input", () => {
  validarCampo(txtNombre, validarNombre, "errorNombre", "El nombre no es válido");
});

// Validación en tiempo real para la descripción
txtDescripcion.addEventListener("input", () => {
  validarCampo(txtDescripcion, validarDescripcion, "errorDescripcion", "Inserte una descripción más larga");
});

// Validación en tiempo real para el precio
numPrecio.addEventListener("input", () => {
  validarCampo(numPrecio, validarPrecio, "errorPrecio", "El precio debe ser mayor a 0");
});

// Validación en tiempo real para la categoría
categoriaProducto.addEventListener("change", () => {
  validarCampo(categoriaProducto, validarCategoria, "errorCategoria", "Debes seleccionar una categoría");
});


// Validación de imagen en tiempo real
function validarImagen() {
  if (!imagen) {
      document.getElementById("errorImagen").textContent = "No has insertado una imagen";
      document.getElementById("imagenProducto").classList.add("is-invalid");
  } else {
      document.getElementById("errorImagen").textContent = "";
      document.getElementById("imagenProducto").classList.remove("is-invalid");
  }
}
