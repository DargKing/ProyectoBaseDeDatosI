var map, mapEstadoTraslado, animatedLayer, searchManager, dataLayer, infobox, directionsManager, directionsManagerEstadoTraslado;

let puntoA = undefined
let puntoB = undefined

let eventoActivo
let idEventoActivo

let idTrasladoActual


async function comprobarTrasladoActivo() {
    const sesion = recuperarSesion()

    try {
        const data = await $.ajax({
            url: `/api/traslados/buscarTrasladoActivo/${sesion.data.cedula}?token=${sesion.token}`,
            dataType: 'json',
            method: 'GET'
        })
   
        idTrasladoActual = data.id

        const latitudA = parseFloat(data.puntoInicial.split(';')[0])
        const latitudB = parseFloat(data.puntoFinal.split(';')[0])

        const longitudA = parseFloat(data.puntoInicial.split(';')[1])
        const longitudB = parseFloat(data.puntoFinal.split(';')[1])

        const locationA = new Microsoft.Maps.Location(latitudA, longitudA)
        const locationB = new Microsoft.Maps.Location(latitudB, longitudB)

        puntoA = new Microsoft.Maps.Pushpin(locationA)
        puntoB = new Microsoft.Maps.Pushpin(locationB)

        llenarDatosEstadoTraslado(data)
        idIntervalActualizarEstadoTraslado = setInterval(actualizarEstadoTraslado, 10000)
    } catch (err) {
        console.log(err)
    }
}

$('#botonMarcarUbicacionFrom').on('click', () => {
    document.getElementsByClassName('MicrosoftMap')[0].style.cursor = 'crosshair'

    if (idEventoActivo != undefined) {
        Microsoft.Maps.Events.removeHandler(idEventoActivo)
    }

    idEventoActivo = Microsoft.Maps.Events.addHandler(map, 'click', botonColocarWaypoint)
    eventoActivo = 'FROM'
})

$('#botonMarcarUbicacionTo').on('click', () => {
    document.getElementsByClassName('MicrosoftMap')[0].style.cursor = 'crosshair'

    if (idEventoActivo != undefined) {
        Microsoft.Maps.Events.removeHandler(idEventoActivo)
    }

    idEventoActivo = Microsoft.Maps.Events.addHandler(map, 'click', botonColocarWaypoint)
    eventoActivo = 'TO'
})

$('#inputFrom').on('input', (e) => {
    Search(e.currentTarget.value, 'FROM')
})

$('#inputTo').on('input', (e) => {
    Search(e.currentTarget.value, 'TO')
})

let idIntervalActualizarEstadoTraslado

async function actualizarEstadoTraslado() {
    const sesion = recuperarSesion()

    try {
        const data = await $.ajax({
            url: `/api/traslados/consultarEstadoTraslado/${idTrasladoActual}?token=${sesion.token}`,
            dataType: 'json',
            method: 'GET'
        })

        llenarDatosEstadoTraslado(data)
        if (data.estado = 'FINALIZADO') {
            clearInterval(idIntervalActualizarEstadoTraslado)
        }
    } catch (err) {
        console.log(err)
    }
}

$('#botonSolicitarTraslado').on('click', async (e) => {
    const sesion = recuperarSesion()

    const puntoInicial = puntoA.getLocation()
    const puntoFinal = puntoB.getLocation()
    const ruta = directionsManager.getCurrentRoute().routeLegs[0]
    const tiempo = ruta.summary.time
    const distancia = ruta.summary.distance


    try {
        const data = await $.ajax({
            url: `/api/traslados/crearTraslado`,
            dataType: 'json',
            data: JSON.stringify({
                token: sesion.token,
                cedulaCliente: sesion.data.cedula,
                puntoInicial: `${puntoInicial.latitude};${puntoInicial.longitude}`,
                puntoFinal: `${puntoFinal.latitude};${puntoFinal.longitude}`,
                tiempo,
                distancia
            }),
            contentType: 'application/json',
            method: 'POST'
        })

        idTrasladoActual = data.id

        llenarDatosEstadoTraslado(data)

        idIntervalActualizarEstadoTraslado = setInterval(actualizarEstadoTraslado, 10000)
    } catch (err) {
        console.log(err)
    }
})

function Search(value, target) {
    if (!searchManager) {
        //Create an instance of the search manager and perform the search.
        Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
            searchManager = new Microsoft.Maps.Search.SearchManager(map);
            Search(value, target)
        });
    } else {
        geocodeQuery(value, target);
    }
}

