//URL_BASE= "http://localhost:8080/api/productos/";
const URL_BASE = "http://3.145.32.161:80/api/productos/";

const contenedorProductos = document.getElementById("product_container");
const buttonaddon2 = document.getElementById("buttonaddon2");
const searchInput = document.getElementById("searchInput"); // Input con el id del HTML
const clearButton = document.getElementById("clearButton");

function addItem(item) {
    const elementoHTML =
        `<div class="card card_producto" style="width: 384px;">
            <div class="new-tag">Nuevo</div>
            <figure class="card_img_wrapper shadow">
                <img src="${item.imagen}" class="card_img" alt="imagen del producto">
            </figure>
            <div class="card-body">
                <p class="product_name">${item.nombre}</p>
                <p class="product_description">${item.descripcion}</p>
                <p class="product_price">$${item.precio}</p>
                <div class="product_rating">
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9734;</span>
                </div>
                <div class="button_content">
                    <button class="product_button" type="button" onclick="agregarAlCarrito(${item.id}, '${item.nombre}', ${item.precio}, '${item.imagen}')">
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>`;
    contenedorProductos.insertAdjacentHTML('beforeend', elementoHTML);
}




function mostrarProductos() {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    fetch(URL_BASE, requestOptions)
        .then((response) => response.json())
        .then((itemsFromBD) => {
            // Ordena los productos por 'id' en orden descendente
            itemsFromBD.sort((a, b) => b.id - a.id);
            // Filtra solo los primeros 6 productos
            const latestProducts = itemsFromBD.slice(0, 6);
            // Agrega cada uno de esos productos al contenedor
            latestProducts.forEach(item => addItem(item));
        })
        .catch((error) => console.error("Error al obtener los productos:", error));
}

window.addEventListener("load", function () {
    mostrarProductos();
});

let items = [];

items.forEach(item => {
    addItem(item);
});



function actualizarContadorCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || []; // Cargar el carrito desde el almacenamiento local
    let totalCantidad = carrito.reduce((total, item) => total + item.cantidad, 0); // Sumar las cantidades de los productos

    const contadorCarrito = document.getElementById("contadorCarrito");

    if (contadorCarrito) {
        contadorCarrito.style.color = "white"; 

        if (totalCantidad > 0) {
            contadorCarrito.textContent = totalCantidad; // Actualizar el contador con la cantidad total
        } else {
            contadorCarrito.textContent = 0; // Mostrar 0 si no hay productos
        }
    }
}


function agregarAlCarrito(id, nombre, precio, imagen) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Verificar si el producto ya está en el carrito
    let productoExistente = carrito.find(item => item.id === id);

    if (productoExistente) {
        productoExistente.cantidad += 1; // Aumenta la cantidad
    } else {
        carrito.push({ id, nombre, precio, imagen, cantidad: 1 });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarContadorCarrito(); 
    // Mostrar toast con el producto agregado
    mostrarToast(nombre, imagen);
}



function mostrarToast(nombre, imagen) {
    const toastMensaje = document.getElementById("toastMensaje");
    const toastImagen = document.getElementById("toastImagen");
    const toastCarrito = new bootstrap.Toast(document.getElementById("toastCarrito"));

    toastMensaje.textContent = `Agregado al carrito: ${nombre}`;
    toastImagen.src = imagen;

    toastCarrito.show();
}
