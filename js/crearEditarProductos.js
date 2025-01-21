const productForm = document.getElementById('productForm');
const txtNombre = document.getElementById(`nombreProducto`);
const txtDescripcion = document.getElementById(`descripcionProducto`);
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

function validacionNombre(){//Validacion del nombre
    const name = txtNombre.value.trim();
    const reGex = /^[A-Za-z _-]{3,25}$/;
    return reGex.test(name);
}
function validarDescripcion() {//Validacion de la descripcion
    let Descripcion = txtDescripcion.value.trim();
    let regex = /^(?!.*([a-zA-Z0-9])\1\1)[[a-zA-Z0-9]+]{3,250}$/;
   
    return regex.test(Descripcion);

}

productForm.addEventListener(`submit`, function(event){//Función de agregacion de item siempre y cuando pase las validaciones
    event.preventDefault();
    let isValid = true;

    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";

    txtNombre.style.border = "";
    txtNombre.value = txtNombre.value.trim();

    txtDescripcion.style.border = "";
    txtDescripcion.value = txtDescripcion.value.trim();

    if(!validacionNombre()){//Disparo de alerta
        txtNombre.style.border = "solid red medium";
        alertValidacionesTexto.innerHTML += "<br/> <strong>El nombre no es válido</strong>";
        alertValidaciones.style.display = "block";
        isValid = false
    }
    if(!validarDescripcion()){//Disparo de alerta
        txtDescripcion.style.border = "solid red medium";
        alertValidacionesTexto.innerHTML += "<br/> <strong>Descripcion no valida</strong>";
        alertValidaciones.style.display = "block";
        isValid = false
    }
    if(isValid){//si es valido pasa a insertarlo
        const name = document.getElementById('nombreProducto').value;//Se puede cambiar por la cosntate declarada al principio
        const img = document.getElementById('imagenProducto').value;//Se puede declarar al principio
        const description = document.getElementById('descripcionProducto').value;// Se puede cambiar por la cosntate declarada al principio
        addItem({ name, img, description });
        productForm.reset();
        Swal.fire({
            title: 'Producto agregado correctamente',
            text: 'El producto ha sido añadido',
            icon: 'success',
            confirmButtonText: 'Cerrar'
    });
    }
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
