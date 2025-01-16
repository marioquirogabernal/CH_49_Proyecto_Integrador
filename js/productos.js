const contenedorProductos = document.getElementById("product_container")
const buttonaddon2 = document.getElementById("buttonaddon2");
const searchInput = document.getElementById("searchInput"); // Input con el id del HTML
const clearButton = document.getElementById("clearButton");

function addItem(item){
    const elementoHTML = 
    '<div class="card card_producto shadow" style="width: 384px;">'+
    '         <figure class="card_img_wrapper shadow">'+
    '               <img src="'+item.img+'" class="card_img" alt="imagen del producto">'+
    '           </figure>'+
    '           <div class="card-body">'+
    '               <p class="product_name">'+item.name+'</p>'+
    '               <p class="product_description">'+item.description+'</p>'+
    '               <p class="product_price">'+'$'+item.price+'</p>'+
    '               <div class="button_content">'+
    '                   <button class="product_button" type="button">Comprar</button>'+
    '               </div>'+
    '           </div>'+
    '       </div>'
    contenedorProductos.insertAdjacentHTML('beforeend',elementoHTML)
}


window.addEventListener("load", function () {
    // Verifica si hay productos guardados en el localStorage
    const savedItems = localStorage.getItem("items");
    if (savedItems) {
        // Convierte los datos JSON de localStorage a un array de objetos
        const itemsFromStorage = JSON.parse(savedItems);
        // Agrega cada producto almacenado al contenedor
        itemsFromStorage.forEach(item => addItem(item));
    }
});


let items = [
    {
        'name': 'Mouse Gamer Logitech Óptico ',
        'description': 'Mouse ergonómico con sensor óptico avanzado, diseñado para gamers que buscan precisión y comodidad en largas sesiones de juego. Compatible con PC y Mac.',
        'img': 'https://www.cyberpuerta.mx/img/product/XL/CP-LOGITECH-910-006137-b23958.jpg',
        'price': 1599.99
    },
    {
        'name': 'Logitech Teclado Gamer G Pro',
        'description': 'Teclado mecánico compacto con switches de alta precisión. Incluye iluminación RGB personalizable y diseño portátil ideal para torneos.',
        'img': 'https://www.cyberpuerta.mx/img/product/XL/CP-LOGITECH-920-009388-2.jpg',
        'price': 2800.00
    },
    {
        'name': 'Monitor Gamer ASUS TUF Gaming VG27AQL1A',
        'description': 'Monitor de 27 pulgadas con resolución QHD, 170Hz de refresco y tecnología G-SYNC para una experiencia de juego fluida y sin interrupciones.',
        'img': 'https://www.cyberpuerta.mx/img/product/XL/CP-AOC-24G4E-9c171e.png',
        'price': 7499.00
    },
    {
        'name': 'Tarjeta Gráfica NVIDIA GeForce RTX 3060',
        'description': 'Gráfica de alto rendimiento con tecnología de trazado de rayos en tiempo real y memoria GDDR6 de 12GB, perfecta para gaming y creación de contenido.',
        'img': 'https://www.cyberpuerta.mx/img/product/XL/CP-ASUS-90YV06N2-M0NA00-2.jpg',
        'price': 10299.99
    },
    {
        'name': 'Procesador Intel Core i7-12700K',
        'description': 'Procesador de 12 núcleos y 20 hilos con velocidades de hasta 5.0 GHz, ideal para gaming, productividad y multitarea intensiva.',
        'img': 'https://m.media-amazon.com/images/I/51AqEkc2BuL.__AC_SX300_SY300_QL70_ML2_.jpg',
        'price': 8899.00
    },
    {
        'name': 'SSD Kingston NV1 1TB M.2 NVMe',
        'description': 'Unidad de almacenamiento ultrarrápida con interfaz NVMe. Ofrece velocidades de lectura y escritura ideales para gaming y trabajo profesional.',
        'img': 'https://http2.mlstatic.com/D_NQ_NP_886276-MLA79769239420_102024-O.webp',
        'price': 1349.00
    },
    {
        'name': 'Memoria RAM Corsair Vengeance LPX 16GB (2x8GB) DDR4',
        'description': 'Kit de memoria RAM DDR4 de alto rendimiento con disipador de calor de perfil bajo. Ideal para overclocking y compatibilidad con sistemas compactos.',
        'img': 'https://m.media-amazon.com/images/I/61wCOVcyvFL._AC_SY450_.jpg',
        'price': 1599.00
    },
    {
        'name': 'Fuente de Poder EVGA 600W 80 Plus White',
        'description': 'Fuente de poder confiable con certificación 80 Plus White, que garantiza eficiencia energética y protección para tu sistema.',
        'img': 'https://m.media-amazon.com/images/I/61JIZLFj3eL._AC_SY450_.jpg',
        'price': 899.00
    },
    {
        'name': 'Gabinete Gamer NZXT H510',
        'description': 'Gabinete compacto con diseño minimalista, panel lateral de vidrio templado y excelente gestión de cables para un montaje limpio.',
        'img': 'https://m.media-amazon.com/images/I/71eyFRpHS3L._AC_SY450_.jpg',
        'price': 1799.00
    },
    {
        'name': 'Audífonos Gamer HyperX Cloud II',
        'description': 'Audífonos de alta fidelidad con sonido envolvente 7.1, almohadillas de espuma viscoelástica y micrófono desmontable para comunicación clara.',
        'img': 'https://m.media-amazon.com/images/I/71pz2njkNRL.__AC_SX300_SY300_QL70_ML2_.jpg',
        'price': 1899.00
    }
];

//localStorage.setItem("items", JSON.stringify(items));

items.forEach((item => {
    addItem(item)
}))

///////////////////////Buscador///////////////////////////////
function displayItems(items) {
    contenedorProductos.innerHTML = ""; // Limpia el contenedor
    items.forEach(item => addItem(item)); // Añade los elementos filtrados
}


function buscarProd() {
    const query = searchInput.value.toLowerCase().trim(); // Obtiene el valor del input en minúsculas
    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(query) || // Filtra por nombre
        item.description.toLowerCase().includes(query) // Filtra por descripción
    );

    // Muestra los productos filtrados o un mensaje si no se encontraron productos
    if (filteredItems.length === 0) {
        contenedorProductos.innerHTML = '<div class="no-products-message" style="display: flex; justify-content: center; align-items: center; height: 100vh;"><p>No se encontraron productos que coincidan con la búsqueda.</p></div>';
        
    } else {
        displayItems(filteredItems); // Muestra los productos filtrados
    }
}


buttonaddon2.addEventListener("click", function () {
    //para el boton azul de buscar
    buscarProd();
});


searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase().trim();
    if (query === "") {
        // Si el campo está vacío, muestra todos los productos
        displayItems(items);
    } else {
        buscarProd();
    }
});


clearButton.addEventListener("click", function () {
    searchInput.value = ""; // Limpia el contenido del input
    displayItems(items); // Muestra todos los productos
});