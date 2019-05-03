       function main() {
           var map = new L.Map('map', {
               zoomControl: true,
               center: [52.2297, 21.0117],
               zoom: 11
           });
           //           L.tileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png', {
           //               attribution: 'Stamen'
           //           }).addTo(map);

           L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
               attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
           }).addTo(map);

           //dodany pin
           var marker = L.marker([52.2297, 21.0117]).addTo(map);


           //dodana skala
           L.control.scale().addTo(map);

           //dodana warstwa polska wms server
//L.tileLayer.wms("http://mapy.geoportal.gov.pl/wss/service/img/guest/ORTO/MapServer/WMSServer",
//{layers:"Raster",format: 'image/png',transparent : 'true',version : '1.1.1'}).addTo(map);


var vectorStyles = {
  water: {	// Apply these options to the "water" layer...
    fill: true,
    weight: 1,
    fillColor: '#06cccc',
    color: '#06cccc',
    fillOpacity: 0.2,
    opacity: 1,
  },
  transportation: {	// Apply these options to the "transportation" layer...
    weight: 0.5,
    color: '#f2b648',
    fillOpacity: 0.2,
    opacity: 1,
  },

  // And so on, until every layer in https://openmaptiles.org/schema/ has a style

  // aeroway:
  // boundary:
  // building:
  // housenumber:
  // landcover:
  // landuse:
  // park:
  // place:
  // poi:
  // transportation:
  // transportation_name:
  // water:
  // water_name:
  // waterway:
};
    
       }
       // you could use $(window).load(main);
       window.onload = main;