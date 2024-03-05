let mapaTraslado

/**
 * 
 * @param {string} puntoA 
 * @param {string} puntoB 
 */
function InsertarPuntosEnMapa (puntoA, puntoB) {

    const latitudA = parseFloat(puntoA.split(';')[0])
    const latitudB = parseFloat(puntoB.split(';')[0])

    const longitudA = parseFloat(puntoA.split(';')[1])
    const longitudB = parseFloat(puntoB.split(';')[1])

    const locationA = new Microsoft.Maps.Location(latitudA, longitudA)

    const locationB = new Microsoft.Maps.Location(latitudB, longitudB)

    const pinA = new Microsoft.Maps.Pushpin(locationA, {
        title: 'From'
    })
    const pinB = new Microsoft.Maps.Pushpin(locationB, {
        title: 'To'
    })

    mapaTraslado.setView({
        center: locationA,
        zoom: 10
    })

    mapaTraslado.entities.clear()

    mapaTraslado.entities.push(pinA)
    mapaTraslado.entities.push(pinB)
}

function GetMap(){
    mapaTraslado = new Microsoft.Maps.Map('#mapaTraslado', {
        zoom: 15
    });
}
