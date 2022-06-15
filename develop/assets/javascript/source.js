//var map; 
//var infowindow;
//var startingPoint = {lat: -34.397, lng: 150.644};
//
//function initMap(){
//    map = new google.maps.Map(document.getElementById('googlemaps'), {
//        center: {lat: -34.397, lng: 150.644},
//        zoom: 8,
//        mapId: 'edaf7d20d0d3aa9d'
//    });
//}

var map;
var service;
var infowindow;

function initMap() {
  var sydney = new google.maps.LatLng(-33.867, 151.195);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(
      document.getElementById('googlemaps'), {center: sydney, zoom: 15});

  var request = {
    query: 'Museum of Contemporary Art Australia',
    fields: ['name', 'geometry'],
  };

  var service = new google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
      map.setCenter(results[0].geometry.location);
    }
  });
}
//var service = new google.maps.places.PlacesService(map);
//            service.nearbySearch({
//                location : startingPoint,
//                radius : 5500,
//                type : [ 'restaurant' ]
//            }, callback);

//            function callback(results, status) {
//                if (status === google.maps.places.PlacesServiceStatus.OK) {
//                    for (var i = 0; i < results.length; i++) {
//                        createMarker(results[i]);
//                    }
//                }
//            }
//    
//    function createMarker(place) {
//                var placeLoc = place.geometry.location;
//                var marker = new google.maps.Marker({
//                    map : map,
//                    position : place.geometry.location
//                });
//    
//                google.maps.event.addListener(marker, 'click', function() {
//                    infowindow.setContent(place.name);
//                    infowindow.open(map, this);
//                });
//            }

