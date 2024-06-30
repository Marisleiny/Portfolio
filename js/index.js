/* Variables para el menu hamburguesa del responsive */
const popup = document.querySelector('.overlay')
const cerrar = popup.querySelector('.overlay__popup__close')
const hamburguesa = document.querySelector('.header__hamburguesa__a')


/* Eventos para abrir y cerrar el popUp del menu hamburguesa */
hamburguesa.addEventListener('click', () => {
    popup.classList.toggle('ocultar')
})

cerrar.addEventListener('click', () => {
    popup.classList.toggle('ocultar')
})