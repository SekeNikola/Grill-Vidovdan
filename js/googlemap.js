function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(44.868575, 20.473336),
        zoom: 20,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    }