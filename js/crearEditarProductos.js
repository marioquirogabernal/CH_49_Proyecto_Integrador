const productForm = document.getElementById('productForm');
const boton_subir = document.getElementById('imagenProducto');
let imagen;
let items = [];  // Array vacío al inicio


let widget_cloudinary = cloudinary.createUploadWidget({
    cloudName: 'dpyi3icqm',
    uploadPreset: 'preset_pabs'
}, (err, result) => {
    if (!err && result && result.event === 'success') {
        imagen = result.info.secure_url;
        console.log(imagen);

        // Cambiar el texto del label para indicar que la imagen se subió con éxito
        document.getElementById('imagenLabel').textContent = 'Imagen subida con éxito.';
    }
});

boton_subir.addEventListener("click", () => {
    widget_cloudinary.open();
}, false);

productForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('nombreProducto').value;
  const img = imagen
  const description = document.getElementById('descripcionProducto').value;

  const newProduct = {
    id: items.length + 1,  
    name: name,
    description: description,
    img: img,
    price: 0,  
    category: ''  
  };
  items.push(newProduct);  // Agregar el nuevo producto al array
  // Guardar el array items en el localStorage
  localStorage.setItem('items', JSON.stringify(newProduct));
  Swal.fire({
    title: 'Producto agregado correctamente',
    text: 'El producto ha sido añadido',
    icon: 'success',
    confirmButtonText: 'Cerrar'
    }).then(() => {
        // Recargar la página después de cerrar el SweetAlert
        window.location.reload();
    })
});
