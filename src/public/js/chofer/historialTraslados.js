let listaHistorialTraslados

$(window).on('load', () => {
  const fechaActual = new Date()
  $('#inputAñoHasta').val(fechaActual.getFullYear())
  $('#inputAñoDesde').val(fechaActual.getFullYear())
  $('#selectMesHasta').val((fechaActual.getMonth() + 1 <= 9) ? ('0' + (fechaActual.getMonth() + 1)) : fechaActual.getMonth() + 1)
  $('#selectMesDesde').val((fechaActual.getMonth() + 1 <= 9) ? ('0' + (fechaActual.getMonth() + 1)) : fechaActual.getMonth() + 1)

  cargarTablaHistorial()
})

function llenarTablaHistorialTraslado(data, pos) {
  const body = $('#bodyTablaHistorialTraslado')

  body.html('')
  const cantidadDePestañas = Math.max(1, data.length / TABLE_LENGTH)

  let kilometrosRecorridos = 0
  let cantidadTraslados = data.length

  for (let i = (pos * 10); i < Math.min(data.length, 10 + (pos * 10)); i++) {
    const el = data[i]

    const fecha = obtenerFecha(el.inicioTraslado)

    const tiempo = Math.round((el.tiempo / 60000) * 10) / 10

    kilometrosRecorridos += el.distancia

    body.append(`
    <tr>
      <td>${el.id}</td>
      <td>${el.saldoACobrar} Bs</td>
      <td>${el.distancia} Km</td>
      <td>${tiempo} Minutos</td>
      <td>${fecha}</td>
      <td>10:00</td>
    </tr>                
    `)
  }

  $('#cantidadDeTraslados').text(cantidadTraslados)
  $('#kilometrosRecorridos').text(kilometrosRecorridos)

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

async function cargarTablaHistorial() {
  const sesion = recuperarSesion()

  try {
    const desde = new Date($('#inputAñoDesde').val(), parseInt($('#selectMesDesde').val()) - 1, 1)
    const hasta = new Date($('#inputAñoHasta').val(), parseInt($('#selectMesHasta').val()), 0)

    const data = await $.ajax({
      url: `/api/traslados/listaTrasladosChofer/${sesion.data.cedula}?token=${sesion.token}&desde=${desde}&hasta=${hasta}`,
      dataType: 'json',
      method: 'GET'
    })

    listaHistorialTraslados = data
    console.log(data)
    llenarTablaHistorialTraslado(data, 0)
  } catch (err) {
    console.log(err)
  }
}

function cambiarDatosToolbarTablaListaHistorialTraslado(pos) {
  const data = listaHistorialTraslados

  llenarTablaHistorialTraslado(data, pos)
}

$('#botonConsultarHistorialTraslados').on('click', () => {
  cargarTablaHistorial()
})

function llenarDatosCardBuscarTraslado (data) {
  $('#estadoDelTraslado').text(data.estado)
  $('#nombresliente').text(data.cliente.nombres)
  $('#apellidosCliente').text(data.cliente.apellidos)
  $('#telefonoCliente').text(data.cliente.telefono)
  $('#placaVehiculo').text(data.placaVehiculo)
  $('#saldoCobradoTraslado').text(data.saldoACobrar + ' Bs')
  $('#distanciaTraslado').text(data.distancia + ' Km')
  
  const tiempo = Math.round((data.tiempo / 60000) * 100) / 100
  $('#tiempoAproxTraslado').text(tiempo + ' Minutos')
}

$('#botonBuscarTraslado').on('click', () => {
  const codigo = $('#inputCodigoTraslado').val()

  if(listaHistorialTraslados == undefined){
    alert('Sucedio un error al recuperar el traslado, por favor reinicie la pagina')
    return
  }

  const traslado = listaHistorialTraslados.find((el) => el.id == codigo)

  if(traslado == undefined){
    alert(`No se encontro el traslado de Codigo ${codigo}`)
    return
  }

  llenarDatosCardBuscarTraslado(traslado)
  InsertarPuntosEnMapa(traslado.puntoInicial, traslado.puntoFinal)
})