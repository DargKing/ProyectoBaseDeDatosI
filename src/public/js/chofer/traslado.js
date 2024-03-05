let map, userPin, watchId

function UsersLocationUpdated(position) {
    var loc = new Microsoft.Maps.Location(
                position.coords.latitude,
                position.coords.longitude);

    //Update the user pushpin.
    userPin.setLocation(loc);
    userPin.setOptions({ visible: true });

    //Center the map on the user's location.
    map.setView({ center: loc });
}

function GetMap() {
    navigator.geolocation.getCurrentPosition((position) => {
        map = new Microsoft.Maps.Map('#mapaTraslado', {
            center: new Microsoft.Maps.Location(position.coords.latitude, position.coords.longitude),
            zoom: 15
        })

        userPin = new Microsoft.Maps.Pushpin(map.getCenter(), { visible: false });
        map.entities.push(userPin);

        //Watch the users location.
        watchId = navigator.geolocation.watchPosition(UsersLocationUpdated);
    }, (err) => {
        map = new Microsoft.Maps.Map('#mapaTraslado', {
            zoom: 15
        })
        console.log(err)
        if (err.code == 1) {
            alert('Por favor permitir la geolocalizacion al navegador')
        }
    })
}