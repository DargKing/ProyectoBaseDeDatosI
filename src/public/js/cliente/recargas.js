const fetchRegistrarRecarga = async ({ numeroDeReferencia, cedulaTitular, fechaDePago, banco }) => {
  const sesion = recuperarSesion()
  const clienteData = sesion.data

  console.log(numeroDeReferencia)

  try {
    const data = await $.ajax({
      url: `/api/recargas/registrarRecarga`,
      data: JSON.stringify({
        numeroDeReferencia,
        cedulaTitular,
        fechaDePago,
        banco,
        token: sesion.token,
        cedulaCliente: clienteData.cedula
      }),
      contentType: 'application/json',
      dataType: 'json',
      method: 'POST'
    })
    console.log(data)
  } catch (err) {
    console.log(err)
  }

}

$('#botonRegistrarRecarga').on('click', () => {
  const numeroDeReferencia = $('#inputNumeroDeReferencia').val()
  const cedulaTitular = $('#inputCedulaTitular').val()
  const fechaDePago = $('#inputFechaDePago').val()
  const banco = $('#selectBanco').val()

  fetchRegistrarRecarga({ numeroDeReferencia, cedulaTitular, fechaDePago, banco })
})

const descargarTabla = async () => {
  const sesion = recuperarSesion()

  const data = await $.ajax({
    url: `/api/recargas/listaRecargasCliente/${sesion.data.cedula}?token=${sesion.token}`,
    dataType: 'json',
    contentType: 'application/json',
    method: 'GET'
  })

  return data
}

const llenarTablaListaRecargas = (data, pos) => {
  const body = $('#bodyTablaRecargas')
  if (data.length > 0) {
    body.html('')
    const cantidadDePestañas = Math.max(1, data.length / TABLE_LENGTH)

    for (let i = (pos * 10); i < Math.min(data.length, 10 + (pos * 10)); i++) {
      const el = data[i]

      const fecha = obtenerFecha(el.pago.fechaDePago)

      body.append(`
              <tr>
                  <td>${el.id}</td>
                  <td>${(el.saldo != null) ? el.saldo : 'N/A'} Bs</td>
                  <td>${el.pago.estado}</td>
                  <td>${fecha}</td>
              </tr>                
              `)
    }

    if (data.length > TABLE_LENGTH) {
      $('#toolbarListaRecargas').removeClass('d-none')
      $($('#toolbarListaRecargas').children().get(0)).html('')
      for (let i = 0; i < cantidadDePestañas; i++) {
        $($('#toolbarListaRecargas').children().get(0)).append(`
          <button type="button" onclick="cambiarDatosToolbarTablaListaRecargas(${i})" class="btn btn-primary">${i + 1}</button>
        `)
      }
    }
  }
}

function cambiarDatosToolbarTablaListaRecargas (pos) {
  llenarTablaListaRecargas(JSON.parse(localStorage.getItem('listaRecargasCliente')), pos)
}

const cargarTabla = async () => {
  try {
    const data = await descargarTabla()

    localStorage.setItem('listaRecargasCliente', JSON.stringify(data))

    llenarTablaListaRecargas(data, 0)
  } catch (err) {
    console.log(err)
  }
}

$(window).on('load', () => {
  cargarTabla()
})