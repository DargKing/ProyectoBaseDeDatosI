let checkboxActual = ''

$(window).on('load', () => {
    $('#checkboxCliente').prop('checked', false)
    $('#checkboxChofer').prop('checked', false)
})

function checkboxRole(checkbox) {
    const containerDireccion = $('#containerDireccion')

    if (checkbox.dataset.value == 'CLIENTE' && checkbox.checked == true) {
        $('#checkboxChofer').prop('checked', false)
        checkboxActual = 'CLIENTE'
        return
    }
    
    if (checkbox.dataset.value == 'CHOFER' && checkbox.checked == true) {
        console.log('CHOFER')
        checkboxActual = 'CHOFER'
        $('#checkboxCliente').prop('checked', false)
        return
    }
}

$('#botonCrearCuenta').on('click', () => {
    const nombres = $('#inputNombres').val()
    const rol = checkboxActual
    const apellidos = $('#inputApellidos').val()
    const cedula = $('#inputCedula').val()
    const correo = $('#inputCorreo').val()
    const telefono = $('#inputTelefono').val()
    const direccion = $('#inputDireccion').val()
    const fechaDeNacimiento = $('#inputFechaDeNacimiento').val()
    const nombre_usuario = $('#inputUsername').val()
    const contraseña = $('#inputPassword').val()

    $.ajax({
        url: '/api/user/crearCuenta',
        data: JSON.stringify({
            nombres,
            apellidos,
            cedula,
            correo,
            telefono,
            direccion,
            fechaDeNacimiento,
            nombre_usuario,
            contraseña,
            rol
        }),
        method: 'POST',
        dataType: 'json',
        contentType: 'Application/json'
    }).done((res) => {
        localStorage.setItem('sesion', JSON.stringify(res))
        if (rol == 'CLIENTE') {
            location.replace('/cliente/traslado.html')
        }

        if (rol == 'CHOFER') {
            location.replace('/chofer/traslado.html')
        }
        console.log(res)
    }).fail((res) => {
        console.log(res)
    })
})