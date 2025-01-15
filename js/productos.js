const contenedorProductos = document.getElementById("product_container")

function addItem(item){
    const elementoHTML = 
    '<div class="card card_producto shadow" style="width: 384px;">'+
    '         <figure class="card_img_wrapper shadow">'+
    '               <img src="'+item.img+'" class="card_img" alt="imagen del producto">'+
    '           </figure>'+
    '           <div class="card-body">'+
    '               <p class="prodcut_name">'+item.name+'</p>'+
    '               <p class="product_price">'+item.price+'</p>'+
    '               <div class="button_content">'+
    '                   <button class="product_button" type="button">Comprar</button>'+
    '               </div>'+
    '           </div>'+
    '       </div>'
    contenedorProductos.insertAdjacentHTML('beforeend',elementoHTML)
}

let items = [
    {
        'name': 'Mouse Gamer Logitech Óptico',
        'img': 'https://www.cyberpuerta.mx/img/product/XL/CP-LOGITECH-910-006137-b23958.jpg',
        'price': '$1599.99'
    },
    {
        'name': 'Logitech Teclado Gamer G Pro',
        'img': 'https://www.cyberpuerta.mx/img/product/XL/CP-LOGITECH-920-009388-2.jpg',
        'price': '$2800.00'
    },
    {
        'name': 'Monitor Gamer ASUS TUF Gaming VG27AQL1A',
        'img': 'https://www.cyberpuerta.mx/img/product/XL/CP-AOC-24G4E-9c171e.png',
        'price': '$7499.00'
    },
    {
        'name': 'Tarjeta Gráfica NVIDIA GeForce RTX 3060',
        'img': 'https://www.cyberpuerta.mx/img/product/XL/CP-ASUS-90YV06N2-M0NA00-2.jpg',
        'price': '$10299.99'
    },
    {
        'name': 'Procesador Intel Core i7-12700K',
        'img': 'https://www.cyberpuerta.mx/img/product/XL/CP-INTEL-BX8071512700K-2838395.jpg',
        'price': '$8899.00'
    },
    {
        'name': 'SSD Kingston NV1 1TB M.2 NVMe',
        'img': 'https://www.cyberpuerta.mx/img/product/XL/CP-KINGSTON-SNVS1000G-2853934.jpg',
        'price': '$1349.00'
    },
    {
        'name': 'Memoria RAM Corsair Vengeance LPX 16GB (2x8GB) DDR4',
        'img': 'https://www.cyberpuerta.mx/img/product/XL/CP-CORSAIR-CMK16GX4M2B3200C16-2872396.jpg',
        'price': '$1599.00'
    },
    {
        'name': 'Fuente de Poder EVGA 600W 80 Plus White',
        'img': 'https://www.cyberpuerta.mx/img/product/XL/CP-EVGA-100-W1-0600-K1-2759399.jpg',
        'price': '$899.00'
    },
    {
        'name': 'Gabinete Gamer NZXT H510',
        'img': 'https://www.cyberpuerta.mx/img/product/XL/CP-NZXT-CA-H510B-W1-2882154.jpg',
        'price': '$1799.00'
    },
    {
        'name': 'Audífonos Gamer HyperX Cloud II',
        'img': 'https://www.cyberpuerta.mx/img/product/XL/CP-HYPERX-HX-HSCC-2-BK-2731268.jpg',
        'price': '$1899.00'
    }
];


items.forEach((item => {
    addItem(item)
}))
