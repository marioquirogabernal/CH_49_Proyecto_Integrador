const bodyTag = document.getElementsByTagName("body").item(0);
const headTag = document.getElementsByTagName("head").item(0);

const user = JSON.parse(sessionStorage.getItem('user'));
const datosUsuarios = JSON.parse(localStorage.getItem('datos'));

let r = 0;
const basePath = window.location.pathname.includes("/pages/") ? "../" : "./";


window.addEventListener("load", function () {
    headTag.insertAdjacentHTML("beforeend",
        `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
        <link rel="stylesheet" href="${basePath}css/header.css" />
        <link rel="icon" type="image/png" href="${basePath}img/logo4.png">
        `

    );
    if (user != null && datosUsuarios != null) {
        const nombreUsuario = user ? user.nombre : "Invitado";

        bodyTag.insertAdjacentHTML("afterbegin", //cambia esto ---------------------------------------------------------------
            `<div class="container-header">
            <nav class="navbar navbar-expand-lg border-body-tertiar" data-bs-theme="dark">
                <div class="container-fluid container-header">
                
                <div class="col-1">
                    <a class="navbar-brand nav-link" href="${basePath}index.html">
                    <img src="${basePath}img/logo4.png" alt="Logo" width="57" height="57"
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
                        <a class="nav-link" aria-current="page" href="${basePath}index.html">Inicio</a>
                        </li>

                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="${basePath}pages/productos.html">Productos</a>
                        </li>

                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="${basePath}pages/Nosotros.html">¿Quiénes somos?</a>
                        </li>

                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="${basePath}pages/contacto.html">Contáctanos
                        </a>
                        </li>
                        
                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="${basePath}pages/formEdicionCreacionProductos.html">Creación de productos</a>
                        </li>
                    </ul>
                    </div>

                    <ul class="navbar-nav d-flex">
                         <li class="nav-item">
                        <a class="nav-link"aria-current="page" href="#"><i class="bi bi-cart"></i></a>
                        </li>

                        <li class="nav-item" style="color: blue">
    <a class="nav-link" aria-current="page" href="#">
                <img src="${basePath}img/logo2.jpg" class="user-icon" alt="Icono de usuario">
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
                window.location.href = `${basePath}index.html`;
            });
        } else {
        }


    } else {
        bodyTag.insertAdjacentHTML("afterbegin",
            `<div class="container-header">
            <nav class="navbar navbar-expand-lg border-body-tertiar" data-bs-theme="dark">
                <div class="container-fluid container-header">
                
                <div class="col-1">
                    <a class="navbar-brand nav-link" href="${basePath}index.html">
                    <img src="${basePath}img/logo4.png" alt="Logo" width="57" height="57"
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
                        <a class="nav-link" aria-current="page" href="${basePath}index.html">Inicio</a>
                        </li>
    
                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="${basePath}pages/productos.html">Productos</a>
                        </li>
    
                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="${basePath}pages/Nosotros.html">¿Quiénes somos?</a>
                        </li>
    
                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="${basePath}pages/contacto.html">Contáctanos
                        </a>
                        </li>
                        
                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="${basePath}pages/formEdicionCreacionProductos.html">Creación de productos</a>
                        </li>
                    </ul>
                    </div>
    
                    <ul class="navbar-nav d-flex">
    
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="${basePath}pages/login.html">Iniciar sesión</a>
                        </li>
    
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="${basePath}pages/Formulario_registro.html">Registrarse</a>
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
    color:rgb(245, 138, 126); /* Rojo suave */
    }


    .dark-mode .required {
        color: rgb(235, 106, 92);
    }


    .dark-mode .product_name{
   color:rgb(63, 151, 252);
    }

    /* Estilos para el modo nocturno de los inputs de los formularios*/
    .dark-mode .input-group {
    box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.2); 
    }

    .dark-mode .input-group:focus-within {
    box-shadow: 0px 6px 14px rgba(255, 255, 255, 0.4);
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


//Sirve para remarcar la pagína actual
window.addEventListener("load", function () {
    const currentPage = window.location.pathname.split("/").pop(); // Obtiene el nombre del archivo actual
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href").split("/").pop();
        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
});








//Inserción del footer
document.addEventListener("DOMContentLoaded", function () {
    bodyTag.insertAdjacentHTML("beforeend",
        ` 
       <!-- footer section -->
    <footer class="footer_section" id="footer11">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-3 footer-col">
                    <div class="footer_detail">
                        <h4>
                            Acerca de
                        </h4>
                        <span>
                        
                Somos Technology-Shop, una tienda en línea en México de computadoras 
                de alto rendimiento, ideales para profesionales.
                       </span>

                        <h4>
                        Siguenos en...
                        </h4>
                        <div class="footer_social">
                          <a href="https://www.facebook.com" target="_blank">
                        <i class="bi bi-facebook" aria-hidden="true"></i>
                        </a>

                        <a href="https://www.instagram.com" target="_blank">
                       <i class="bi bi-instagram" aria-hidden="true"></i>
                      </a>

                    <a href="https://www.tiktok.com" target="_blank">
                      <i class="bi bi-tiktok" aria-hidden="true"></i>
                        </a>

                    <a href="https://www.linkedin.com" target="_blank">
                   <i class="bi bi-linkedin" aria-hidden="true"></i>
                    </a>

                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3 footer-col">
                    <div class="footer_contact">
                        <div class="row">
                        <img src="${basePath}img/logo5.png" alt="" id="logo-footer">
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 footer-col">
                    <div class="footer_contact">

                        <h4>
                            Sobre nosotros
                        </h4>
                        <div class="contact_link_box">
                            <a href="${basePath}pages/Preguntas.html">
                                <span>
                                    Preguntas frecuentes
                                </span>
                            </a>
                            <a href="${basePath}pages/contacto.html">
                                <span>
                                    Contáctanos
                                </span>
                            </a>
                        </div>
                        <h4>
                            Visítanos en...
                        </h4>
                        <div class="contact_link_box">
                            <a >
                                <i class="bi bi-geo-alt" aria-hidden="true"></i>
                                <span>Calle de las Flores 112, Colonia Roma, 06700 Ciudad de México, CDMX.
                                </span>
                            </a>
                        </div>
                        
                    </div>
                    
                </div>


                <div class="col-md-6 col-lg-3 footer-col">
                <!-- Google Maps Embed -->
                    <div class="contact_link_box">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d30113.14907524992!2d-99.19139288602726!3d19.36293238474038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCalle%20de%20las%20Flores%20112%2C%20Colonia%20Roma%2C%2006700%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX.!5e0!3m2!1ses-419!2smx!4v1738401254660!5m2!1ses-419!2smx"
                            width="100%" height="200" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>

                
            </div>
            <div class="footer-info">
             
            </div>
        </div>
    </footer>
    <!-- footer section -->
    `);
});
