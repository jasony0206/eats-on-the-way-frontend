function putMarker(latitude, longitude) {
  var marker = new google.maps.Marker({
    position: {lat: latitude, lng: longitude},
    map: map
  });

  markers.push(marker);
}

function removeMarkers() {
  var length = markers.length;
  for (i = 0; i < length; i++) {
    markers[i].setMap(null);
  }
}

// Must wait until initMap is called before trying to access mapObject
// setTimeout(function() {console.log(mapObject)},3000);
