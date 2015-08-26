Meteor.startup(function() {

    Mapbox.load({
        plugins: ['markercluster', 'zoomslider']
    });
    
})