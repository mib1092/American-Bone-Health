//
//function initMap() {
//    var map = new google.maps.Map(document.getElementById('map'), {
//        zoom: 10,
//        center: {lat: -33.9, lng: 151.2},
//        zoomControl: false,
//        mapTypeControl: false,
//        scaleControl: false,
//        streetViewControl: false,
//        rotateControl: false
//
//    });
//
//    setMarkers(map);
//}

function initialize() {
    var myOptions = {
        zoom: 10,
        center:  {lat: -33.9, lng: 151.2},
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById('map'), myOptions);
    setMarkers(map);
}

var beaches = [
    ['Bondi Beach', -33.890542, 151.274856, 4],
    ['Coogee Beach', -33.923036, 151.259052, 5],
    ['Cronulla Beach', -34.028249, 151.157507, 3],
    ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
    ['Maroubra Beach', -33.950198, 151.259302, 1]
];

function setMarkers(map) {
    var image = {
        url: 'img/content/marker.png',
        size: new google.maps.Size(44, 48),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(15, 48)
    };
    var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
    };
    for (var i = 0; i < beaches.length; i++) {
        var beach = beaches[i];
        var marker = new google.maps.Marker({
            position: {lat: beach[1], lng: beach[2]},
            map: map,
            icon: image,
            shape: shape,
            title: beach[0],
            zIndex: beach[3]
        });
    }
}
