function initMap() {
	L.mapquest.key = 'pES67bynAZfQsJqZM43VinQfKHub68oW';

	var map = L.mapquest.map('map', {
		center: [32.878924, -117.235911],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.878924, -117.235911]).addTo(map);
}