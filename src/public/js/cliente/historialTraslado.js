let listaHistorialTraslados = []

const llenarTablaHistorialTraslado = (data, pos) => {
  const body = $('#bodyTableHistorialTraslado')

  if (data.length > 0) {
    body.html('')
    const cantidadDePestañas = Math.max(1, data.length / TABLE_LENGTH)

    for (let i = (pos * 10); i < Math.min(data.length, 10 + (pos * 10)); i++) {
      const el = data[i]

      const fecha = obtenerFecha(el.inicioTraslado)

      body.append(`
              <tr>
                  <td>${el.id}</td>
                  <td>${el.saldoACobrar} Bs</td>
                  <td>${el.distancia} Km</td>
                  <td>${el.tiempo} Minutos</td>
                  <td>${fecha}</td>
                  <td></td>
              </tr>                
              `)
    }

    if (data.length > TABLE_LENGTH) {
      $('#toolbarListaTraslado').removeClass('d-none')
      $($('#toolbarListaTraslado').children().get(0)).html('')
      for (let i = 0; i < cantidadDePestañas; i++) {
        $($('#toolbarListaTraslado').children().get(0)).append(`
          <button type="button" onclick="cambiarDatosToolbarTablaListaHistorialTraslado(${i})" class="btn btn-primary">${i + 1}</button>
        `)
      }
    }
  }
}

function cambiarDatosToolbarTablaListaHistorialTraslado(pos) {
  const data = listaHistorialTraslados

  llenarTablaHistorialTraslado(data, pos)
}

const cargarTabla = async () => {
  const sesion = recuperarSesion()
  try {
    const data = await $.ajax({
      url: `/api/traslados/listaTrasladosCliente/${sesion.data.cedula}?token=${sesion.token}`,
      dataType: 'json',
      contentType: 'application/json',
      method: 'GET'
    })

    listaHistorialTraslados = data

    llenarTablaHistorialTraslado(data, 0)
  } catch (err) {
    console.log(err)
  }
}

$(window).on('load', () => {
  cargarTabla()
})

$('#botonBuscarTraslado').on('click', async () => {
  const id = $('#inputCodigoTraslado').val()

  const data = listaHistorialTraslados.find((el) => el.id == id) ?? null

  if(data == null){
    alert(`No se encontro el traslado de codigo ${data.id}`)
    return
  }

  $('#estadoDelTraslado').text(data.estado)
  $('#nombreChofer').text(data.chofer.nombres + data.chofer.apellidos)
  $('#telefonoChofer').text(data.chofer.telefono)
  $('#placaVehiculo').text(data.placaVehiculo)
  $('#colorVehiculo').text(data.vehiculo.color)
  $('#saldoCobradoTraslado').text(data.saldoACobrar + ' Bs')
  $('#distanciaTraslado').text(data.distancia + ' Km')
  
  const tiempo = Math.round((data.tiempo / 60000) * 100) / 100
  $('#tiempoAproxTraslado').text(tiempo + ' Minutos')

  $('#marcaVehiculo').text(data.vehiculo.modelo.marca.nombre)
  $('#modeloVehiculo').text(data.vehiculo.modelo.nombre)

  InsertarPuntosEnMapa(data.puntoInicial, data.puntoFinal)
})

