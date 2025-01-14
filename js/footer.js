document.addEventListener("DOMContentLoaded", function() {
    headTag.insertAdjacentHTML("beforeend",
        `<link rel="stylesheet" href="./css/footer.css" />`      
    );
    

    bodyTag.insertAdjacentHTML("beforeend", 
        `
        <footer id="footer" link rel="stylesheet" href="./css/footer.css">
                <a href="../Nosotros.html">¿Quiénes somos?  |  </a>
                <a href="#">Aviso de privacidad  |  </a>
                <a href="#">Preguntas frecuentes</a>
        </footer>
    `)



});