function colocarWaypoint(latitude, longitude, target) {

    const body = (target == 'FROM') ? $('#opcionesBusquedaFrom') : $('#opcionesBusquedaTo')

    body.addClass('d-none')

    let location = new Microsoft.Maps.Location(latitude, longitude)

    let options = {
        text: 'A',
        title: 'FROM'
    }

    // Create custom Pushpin
    let pin = new Microsoft.Maps.Pushpin(location, options);
    map.setView({
        center: location,
        zoom: 15
    })

    if (target == 'FROM') {
        puntoA = pin
    } else {
        puntoB = pin
    }

    map.entities.clear()
    directionsManager.clearAll()

    if (puntoA != undefined) {
        map.entities.push(puntoA);
        directionsManager.addWaypoint(new Microsoft.Maps.Directions.Waypoint({ location: puntoA.getLocation() }))
    }

    if (puntoB != undefined) {
        map.entities.push(puntoB);
        directionsManager.addWaypoint(new Microsoft.Maps.Directions.Waypoint({ location: puntoB.getLocation() }))
    }

    if (puntoA != undefined && puntoB != undefined) {
        map.entities.clear()
        calculateRoute()
    }
}

function geocodeQuery(query, target) {
    const body = (target == 'FROM') ? $('#opcionesBusquedaFrom') : $('#opcionesBusquedaTo')
    var searchRequest = {
        where: query,
        callback: function (r) {
            body.removeClass('d-none')
            if (r && r.results && r.results.length > 0) {
                body.html('')
                for (let i = 0; i < r.results.length; i++) {
                    body.append(`
                    <div role='button' onclick="colocarPin(${r.results[i].location.latitude}, ${r.results[i].location.longitude}, '${r.results[i].name}', '${target}')" class="list-group-item list-group-item-action" aria-current="true">
                        <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">${r.results[i].name}</h5>
                        </div>
                        ${(r.results[i].address.district != undefined) ? `<p class="mb-1">${r.results[i].address.district}</p>` : ''}
                        
                        <small>${r.results[i].location.latitude}, ${r.results[i].location.longitude}</small>
                    </div>
                    `)
                }
            }
        },
        errorCallback: function (e) {
            if (query.length != 0) {
                body.removeClass('d-none')
                body.html('')
                body.append(`
                <div href="#" class="list-group-item list-group-item-action" aria-current="true">
                    <small>No se encontro ninguna ubicacion</small>
                </div>
                `)
            } else {
                body.addClass('d-none')
            }
        }
    };

    //Make the geocode request.
    searchManager.geocode(searchRequest);
}

function llenarDatosContainerResultadosDeRuta() {
    $('#containerResultadosDeRuta').removeClass('d-none')
    const distancia = Math.round(directionsManager.getCurrentRoute().routeLegs[0].summary.distance * 100) / 100
    const tiempoAprox = directionsManager.getCurrentRoute().routeLegs[0].summary.time
    const saldoACobrar = Math.round((distancia * BS_POR_KM) * 100) / 100

    $('#distanciaText').text(distancia + ' Km')
    $('#tiempoAproximadoText').text((Math.round((tiempoAprox / 60) * 10) / 10) + ' Minutos')
    $('#saldoACobrarText').text(saldoACobrar + ' Bs')
}

function calculateRoute() {
    dataLayer.clear();

    directionsManager.calculateDirections()
}

function directionsUpdated(e) {
    llenarDatosContainerResultadosDeRuta()
}

function directionsError(e) {
    console.log(e)
    if (e.responseCode == 'CantFindNearbyRoad') {
        alert('No se encuentra una ruta para llegar el destino')
    }
}

function shapeClicked(e) {
    console.log(e)
    //Make sure the infobox has metadata to display.
    if (e.primitive.metadata) {
        //Set the infobox options with the metadata of the pushpin.
        infobox.setOptions({
            location: e.primitive.getLocation(),
            title: e.primitive.metadata.Name,
            description: 'Store Type: ' + e.primitive.metadata.StoreType,
            visible: true
        });
    }
}

function botonColocarWaypoint(e) {
    const latitude = e.location.latitude
    const longitude = e.location.longitude

    colocarWaypoint(latitude, longitude, eventoActivo)
    if (eventoActivo == 'FROM') {
        $('#inputFrom').val(`${latitude}; ${longitude}`)
    } else {
        $('#inputTo').val(`${latitude}; ${longitude}`)
    }
    eventoActivo = undefined
    Microsoft.Maps.Events.removeHandler(idEventoActivo)
    idEventoActivo = undefined
    document.getElementsByClassName('MicrosoftMap')[0].style.cursor = 'initial'

}

