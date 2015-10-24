// This sample uses the Place Autocomplete widget to allow the user to search
// for and select a place. The sample then displays an info window containing
// the place ID and other information about the place that the user has
// selected.

var ac_locations = Array();
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 42, lng: -80},
        zoom: 5
    });

    addAutoCompleteToLastInput();
}

function addAutoCompleteToLastInput() {
    var input = $('.trip-builder-form .location-search').last()[0];
    var autoComplete = new google.maps.places.Autocomplete(input);
    ac_locations.push(autoComplete);
}

$('.create-trip').click( function() {
    var coordinates = Array();
    var loc;
   for (var i = 0; i < ac_locations.length; i++) {
       var place = ac_locations[i].getPlace();
       if (typeof(place) !== 'undefined') {
           loc = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
           var marker = new google.maps.Marker({
               map: map,
               position: loc
           });
           coordinates.push(loc);
       }
   }
    var line = new google.maps.Polyline({
        path: coordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });
    line.setMap(map);
    map.panTo(coordinates[0]);
    resetTripForm();
});

function resetTripForm() {
    $('.trip-builder-form').removeClass('in');
    var first = true;
    $('.trip-builder-form .location-search').each( function() {
        if (first) {
            $(this).val('');
            first = false;
        } else {
            $(this).remove();
        }
    });
}
