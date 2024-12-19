document.addEventListener("DOMContentLoaded", function() {
    var footerEnd = `
        <footer id="footer" link rel="stylesheet" href="./css/footer.css">
                <a href="#">¿Quiénes somos?  |  </a>
                <a href="#">Aviso de privacidad  |  </a>
                <a href="#">Preguntas frecuentes</a>
        </footer>
    `;
    document.body.insertAdjacentHTML("beforeend", footerEnd);
});
