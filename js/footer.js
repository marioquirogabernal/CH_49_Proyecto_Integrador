document.addEventListener("DOMContentLoaded", function() {
    const headTag = document.getElementsByTagName("head").item(0);

    headTag.insertAdjacentHTML("beforeend", 
        `<link rel="stylesheet" href="./css/footer.css" />`      
    );

    const bodyTag = document.getElementsByTagName("body").item(0);

    bodyTag.insertAdjacentHTML("beforeend", 
        ` 
        <footer id="footer">
            <a href="./Nosotros.html">¿Quiénes somos?  |  </a>
            <a href="#">Aviso de privacidad  |  </a>
            <a href="#">Preguntas frecuentes</a>
        </footer>
    `);
});
