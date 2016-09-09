function initializeMap() {
  var mapCanvas = document.getElementById('map');
  var losAngeles = {lat: 34.05, lng: -118.25};
  var italy = {lat: 41.90, lng: 12.48};

  var mapOptions = {
    center: losAngeles,
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  mapObject = new google.maps.Map(mapCanvas, mapOptions);
  markers = [];

  var inputOrigin = /** @type {!HTMLInputElement} */(document.getElementById('originInput'));
  var inputDestination = /** @type {!HTMLInputElement} */(document.getElementById('destinationInput'));

  var originAutocomplete = new google.maps.places.Autocomplete(inputOrigin);
  var destinationAutocomplete = new google.maps.places.Autocomplete(destinationInput);

  originAutocomplete.bindTo('bounds', mapObject);
  destinationAutocomplete.bindTo('bounds', mapObject);

  var infowindow = new google.maps.InfoWindow();

  var originMarker = new google.maps.Marker({
    map: mapObject,
    anchorPoint: new google.maps.Point(0, -29)
  });

  var destinationMarker = new google.maps.Marker({
    map: mapObject,
    anchorPoint: new google.maps.Point(0, -29)
  });

  originAutocomplete.addListener('place_changed', function() {
    infowindow.close();
    originMarker.setVisible(false);
    var place = originAutocomplete.getPlace();
    if (!place.geometry) {
      window.alert("Autocomplete's returned place contains no geometry");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      mapObject.fitBounds(place.geometry.viewport);
    } else {
      mapObject.setCenter(place.geometry.location);
      mapObject.setZoom(17);  // Why 17? Because it looks good.
    }
    originMarker.setIcon(/** @type {google.maps.Icon} */({
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(35, 35)
    }));
    originMarker.setPosition(place.geometry.location);
    originMarker.setVisible(true);

    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }

    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
    infowindow.open(mapObject, originMarker);
  });

  destinationAutocomplete.addListener('place_changed', function() {
    infowindow.close();
    destinationMarker.setVisible(false);
    var place = destinationAutocomplete.getPlace();
    if (!place.geometry) {
      window.alert("Autocomplete's returned place contains no geometry");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      mapObject.fitBounds(place.geometry.viewport);
    } else {
      mapObject.setCenter(place.geometry.location);
      mapObject.setZoom(17);  // Why 17? Because it looks good.
    }
    destinationMarker.setIcon(/** @type {google.maps.Icon} */({
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(35, 35)
    }));
    destinationMarker.setPosition(place.geometry.location);
    destinationMarker.setVisible(true);

    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }

    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
    infowindow.open(mapObject, destinationMarker);
  });

  // Initialize directions renderer
  directionsDisplay = new google.maps.DirectionsRenderer();
  directionsDisplay.setMap(mapObject);
}
