const bodyTag = document.getElementsByTagName("body").item(0);
const headTag = document.getElementsByTagName("head").item(0);

// <link rel="stylesheet" href="./css/header.css" />
window.addEventListener("load", function(e){
    headTag.insertAdjacentHTML("beforeend",
        `<link rel="stylesheet" href="./css/header.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">`
    );
    
    bodyTag.insertAdjacentHTML("afterbegin", 
        `<div class="container-header">
        <nav class="navbar navbar-expand-lg border-body-tertiar" data-bs-theme="dark">
            <div class="container-fluid container-header">
            <div class="col-sm">
                <a class="navbar-brand nav-link" href="index.html">
                <img src="./img/logo.png" alt="Logo" width="57" height="57"
                    class="d-inline-block align-text-center" />
                TECNOLOGY-SHOP
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
                    <a class="nav-link" aria-current="page" href="contacto.html">Contacto
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="Nosotros.html">Nosotros</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="formEdicionCreacionProductos.html">Creacion productos</a>
                    </li>
                </ul>
                </div>
                <ul class="navbar-nav d-flex">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Iniciar sesión</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="./Formulario_registro.html">Registrarse</a>
                </li>
                <a class="nav-link" aria-current="page" href="#"><i class="bi bi-cart"></i></a>
                </ul>
            </div>
            </div>
        </nav>
        </div>`)
});

