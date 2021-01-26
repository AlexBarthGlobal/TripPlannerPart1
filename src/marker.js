import mapboxgl from "mapbox-gl";

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

export const output = [];

export const buildMarker = function(type, coords) {
    output.push(new mapboxgl.Marker({
    color: "#FFFFFF",
    draggable: true,
    }).setLngLat(coords)
    )
};

// export default {buildMarker, output}


















// let images = {
//     Activity: 'http://i.imgur.com/WbMOfMl.png',
//     Hotel: 'http://i.imgur.com/D9574Cu.png',
//     Restaurant: 'http://i.imgur.com/cqR6pUI.png'
// }


// function createMarker (lat, lon, event, image) {
//     return new mapboxgl.Marker({
//         color: "#FFFFFF",
//         draggable: true
//         }).setLngLat([lat, lon])
//         .addTo(map);

// }