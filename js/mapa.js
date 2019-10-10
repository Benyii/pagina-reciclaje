function moveMapToBerlin(map){
 	map.setCenter({lat:-33.5, lng:-70.6});
  	map.setZoom(10.6);
	}

function addMarkersToMap(map) {
    var parisMarker = new H.map.Marker({lat:-33.5174925, lng:-70.7146001});
    map.addObject(parisMarker);

    var romeMarker = new H.map.Marker({lat:-33.4020196, lng: -70.574885});
    map.addObject(romeMarker);

    var berlinMarker = new H.map.Marker({lat:-33.4407018, lng:-70.5400381});
    map.addObject(berlinMarker);

    var madridMarker = new H.map.Marker({lat:-33.3540914, lng: -70.6705297});
    map.addObject(madridMarker);

    var londonMarker = new H.map.Marker({lat:-33.4188497, lng:-70.6784188});
    map.addObject(londonMarker);
}


// Initialize the platform object:
        var platform = new H.service.Platform({
        'apikey': 'IROzlrp3xRwZI_jpoELbG_id5X4l80-EOK2c1nLtC34'
        });

        // Obtain the default map types from the platform object:
	 var maptypes = platform.createDefaultLayers();

        // Instantiate (and display) a map object:
        var map = new H.Map(
        document.getElementById('mapContainer'),
        maptypes.vector.normal.map,
        {
        zoom: 10.6,
        center: { lng: -70.6, lat: -33.5 }
        });
	
	window.addEventListener('resize', () => map.getViewPort().resize());

	//Step 3: make the map interactive
	// MapEvents enables the event system
	// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
	var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

	// Create the default UI components
	var ui = H.ui.UI.createDefault(map, maptypes);

	// Now use the map as required...
	window.onload = function () {
  	moveMapToBerlin(map);
	addMarkersToMap(map);
}