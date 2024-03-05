$(window).on('load', () => {

})

const recuperarSesion = () => {
    return JSON.parse(localStorage.getItem('sesion') ?? null)
}

$('#cerrarSesion').on('click', () => {
    localStorage.removeItem('sesion')
    location.replace('/login.html')
})