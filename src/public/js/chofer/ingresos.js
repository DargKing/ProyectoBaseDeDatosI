$(window).on('load', () => {

  const fechaActual = new Date()
  $('#inputAñoHasta').val(fechaActual.getFullYear())
  $('#inputAñoDesde').val(fechaActual.getFullYear())
  $('#selectMesHasta').val((fechaActual.getMonth() + 1 <= 9) ? ('0' + (fechaActual.getMonth() + 1)) : fechaActual.getMonth() + 1)
  $('#selectMesDesde').val((fechaActual.getMonth() + 1 <= 9) ? ('0' + (fechaActual.getMonth() + 1)) : fechaActual.getMonth() + 1)

  cargarTablaIngresos()
})

function llenarTablaIngresos(data) {
  const body = $('#bodyTablaListaIngresos')

  if (data.length > 0) {
    body.html('')
  }

  let trasladosTotal = data.length
  let saldoPagado = 0

  let kmRecorridos = 0

  const pagosPagados = data.filter((el) => el.pago.estado == 'PAGADO')
  let pagosCompletados = pagosPagados.length

  pagosPagados.forEach(element => {
    saldoPagado += element.pago.monto

    body.append(`
        <tr>
            <td>${element.traslado.id}</td>
            <td>${element.traslado.saldoACobrar} Bs</td>
            <td>${element.pago.monto} Bs</td>
            <td>${element.traslado.distancia} Km</td>
            <td>${element.pago.estado}</td>
            <td>${obtenerFecha(element.pago.fechaDePago)}</td>
        </tr>
        `)
  });

  let comision = Math.round(saldoPagado * 0.3 * 100) / 100

  data.forEach((el) => {
    kmRecorridos += el.traslado.distancia
  })

  $('#trasladosRealizados').text(trasladosTotal)
  $('#kilometrosRecorridos').text(`${kmRecorridos} Km`)
  $('#comision').text(`${comision} Bs`)
  $('#pagosCompletados').text(pagosCompletados)
  $('#saldoPagado').text(saldoPagado)
}

async function cargarTablaIngresos() {
  const sesion = recuperarSesion()

  try {
    const desde = new Date($('#inputAñoDesde').val(), parseInt($('#selectMesDesde').val()) - 1, 1)
    const hasta = new Date($('#inputAñoHasta').val(), parseInt($('#selectMesHasta').val()), 0)

    const data = await $.ajax({
      url: `/api/ingresos/listaIngresos/${sesion.data.cedula}?desde=${desde}&hasta=${hasta}&token=${sesion.token}`,
      dataType: 'json',
      method: 'GET'
    })

    console.log(data)
    llenarTablaIngresos(data)
  } catch (err) {
    console.log(err)
    alert('Sucedio un error al recuperar la lista de ingresos')
  }
}

$('#botonConsultarIngresos').on('click', () => {
  cargarTablaIngresos()
})