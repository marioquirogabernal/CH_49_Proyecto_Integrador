const productForm = document.getElementById('productForm');

const txtNombre = document.getElementById('nombreProducto');//Nombre 
const boton_subir = document.getElementById('imagenProducto');//Imagen
const txtDescripcion = document.getElementById('descripcionProducto');//Descripcion
const numPrecio = document.getElementById('precioProducto');//Precio
const alertValidaciones = document.getElementById("alertValidaciones");//Alerta
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");//Alerta??

let imagen;
let items = [];  // Array vacío al inicio


let widget_cloudinary = cloudinary.createUploadWidget({
    cloudName: 'dpyi3icqm',
    uploadPreset: 'preset_pabs'
}, (err, result) => {
    if (!err && result && result.event === 'success') {
        imagen = result.info.secure_url;
        //console.log(imagen);

        // Cambiar el texto del label para indicar que la imagen se subió con éxito
        document.getElementById('imagenLabel').textContent = 'Imagen subida con éxito.';
    }
});//Validadion de la imagen

boton_subir.addEventListener("click", () => {
    widget_cloudinary.open();
}, false);



function validarNombre(){
  const name = txtNombre.value.trim();
  const reGex = /^[A-Za-z _-]{3,40}$/;
  return reGex.test(name);
}//Validar nombre

function validarDescripcion() {
  let description = txtDescripcion.value.trim();
  let regex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ _-]{3,200}$/;
  return regex.test(description);
}//Validar descricion

function validarPrecio(){
  let precio = numPrecio.value.trim();
  if(precio<1){
    return false;
  }
  return true;
}//validar precio


productForm.addEventListener('submit', function(event) {
  event.preventDefault();
  let isValid = true;

  const name = txtNombre.value;
  const img = imagen;
  const description = txtDescripcion.value;
  const precio = precioProducto.value;

 //verificación y envio de alertas

  alertValidacionesTexto.innerHTML = "";
  alertValidaciones.style.display = "none";
  
  txtNombre.style.border = "";
  txtNombre.value = txtNombre.value.trim();

  txtDescripcion.style.border = "";
  txtDescripcion.value = txtDescripcion.value.trim();
 
  precioProducto.style.border = "";
  precioProducto.value = precioProducto.value.trim();

  if(!validarNombre()){
    txtNombre.style.border = "solid red medium";
    alertValidacionesTexto.innerHTML += "<br/> <strong>El nombre no es válido</strong>";
    alertValidaciones.style.display = "block";
    isValid = false
  }
  if(!validarDescripcion()){
    txtDescripcion.style.border = "solid red medium";
    alertValidacionesTexto.innerHTML += "<br/> <strong>Inserte una descripción más larga</strong>";
    alertValidaciones.style.display = "block";
    isValid = false
  }
  if(!validarPrecio()){
    precioProducto.style.border = "solid red medium";
    alertValidacionesTexto.innerHTML += "<br/> <strong>El precio debe ser mayor a 1</strong>";
    alertValidaciones.style.display = "block";
    isValid = false
  }
  if(!img){
    alertValidacionesTexto.innerHTML += "<br/> <strong>No has insertado una imagen</strong>";
    alertValidaciones.style.display = "block";
    isValid = false
  }

  if(isValid){
    const newProduct = {
      id: items.length + 1,  
      name: name,
      description: description,
      img: img,
      price: precio,  
      category: ''  
    };
    // Verificar si ya existen productos en el localStorage
    let storedItems = JSON.parse(localStorage.getItem('items')) || []; // Si no hay, usar un array vacío
    storedItems.push(newProduct);  // Agregar el nuevo producto al array
    // Guardar el array completo de productos en el localStorage
    localStorage.setItem('items', JSON.stringify(storedItems));

      Swal.fire({
      title: 'Producto agregado correctamente',
      text: 'El producto ha sido añadido',
      icon: 'success',
      confirmButtonText: 'Cerrar'
      }).then(() => {
          // Recargar la página después de cerrar el SweetAlert
          window.location.reload();
      })

      //places holders a la normalidad ---- Aun no hecho

  }
});