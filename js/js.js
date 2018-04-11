       function main() {
        var map = new L.Map('map', {
          zoomControl: true,
          center: [52.2297, 21.0117],
          zoom: 11
        });
        L.tileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png', {
          attribution: 'Stamen'
        }).addTo(map);
        cartodb.createLayer(map, 'http://documentation.cartodb.com/api/v2/viz/2b13c956-e7c1-11e2-806b-5404a6a683d5/viz.json')
            .addTo(map)
         .on('done', function(layer) {
          layer.setInteraction(true);
          layer.on('featureOver', function(e, latlng, pos, data) {
            cartodb.log.log(e, latlng, pos, data);
          });
          layer.on('error', function(err) {
            cartodb.log.log('error: ' + err);
          });
        }).on('error', function() {
          cartodb.log.log("some error occurred");
        });
      }
      // you could use $(window).load(main);
      window.onload = main;

$('#remove').click(function() {
      $('div.cartodb-legend.choropleth').remove();
    });
    