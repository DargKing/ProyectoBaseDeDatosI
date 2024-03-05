let listaVehiculos, cuentaBancaria

$(window).on('load', async () => {
  cargarTablaListaVehiculos()
  cargarDatosCardCuentaBancaria()
})

async function cargarDatosCardCuentaBancaria() {
  const sesion = recuperarSesion()

  try {
    const data = await $.ajax({
      url: `/api/cuentaBancaria/consultarCuentaBancaria/${sesion.data.cedula}?token=${sesion.token}`,
      dataType: 'json',
      method: 'GET'
    })

    cuentaBancaria = data
    llenarDatosCardCuentaBancaria(data)
    llenarDatosCardModificarCuentaBancaria(data)
  } catch (err) {
    console.log(err)
  }
}

function llenarDatosCardCuentaBancaria(data) {
  $('#numeroDeCuenta').text(data.numeroDeCuenta)
  $('#cedulaTitularDeLaCuenta').text(data.cedulaTitular)
  $('#banco').text(data.banco.nombre)
  $('#telefono').text(data.telefono)
}

function llenarDatosCardModificarCuentaBancaria(data) {
  $('#inputNumeroDeCuenta').val(data.numeroDeCuenta)
  $('#inputCedulaTitular').val(data.cedulaTitular)
  $('#selectBanco').val(data.idBanco)
  $('#inputTelefono').val(data.telefono)
}

function vaciarDatosCardModificarCuentaBancaria() {
  $('#inputNumeroDeCuenta').val('')
  $('#inputCedulaTitular').val('')
  $('#selectBanco').val('0102')
  $('#inputTelefono').val('')
}

async function cargarTablaListaVehiculos() {
  const sesion = recuperarSesion()

  try {
    const data = await $.ajax({
      url: `/api/vehiculos/consultarListaVehiculosChofer/${sesion.data.cedula}?token=${sesion.token}`,
      dataType: 'json',
      method: 'GET'
    })

    listaVehiculos = data
    llenarDatosTablaListaVehiculos(data)
  } catch (err) {
    console.log(err)
  }
}

function llenarDatosTablaListaVehiculos(data) {
  const body = $('#bodyTablaListaVehiculos')

  if (data.length > 0) {
    body.html('')

    data.forEach(element => {
      body.append(`
      <tr>
          <td>${element.placa}</td>
          <td>${element.modelo.nombre}</td>
          <td>${element.modelo.marca.nombre}</td>
          <td>${element.color}</td>
          <td>${element.estado}</td>
      </tr>
      `)
    });
  }
}

function limpiarDatosCardAgregarVehiculo() {
  const placa = $('#inputPlaca').val('')
  const color = $('#selectColor').val('Rojo')
  const marca = $('#selectMarca').val('TOYOTA')
  const modelo = $('#selectModelo').val('Corolla')
}

function limpiarDatosCardModificarVehiculo() {
  const placa = $('#inputBuscarPlaca').val('')
  const estado = $('#selectModificarEstado').val('ACTIVO')
  const color = $('#selectModificarColor').val('Rojo')
}

$('#botonAgregarVehiculo').on('click', async () => {
  const placa = $('#inputPlaca').val()
  const color = $('#selectColor').val()
  const marca = $('#selectMarca').val()
  const modelo = $('#selectModelo').val()

  const sesion = recuperarSesion()

  try {
    const res = await $.ajax({
      url: `/api/vehiculos/ingresarVehiculo?token=${sesion.token}`,
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({
        placa,
        color,
        marca,
        modelo,
        cedula: sesion.data.cedula
      }),
      method: 'POST'
    })

    limpiarDatosCardAgregarVehiculo()
    alert('Se actualizo con exito el Vehiculo')

    cargarTablaListaVehiculos()
  } catch (err) {
    console.log(err)
  }


})

$('#botonBuscarPlacaModificarVehiculo').on('click', () => {
  if (listaVehiculos == undefined) {
    alert('Sucedio un error al recuperar el Vehiculo, por favor recargue la pagina')
    return
  }

  const placa = $('#inputBuscarPlaca').val()

  const vehiculo = listaVehiculos.find((el) => el.placa == placa)

  if (vehiculo == undefined) {
    alert(`El vehiculo de placa ${placa} no se encuentra, verificar que escribio correctamente la Placa del Vehiculo`)
    return
  }

  const color = $('#selectModificarColor').val()
  const estado = $('#selectModificarEstado').val()
})

$('#botonModificarVehiculo').on('click', async () => {
  const placa = $('#inputBuscarPlaca').val()
  const estado = $('#selectModificarEstado').val()
  const color = $('#selectModificarColor').val()

  const sesion = recuperarSesion()

  try {
    const data = await $.ajax({
      url: `/api/vehiculos/modificarVehiculo/${placa}?token=${sesion.token}`,
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({
        estado,
        color
      }),
      method: 'POST'
    })

    console.log(data)
    alert(`Se ha actualizado con exito el Vehiculo`)
    cargarTablaListaVehiculos()
    limpiarDatosCardModificarVehiculo()
  } catch (err) {
    console.log(err)
  }
})

$('#botonModificarCuentaBancaria').on('click', async () => {
  const sesion = recuperarSesion()

  const numeroDeCuenta = $('#inputNumeroDeCuenta').val()
  const cedulaTitular = $('#inputCedulaTitular').val()
  const banco = $('#selectBanco').val()
  const telefono = $('#inputTelefono').val()

  try {
    const data = await $.ajax({
      url: `/api/cuentaBancaria/modificarCuentaBancaria/${sesion.data.cedula}?token=${sesion.token}`,
      method: 'PATCH',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({
        numeroDeCuenta,
        cedulaTitular,
        banco,
        telefono
      })
    })

    cargarDatosCardCuentaBancaria()
    console.log(data)
    alert('Se modifico con exito la Cuenta Bancaria')
    vaciarDatosCardModificarCuentaBancaria()
  } catch (err) {
    console.log(err)
    alert('Sucedio un error al actualizar la Cuenta Bancaria')
  }
})