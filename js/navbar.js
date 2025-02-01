const bodyTag = document.getElementsByTagName("body").item(0);
const headTag = document.getElementsByTagName("head").item(0);

const user = JSON.parse(sessionStorage.getItem('user'));
const datosUsuarios = JSON.parse(localStorage.getItem('datos'));

let r = 0;


// <link rel="stylesheet" href="./css/header.css" />
window.addEventListener("load", function () {
    headTag.insertAdjacentHTML("beforeend",
        `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
        <link rel="stylesheet" href="./css/header.css" />
        <link rel="icon" type="image/png" href="./img/logo4.png">
        `
        
    );
    if (user != null && datosUsuarios != null) {
        const nombreUsuario = user ? user.nombre : "Invitado";

        bodyTag.insertAdjacentHTML("afterbegin", //cambia esto ---------------------------------------------------------------
            `<div class="container-header">
            <nav class="navbar navbar-expand-lg border-body-tertiar" data-bs-theme="dark">
                <div class="container-fluid container-header">
                
                <div class="col-1">
                    <a class="navbar-brand nav-link" href="index.html">
                    <img src="./img/logo4.png" alt="Logo" width="57" height="57"
                        class="d-inline-block align-text-center" />
                    
                    </a>
                </div>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <div class="col-sm">

                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="index.html">Inicio</a>
                        </li>

                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="productos.html">Productos</a>
                        </li>

                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="Nosotros.html">¿Quiénes somos?</a>
                        </li>

                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="contacto.html">Contáctanos
                        </a>
                        </li>
                        
                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="formEdicionCreacionProductos.html">Creación de productos</a>
                        </li>
                    </ul>
                    </div>

                    <ul class="navbar-nav d-flex">
                         <li class="nav-item">
                        <a class="nav-link"aria-current="page" href="#"><i class="bi bi-cart"></i></a>
                        </li>

                        <li class="nav-item" style="color: blue">
    <a class="nav-link" aria-current="page" href="#">
                <img src="img/logo2.jpg" class="user-icon" alt="Icono de usuario">
        <span class="username">Bienvenidx ${nombreUsuario}</span>
    </a>
 </li>


                        <li class="nav-item">
                         <a class="nav-link text-danger fw-bold" id="idExit" aria-current="page" href="#" title="Salir">
                        <i class="bi bi-box-arrow-right"></i> Salir
                         </a>
                        </li>


                       

                    </ul>

                    <ul class="navbar-nav d-flex">
                        <li class="nav-item">
                            <!-- Botón para activar modo nocturno -->
                            <button id="darkModeToggle" class="btn btn-outline-light ms-3 rounded-circle ">
                                <i class="bi bi-moon"></i>
                            </button>
                        </li>
                    </ul>
                    
                    

                </div>
                </div>
            </nav>
            </div>
        `)

        const exit = document.getElementById("idExit");
        if (exit) {
            exit.addEventListener("click", function () {
                sessionStorage.clear();
                window.location.href = "./index.html";
            });
        } else {
        }


    } else {
        bodyTag.insertAdjacentHTML("afterbegin",
            `<div class="container-header">
            <nav class="navbar navbar-expand-lg border-body-tertiar" data-bs-theme="dark">
                <div class="container-fluid container-header">
                
                <div class="col-1">
                    <a class="navbar-brand nav-link" href="index.html">
                    <img src="./img/logo4.png" alt="Logo" width="57" height="57"
                        class="d-inline-block align-text-center" />
                    
                    </a>
                </div>
    
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
    
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <div class="col-sm">
    
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="index.html">Inicio</a>
                        </li>
    
                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="productos.html">Productos</a>
                        </li>
    
                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="Nosotros.html">¿Quiénes somos?</a>
                        </li>
    
                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="contacto.html">Contáctanos
                        </a>
                        </li>
                        
                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="formEdicionCreacionProductos.html">Creación de productos</a>
                        </li>
                    </ul>
                    </div>
    
                    <ul class="navbar-nav d-flex">
    
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="./login.html">Iniciar sesión</a>
                        </li>
    
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="./Formulario_registro.html">Registrarse</a>
                        </li>
    
                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#"><i class="bi bi-cart"></i></a>
                        </li>
    
                    </ul>
    
                    <ul class="navbar-nav d-flex">
                        <li class="nav-item">
                            <!-- Botón para activar modo nocturno -->
                            <button id="darkModeToggle" class="btn btn-outline-light ms-3 rounded-circle ">
                                <i class="bi bi-moon"></i>
                            </button>
                        </li>
                    </ul>
                    
                    
    
                </div>
                </div>
            </nav>
            </div>`
        )
    };



    // Comprobar el estado guardado en el Local Storage al cargar la página
    const darkModeToggle = document.getElementById("darkModeToggle");
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "enabled") {
        document.body.classList.add("dark-mode"); // Aplicar modo oscuro
        darkModeToggle.querySelector("i").className = "bi bi-sun"; // Cambiar ícono
    } else {
        darkModeToggle.querySelector("i").className = "bi bi-moon"; // Cambiar ícono
    }

    // Agregar evento al botón para alternar el modo oscuro
    darkModeToggle.addEventListener("click", () => {
        const isDarkMode = document.body.classList.toggle("dark-mode"); // Alternar clase
        const icon = darkModeToggle.querySelector("i");

        // Cambiar ícono y actualizar el estado en el Local Storage
        if (isDarkMode) {
            icon.className = "bi bi-sun";
            localStorage.setItem("darkMode", "enabled");
        } else {
            icon.className = "bi bi-moon";
            localStorage.setItem("darkMode", "disabled");
        }
    });




});




