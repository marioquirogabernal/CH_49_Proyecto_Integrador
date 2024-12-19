const productForm = document.getElementById('productForm');

productForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('nombreProducto').value;
  const img = document.getElementById('imagenProducto').value;
  const description = document.getElementById('descripcionProducto').value;
  addItem({ name, img, description });
  productForm.reset();
  Swal.fire({
    title: 'Producto agregado correctamente',
    text: 'El producto ha sido añadido',
    icon: 'success',
    confirmButtonText: 'Cerrar'
});
});


function addItem(item){
    const itemHTML = '<div class="card shadow" style="width: 18rem; border-radius: 15px;">\n' +
        '    <img src="'+item.img+'" class="card-img-top" alt="image" style="width: 100%; height: 200px; object-fit: contain;">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title text-truncate">'+item.name+'</h5>\n' +
        '        <p class="card-text text-truncate">'+item.description+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;

}


addItem({'name':'juice',
    'img':'https://www.gs1india.org/media/Juice_pack.jpg',
    'description':'Orange and Apple juice fresh and delicious'});

addItem({'name':'Tayto',
    'img':'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg',
    'description':'Cheese & Onion Chips'})
