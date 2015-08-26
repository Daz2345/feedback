Template.heatMap.rendered = function() {

    var hmValues = this.data.heatMapData
        
    this.autorun(function () {
        if (Mapbox.loaded('markercluster', 'zoomslider')) {
            L.mapbox.accessToken = 'pk.eyJ1IjoiZGF6MjM0NSIsImEiOiJmNDkwNmQ2NjllNzg5NDFiZWQ1M2I0OGUxMzBmZGU3MSJ9.W70b10qRbEkzfJdlKP6Fhw';
            var map = L.mapbox.map('map', 'mapbox.streets', {
                zoomControl: false
            })
                .setView([54.104, -2.921], 6);
    
        L.control.zoomslider().addTo(map);
    
        var hmData = Papa.parse(hmValues).data;            
        var markers = new L.MarkerClusterGroup();

        for (var i = 0; i < hmData.length; i++) {
            var a = hmData[i];
            var title = a[2];
            var marker = L.marker(new L.LatLng(a[0], a[1]), {
                title: title
            });
            marker.bindPopup(title);
            markers.addLayer(marker);
        }
        map.addLayer(markers);
        }
    });    

}