// Estilos para modo nocturno
const style = document.createElement("style");
style.innerHTML = `
    /* Modo oscuro */
    .dark-mode {
        background-color:#101727;
        color: #ffffff;
        transition: background-color 0.3s ease, color 0.3s ease; /* Transiciones suaves */
    }

    .dark-mode .card{
        background-color: #1e2a3a; /* Fondo de las tarjetas en modo oscuro */
        color: #ffffff; /* Color del texto en las tarjetas */
    }
        
     .dark-mode .list-group-item {
        background-color: #1e2a3a; /* Fondo de los ítems en modo oscuro */
        color: #ffffff; /* Color del texto en modo oscuro */
        border:none; /* Color del borde de los ítems */
    }

    .dark-mode .link {
    color: #9ecaff; 
    }

    .dark-mode .invalid-feedback{
    color:rgb(235, 97, 81); /* Rojo suave */
    }


    .dark-mode .required {
        color: rgb(235, 97, 81);
    }


    .dark-mode .product_name{
   color:rgb(63, 151, 252);
    }

    
 .dark-mode .card.card_producto {
    box-shadow: 0 6px 15px rgba(47, 255, 245, 0.3); /* Sombra suave y difusa */
    border-radius: 12px; /* Bordes más redondeados para un estilo más moderno */
    transition: box-shadow 0.3s ease, transform 0.3s ease; /* Transición suave para sombra y transformación */
}

/* Efecto hover en modo nocturno */
.dark-mode .card.card_producto:hover {
    box-shadow: 0 12px 20px rgba(58, 127, 255, 0.5); /* Sombra más intensa al pasar el mouse */
    transform: translateY(-5px); /*Eleva la tarjeta para darle un efecto de profundidad */
}

    





/* Modo claro (por defecto) */
    .card {
        background-color: #ffffff; /* Fondo blanco en modo claro */
        color: #000000; /* Color del texto en modo claro */
        transition: background-color 0.3s ease, color 0.3s ease; /* Transiciones suaves */
    }



    .card.card_producto {
    box-shadow: 0 6px 15px rgba(47, 255, 245, 0.3); /* Sombra suave y difusa */
    border-radius: 12px; /* Bordes más redondeados para un estilo más moderno */
    transition: box-shadow 0.3s ease, transform 0.3s ease; /* Transición suave para sombra y transformación */
}

   .card.card_producto:hover {
    box-shadow: 0 12px 20px rgba(58, 127, 255, 0.5); /* Sombra más intensa al pasar el mouse */
    transform: translateY(-5px); /* Eleva la tarjeta para darle un efecto de profundidad */
    }



    .product_name{
    color: rgb(66, 109, 252);
    }

    /* Boton de Modo claro y oscuro*/
    #darkModeToggle {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(145deg, #ffffff, #e6e6e6);
        border: none;
        border-radius: 50%;
        transition: all 0.3s ease;
        cursor: pointer;
        color: #333333;
    }

    #darkModeToggle:hover {
        background: linear-gradient(145deg, #e6e6e6, #ffffff);
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2), -2px -2px 5px rgba(255, 255, 255, 0.7);
        transform: scale(1.1);
    }
`;
headTag.appendChild(style);

//Inserción del footer
document.addEventListener("DOMContentLoaded", function () {
    bodyTag.insertAdjacentHTML("beforeend",
        ` 
        <footer id="footer">
            <a href="./Nosotros.html">¿Quiénes somos?  |  </a>
            <a href="#">Aviso de privacidad  |  </a>
            <a href="#">Preguntas frecuentes</a>
        </footer>
    `);
});
