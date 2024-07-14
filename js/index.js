/* Variables para el menu hamburguesa del responsive */
const popup = document.querySelector('.overlay')
const cerrar = popup.querySelector('.overlay__popup__close')
const hamburguesa = document.querySelector('.header__hamburguesa__a')
/* Variables para la seccion de inicio */
let botones = document.querySelectorAll('.inicio__botones__boton')
/* Variables para efecto scroll */
let efectoScroll = document.querySelectorAll('.desvanecer')
const educacion = document.querySelector('.sobremi__resume__educacion')
const experiencia = document.querySelector('.sobremi__resume__experiencia')
const menu = document.querySelector('.header__menu')
/* Lista para el hover de los servicios */
let servicios = document.querySelectorAll('.image')
/* Variables para el popup de portfolio */
let proyectos = document.querySelectorAll('.portfolio__container__content__text__boton')
const fondo = document.querySelector('.fondo')
const x = fondo.querySelector('.fondo__button')
let primera = fondo.querySelector('.primera')
let segunda = fondo.querySelector('.segunda')
let tercera = fondo.querySelector('.tercera')
let cuarta = fondo.querySelector('.cuarta')
/* Variables para el popup de fotografia */
let imagenes = document.querySelectorAll('.fotografia__grid__image')
const ventana = document.querySelector('.galeria')
const btn = ventana.querySelector('.galeria__boton')
/* Variables para el carrusel de testimonios */
const carrusel = document.querySelector('.testimonios__carrusel')
let intervalo = null
let paso = 10
let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth
/* Variables para el efecto parallax en los titulos principales */
let titulos = document.querySelectorAll('.title')

/* Eventos para abrir y cerrar el popUp del menu hamburguesa */
hamburguesa.addEventListener('click', () => {
    popup.classList.toggle('ocultar')
})

cerrar.addEventListener('click', () => {
    popup.classList.toggle('ocultar')
})

/* Evento para cambiar el contenido y la imagen de fondo de la seccion de inicio */
botones.forEach((boton) => {
    boton.addEventListener('click', () => {
        if (window.innerWidth <= 480) {
            document.querySelector(`.${boton.getAttribute('data-activo')}`).classList.remove('esconder')
            document.querySelector(`.${boton.getAttribute('data-desactivaruno')}`).classList.add('esconder')
            document.querySelector(`.${boton.getAttribute('data-desactivardos')}`).classList.add('esconder')
            document.querySelector(`.${boton.getAttribute('data-activo')}`).style.backgroundImage = `url(${boton.getAttribute('data-mobile')})`
        } else if (window.innerWidth > 480 && window.innerWidth <= 720) {
            document.querySelector(`.${boton.getAttribute('data-activo')}`).classList.remove('esconder')
            document.querySelector(`.${boton.getAttribute('data-desactivaruno')}`).classList.add('esconder')
            document.querySelector(`.${boton.getAttribute('data-desactivardos')}`).classList.add('esconder')
            document.querySelector(`.${boton.getAttribute('data-activo')}`).style.backgroundImage = `url(${boton.getAttribute('data-tablet')})`
        } else {
            document.querySelector(`.${boton.getAttribute('data-activo')}`).classList.remove('esconder')
            document.querySelector(`.${boton.getAttribute('data-desactivaruno')}`).classList.add('esconder')
            document.querySelector(`.${boton.getAttribute('data-desactivardos')}`).classList.add('esconder')
            document.querySelector(`.${boton.getAttribute('data-activo')}`).style.backgroundImage = `url(${boton.getAttribute('data-desktop')})`
        }
    })
})

/* Evento para que al hacer scroll aparezca el contenido, se fije el header, entren los  bloques de educación y experiencia y haga un pequeño efecto parallax los titulos principales */
window.addEventListener('scroll', () => {
    menu.classList.toggle('menu', window.scrollY > 0)
    efectoScroll.forEach((efecto) => {
        (efecto.getBoundingClientRect().top < window.innerHeight - 150) ? efecto.style.opacity = '1' : efecto.removeAttribute('style')
    })

    if (educacion.getBoundingClientRect().top < window.innerHeight - 150) {
        educacion.style.transform = 'translateX(0)'
    }

    if (experiencia.getBoundingClientRect().top < window.innerHeight - 150) {
        experiencia.style.transform = 'translateX(0)'
    }

    titulos.forEach((titulo) => {
        let scroll = window.pageYOffset
        let speed = 0.2
        
        titulo.style.transform = 'translateY('+scroll * speed+'px)'
    })
})

/* Eventos para el hover de los servicios */
servicios.forEach((servicio) => {
    servicio.addEventListener('mouseenter', () => {
        let contenedorHover = document.querySelector(`.${servicio.getAttribute('data-hover')}`)
        contenedorHover.classList.toggle('hover')
    })
    servicio.addEventListener('mouseleave', () => {
        let contenedorHover = document.querySelector(`.${servicio.getAttribute('data-hover')}`)
        contenedorHover.classList.toggle('hover')
    })
})

/* Eventos para abrir y cerrar el popUp para visualizar los proyectos */
proyectos.forEach((proyecto) => {
    proyecto.addEventListener('click', () => {
        primera.src = proyecto.getAttribute('data-imagenuno')
        segunda.src = proyecto.getAttribute('data-imagendos')
        tercera.src = proyecto.getAttribute('data-imagentres')
        cuarta.src = proyecto.getAttribute('data-imagencuatro')
        fondo.classList.toggle('cerrar')
    })
})

x.addEventListener('click', () => {
    fondo.classList.toggle('cerrar')
})

/* Eventos para abrir y cerrar el popUp para visualizar las fotografias */
imagenes.forEach((imagen) => {
    imagen.addEventListener('click', () => {
        ventana.querySelector('.galeria__foto__img').src = imagen.src
        ventana.querySelector('.galeria__foto__img').alt = imagen.alt
        ventana.classList.toggle('hidden')
    })
})

btn.addEventListener('click', () => {
    ventana.classList.toggle('hidden')
})

/* setInterval y eventos para el carrusel de testimonios */
const moverCarrusel = () => {
    intervalo = setInterval(() => {
        carrusel.scrollLeft = carrusel.scrollLeft + paso
        if (carrusel.scrollLeft == maxScrollLeft) {
            paso = -10
        } else if (carrusel.scrollLeft == 0) {
            paso = 10
        }
    }, 200)
}

const pausarCarrusel = () => {
    clearInterval(intervalo)
}

moverCarrusel()

carrusel.addEventListener('mouseover', () => {
    pausarCarrusel()
})

carrusel.addEventListener('mouseout', () => {
    moverCarrusel()
})