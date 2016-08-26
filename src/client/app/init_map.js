function initializeMap() {
  var mapCanvas = document.getElementById('map');
  var losAngeles = {lat: 34.05, lng: -118.25};
  var italy = {lat: 41.90, lng: 12.48};

  var mapOptions = {
    center: losAngeles,
    zoom: 2,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  mapObject = new google.maps.Map(mapCanvas, mapOptions);
  markers = [];
}