function llenarDatosEstadoTraslado(data) {
    $('#cardEstadotraslado').removeClass('d-none')
    $('#cardTraslado').addClass('d-none')

    const distancia = Math.round(data.distancia * 100) / 100
    const tiempoAprox = Math.round((data.tiempo / 60) * 100) / 100
    const saldoACobrar = Math.round((distancia * BS_POR_KM) * 100) / 100

    $('#saldoCobradoTraslado').text(saldoACobrar + ' Bs')
    $('#tiempoAproxTraslado').text(tiempoAprox + ' Minutos')
    $('#distanciaTraslado').text(distancia + ' Km')

    directionsManagerEstadoTraslado.clearAll()

    mapEstadoTraslado.setView({
        center: puntoA.getLocation(),
        zoom: 15
    })

    directionsManagerEstadoTraslado.addWaypoint(new Microsoft.Maps.Directions.Waypoint({ location: puntoA.getLocation() }))
    directionsManagerEstadoTraslado.addWaypoint(new Microsoft.Maps.Directions.Waypoint({ location: puntoB.getLocation() }))

    directionsManagerEstadoTraslado.calculateDirections()

    $('#estadoDelTraslado').text(data.estado)
    $('#codigoTraslado').text(data.id)
    $('#colorVehiculo').text(data.vehiculo.color)
    $('#placaVehiculo').text(data.placaVehiculo)
    $('#telefonoChofer').text(data.chofer.telefono)
    $('#nombreChofer').text(`${data.chofer.nombres} ${data.chofer.apellidos}`)
}

function GetMap() {
    navigator.geolocation.getCurrentPosition((position) => {
        map = new Microsoft.Maps.Map('#mapa', {
            center: new Microsoft.Maps.Location(position.coords.latitude, position.coords.longitude),
            zoom: 15
        });

        //Create a layer for rendering the data that is along a route.
        dataLayer = new Microsoft.Maps.Layer();

        //Add the layer to the map.
        map.layers.insert(dataLayer);


        //Create an infobox at the center of the map but don't show it.
        infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
            visible: false
        });

        //Assign the infobox to a map instance.
        infobox.setMap(map);

        //Add click event to shapes in the data layer.
        Microsoft.Maps.Events.addHandler(dataLayer, 'click', shapeClicked);

        let center = map.getCenter();

        puntoA = new Microsoft.Maps.Pushpin(center, {
            text: 'A',
            title: 'FROM'
        });

        map.entities.push(puntoA)

        $('#inputFrom').val('Mi Ubicacion')

        $('#contenedorBuscador').removeClass('d-none')

        //Load the directions and spatial data service modules.
        Microsoft.Maps.loadModule(['Microsoft.Maps.Directions', 'Microsoft.Maps.SpatialDataService'], function () {
            //Create an instance of the directions manager.
            directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);

            directionsManager.setRequestOptions({
                distanceUnit: 'km',
                routeDraggable: false
            })

            Microsoft.Maps.Events.addHandler(directionsManager, 'directionsError', directionsError);
            Microsoft.Maps.Events.addHandler(directionsManager, 'directionsUpdated', directionsUpdated);
            directionsManager.addWaypoint(new Microsoft.Maps.Directions.Waypoint({ location: center }))

            mapEstadoTraslado = new Microsoft.Maps.Map('#mapaEstadoDelTraslado', {
                // center: new Microsoft.Maps.Location(position.coords.latitude, position.coords.longitude),
                zoom: 15
            });

            directionsManagerEstadoTraslado = new Microsoft.Maps.Directions.DirectionsManager(mapEstadoTraslado)

            directionsManagerEstadoTraslado.setRequestOptions({
                distanceUnit: 'km',
                routeDraggable: false
            })
            comprobarTrasladoActivo()
        });
    }, (err) => {
        map = new Microsoft.Maps.Map('#mapa', {
            zoom: 15
        })
        console.log(err)
        if (err.code == 1) {
            alert('Por favor permitir la geolocalizacion al navegador')
        }

        $('#contenedorBuscador').removeClass('d-none')

        Microsoft.Maps.loadModule(['Microsoft.Maps.Directions', 'Microsoft.Maps.SpatialDataService'], function () {
            //Create an instance of the directions manager.
            directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);

            directionsManager.setRequestOptions({
                distanceUnit: 'km',
                routeDraggable: false
            })

            Microsoft.Maps.Events.addHandler(directionsManager, 'directionsError', directionsError);
            Microsoft.Maps.Events.addHandler(directionsManager, 'directionsUpdated', directionsUpdated);

            mapEstadoTraslado = new Microsoft.Maps.Map('#mapaEstadoDelTraslado', {
                // center: new Microsoft.Maps.Location(position.coords.latitude, position.coords.longitude),
                zoom: 15
            });

            directionsManagerEstadoTraslado = new Microsoft.Maps.Directions.DirectionsManager(mapEstadoTraslado)
            directionsManagerEstadoTraslado.setRequestOptions({
                distanceUnit: 'km',
                routeDraggable: false
            })
            comprobarTrasladoActivo()
        });

    })
}