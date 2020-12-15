 
window.onload= function() {
 //Béjaia map 	
 var map= L.map('map').setView([36.7508896 , 5.0567333], 12);
 
 
 L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    minZoom:9,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaWRyaXN6IiwiYSI6ImNrZzU2Ynh5ODBiaGwydnBnenBwbHliZ2cifQ.eIAx_meSJi7FMndrYIgUbw',
   
     }).addTo(map);
//popup to display gps coordinates
var popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Coordonnées " +'( '+ e.latlng +' )')
        .openOn(map);
      
      
}

map.on('click', onMapClick);

}
