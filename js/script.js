const imagenes = document.querySelectorAll(".hero_figure")

function triggerAnimation(entries){
    console.log("me estan llamando")
    entries.forEach(entry =>{
        const image = entry.target.querySelector('img')
        image.classList.toggle('unset', entry.isIntersecting)
        console.log(image)
})
}

const option = {
    root: null,
    rootMargin: "0px",
    threshold: 1
}

const observer = new IntersectionObserver(triggerAnimation, option)

imagenes.forEach(imagen =>{
    observer.observe(imagen)
})