const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiaWFtcHJha3VsIiwiYSI6ImNtNmpkeXJxbTBpaXcyanFzOG8yYm5jamIifQ.X1wpUHjEZ3Mqcu6VcD7bjw";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })

function setupMap(centerPosition) {
    const map = new mapboxgl.Map({
        accessToken: MAPBOX_ACCESS_TOKEN,
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v12", // style URL
        zoom: 12, // starting zoom
        center: centerPosition,
    })

    const navigationControls = new mapboxgl.NavigationControl();
    map.addControl(navigationControls)

    const directionControls = new MapboxDirections({
        accessToken: MAPBOX_ACCESS_TOKEN
    })
    map.addControl(directionControls, "top-left")
}

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([-2.24, 53.48])

}


