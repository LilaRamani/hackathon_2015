// This sample uses the Place Autocomplete widget to allow the user to search
// for and select a place. The sample then displays an info window containing
// the place ID and other information about the place that the user has
// selected.

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -33.8688, lng: 151.2195},
        zoom: 12
    });

    initLocationAutoComplete();
}

function initLocationAutoComplete() {
    $('.trip-builder-form .location-search').each( function() {
        var input = $(this)[0];
        var autoComplete = new google.maps.places.Autocomplete(input);
    });
}
