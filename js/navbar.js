const bodyTag = document.getElementsByTagName("body").item(0);
const headTag = document.getElementsByTagName("head").item(0);

const user = sessionStorage.getItem("user");
const datosUsuarios = JSON.parse(localStorage.getItem('datos'));

let r = 0;


// <link rel="stylesheet" href="./css/header.css" />
window.addEventListener("load", function () {
    headTag.insertAdjacentHTML("beforeend",
        `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
        <link rel="stylesheet" href="./css/header.css" />`
    );
    if(user != null &&  datosUsuarios != null){
        datosUsuarios.forEach(element => {
            r =0;
            if(element === user){
                r++;
            }
        });
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
                        <a class="nav-link" aria-current="page" href="contacto.html">Contactanos
                        </a>
                        </li>
                        
                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="formEdicionCreacionProductos.html">Creación de productos</a>
                        </li>
                    </ul>
                    </div>

                    <ul class="navbar-nav d-flex">

                        <li class="nav-item" style:"color: blue">
                            <a class="nav-link" aria-current="page" href="#">Bienbenidx ${datosUsuarios[r].nombre}</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" id="idExit"aria-current="page" href="#"><i class="bi bi-person-dash-fill"></i></a>
                        </li>

                        <li class="nav-item">
                        <a class="nav-link"aria-current="page" href="#"><i class="bi bi-cart"></i></a>
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

        const exit = this.document.getElementById("idExit");
        exit.addEventListener("click", function(){
            sessionStorage.clear();
            window.location.href = `./index.html`;
        });


    }else{
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
                        <a class="nav-link" aria-current="page" href="contacto.html">Contactanos
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
        )};

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
    
    /* Modo claro (por defecto) */
    .card {
        background-color: #ffffff; /* Fondo blanco en modo claro */
        color: #000000; /* Color del texto en modo claro */
        transition: background-color 0.3s ease, color 0.3s ease; /* Transiciones suaves */
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
