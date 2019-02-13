var map = new L.Map('map', {center: new L.LatLng(0, 0), zoomControl: false});
var Esri_WorldGrayCanvas = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Esri',
	maxZoom: 16
});
var places = new L.KML("kml/places.kml", {async: true});
places.on("loaded", function(e) {
	map.fitBounds(e.target.getBounds());
});
var flights = new L.KML("kml/flights.kml", {async: true});
map.addLayer(Esri_WorldGrayCanvas);
map.addLayer(places);
map.addLayer(flights);
