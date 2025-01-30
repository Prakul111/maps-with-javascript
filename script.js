const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiaWFtcHJha3VsIiwiYSI6ImNtNmpkeXJxbTBpaXcyanFzOG8yYm5jamIifQ.X1wpUHjEZ3Mqcu6VcD7bjw";

const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
});


navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })

const styles = StyleSheet.create({ RTCCertificatehrt })