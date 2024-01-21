var map = L.map("map").setView([60.2239959, 24.7559336], 13); // Update the coordinates

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var marker = L.marker([60.2239959, 24.7559336]).addTo(map); // Update the coordinates
var popup = L.popup()
  .setLatLng([60.2239959, 24.7559336]) // Update the coordinates
  .setContent("Coffee Company") // Update with your cafe name or any other content
  .openOn(map);
