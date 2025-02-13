document.addEventListener("DOMContentLoaded", function () {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const carritoContainer = document.getElementById("carrito-container");
    const totalElement = document.getElementById("total");

    function actualizarCarrito() {
        carritoContainer.innerHTML = "";
        let total = 0;

        carrito.forEach((producto, index) => {
            let subtotal = producto.precio * producto.cantidad;
            total += subtotal;

            let item = document.createElement("div");
            item.classList.add("d-flex", "align-items-center", "border-bottom", "py-3", "flex-wrap", "justify-content-between");
            item.innerHTML = `
                <div style="width: 80px; height: 80px; padding: 5px; display: flex; justify-content: center; align-items: center; border-radius: 5px; background-color:rgb(255, 255, 255); margin-right: 15px;">
                    <img src="${producto.imagen}" style="max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 5px;">
                </div>
                <div class="flex-grow-1 text-center text-md-start">
                    <h5>${producto.nombre}</h5>
                    <p class="mb-1">Precio: $${producto.precio}</p>
                    <p>Subtotal: <span id="subtotal-${index}">$${subtotal.toFixed(2)}</span></p>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <button class="btn btn-danger" onclick="cambiarCantidad(${index}, -1)">-</button>
                    <span class="mx-2" id="cantidad-${index}">${producto.cantidad}</span>
                    <button class="btn btn-success" onclick="cambiarCantidad(${index}, 1)">+</button>
                    <button class="btn btn-outline-danger" onclick="eliminarProducto(${index})"><i class="fa fa-trash"></i></button>
                </div>
            `;
            carritoContainer.appendChild(item);
        });

        totalElement.textContent = `$${total.toFixed(2)}`;

        // Ocultar o mostrar total y botón de pago
        const totalContainer = document.getElementById("total-container");
        const btnEnviarCorreo = document.getElementById("btnEnviarCorreo");

        if (totalContainer && btnEnviarCorreo) {
            if (carrito.length === 0) {
                totalContainer.style.display = "none";
                btnEnviarCorreo.style.display = "none";
            } else {
                totalContainer.style.display = "block";
                btnEnviarCorreo.style.display = "block";
            }
        }


        actualizarContadorCarrito();
    }

    window.cambiarCantidad = function (index, cambio) {
        if (carrito[index].cantidad + cambio > 0) {
            carrito[index].cantidad += cambio;
        } else {
            Swal.fire({
                title: "¿Eliminar producto?",
                text: "La cantidad es 0, se eliminará el producto del carrito.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Sí, eliminar",
                cancelButtonText: "Cancelar"
            }).then((result) => {
                if (result.isConfirmed) {
                    carrito.splice(index, 1);
                    localStorage.setItem("carrito", JSON.stringify(carrito));
                    actualizarCarrito();
                }
            });
            return;
        }
        localStorage.setItem("carrito", JSON.stringify(carrito));
        actualizarCarrito();
    };

    window.eliminarProducto = function (index) {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "Este producto será eliminado del carrito.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                carrito.splice(index, 1);
                localStorage.setItem("carrito", JSON.stringify(carrito));
                actualizarCarrito();
            }
        });
    };



    function actualizarContadorCarrito() {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || []; // Carga el carrito desde el almacenamiento local
        let totalCantidad = carrito.reduce((total, item) => total + item.cantidad, 0); // Sumar las cantidades de los productos

        const contadorCarrito = document.getElementById("contadorCarrito");
        const tituloCarrito = document.getElementById("tituloCarrito");

        if (contadorCarrito) {
            contadorCarrito.style.color = "white";

            if (totalCantidad > 0) {
                contadorCarrito.textContent = totalCantidad; // Actualizar el contador con la cantidad total
            } else {
                contadorCarrito.textContent = 0; // Mostrar 0 si no hay productos
            }
        }

        // Actualizar el título con la cantidad de productos
        if (tituloCarrito) {
            if (totalCantidad > 0) {
                tituloCarrito.textContent = `Carrito (${totalCantidad})`;
            } else {
                tituloCarrito.textContent = "Carrito vacío"; // Si no hay productos
            }
        }
    }

    actualizarCarrito();
});



