mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: "map", // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: listing.geometry.coordinates, // starting position [lng, lat]
    zoom: 8, // starting zoom
});

const marker = new mapboxgl.Marker({color : "red"})
.setLngLat(listing.geometry.coordinates)
.setPopup(new mapboxgl.Popup({offset:25}).setHTML(
    `<h5>${listing.title}</h5><p>Exact Location will be provided after booking</p>`
))
.addTo(map);