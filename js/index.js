// This sample uses the Place Autocomplete widget to allow the user to search
// for and select a place. The sample then displays an info window containing
// the place ID and other information about the place that the user has
// selected.

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -33.8688, lng: 151.2195},
        zoom: 7
    });

    initLocationAutoComplete();

    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
        map: map
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}

function initLocationAutoComplete() {
    $('.trip-builder-form .location-search').each( function() {
        var input = $(this)[0];
        var autoComplete = new google.maps.places.Autocomplete(input);
    });
}

function drawPolylines(place)
{
    var coordinates = [
        new google.maps.LatLng(place.latitude, place.longitude),
        me
    ];
    var polyline = new google.maps.Polyline({
        path: coordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });
    polyline.setMap(map);
}

function renderMap()
{
    me = new google.maps.LatLng(myLat, myLng);
    map.panTo(me);
    map.setZoom(6);
    var image = 'small_blue_ball.png';
    var marker = new google.maps.Marker({
        position: me,
        map: map,
        icon: image
    });
}
