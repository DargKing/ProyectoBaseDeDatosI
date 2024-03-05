$(window).on('load', () => {

})

$('#botonInicioDeSesion').on('click', () => {
    const nombre_usuario = $('#inputUsername').val()
    const contraseña = $('#inputPassword').val()

    $.ajax({
        url: '/api/user/iniciarSesion',
        data: JSON.stringify({
            nombre_usuario,
            contraseña
        }),
        method: 'POST',
        dataType: 'json',
        contentType: 'Application/json'
    }).done((res) => {
        localStorage.setItem('sesion', JSON.stringify(res))
        if (res.data.rol == 'CLIENTE') {
            location.replace('/cliente/traslado.html')
        }

        if (res.data.rol == 'CHOFER') {
            location.replace('/chofer/traslado.html')
        }
        console.log(res)
    }).fail((res) => {
        console.log(res)
    })
})