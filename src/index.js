import mapboxgl from "mapbox-gl";
import {buildMarker, output} from "./marker";
// import {output} from "./marker";

mapboxgl.accessToken = "pk.eyJ1IjoiYWxleGJhcnRoIiwiYSI6ImNra2U4ZXl0azBhNWIydm8xOXY3NmFvZHIifQ.iHdtfjDFOKwjqdQfHY5ovA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

//let marker = buildMarker("activity", [-74.009151, 40.705086]);
buildMarker("activity", [-74.009151, 40.705086]);
// marker.addTo(map);

//let markerTwo = buildMarker("activity", [-40.009151, 50.705086]);
buildMarker("activity", [-75.009151, 40.3205086]);
// markerTwo.addTo(map);

output.forEach(elem => elem.addTo(map))




//Working solution
// var marker = new mapboxgl.Marker({
//     color: "#FFFFFF",
//     draggable: true,
//     }).setLngLat([-74.009, 40.705])
//     .addTo(map);

// const newMarker = document.createElement("div")

//     marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// var marker = new mapboxgl.Marker({
//     color: "#FFFFFF",
//     draggable: true,
//     }).setLngLat([-74.009, 40.705])
//     .addTo(map);

// const markerDomEl = document.createElement("div");
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// var marker = new mapboxgl.Marker({
//     color: "#FFFFFF",
//     draggable: true,
//     }).setLngLat([-74.009, 40.705])
//     .addTo(map);

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

// var marker = new mapboxgl.Marker()
// .setLngLat([-70.009, 40.705])
// .addTo(map);
// Copy
// Set options

// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map); // [-87.641, 41.895] for Chicago


// console.log("Hello from JavaScript");


// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
// mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleGJhcnRoIiwiYSI6ImNra2U4ZXl0azBhNWIydm8xOXY3NmFvZHIifQ.iHdtfjDFOKwjqdQfHY5ovA';
// var map = new mapboxgl.Map({
// container: 'YOUR_CONTAINER_ELEMENT_ID',
// style: 'mapbox://styles/mapbox/streets-v11'
// });