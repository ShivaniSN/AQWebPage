function drawShape() {
            
            // get the canvas element using the DOM
            var canvas = document.getElementById('mycanvas');
            
            // Make sure we don't execute when canvas isn't supported
            if (canvas.getContext) {
            
               // use getContext to use the canvas for drawing
               var ctx = canvas.getContext('2d');
               
               // Draw shapes
               var img = new Image();               
               img.onload = function(){
				   ctx.drawImage(img,10,10);
			   }
			   img.src = 'https://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';
            } else {
               alert('You need Safari or Firefox 1.5+ to see this demo.');
            }
         }
};

var map = null;
function showlocation() {
	// One-shot position request.
	navigator.geolocation.getCurrentPosition(callback);
}
    	
function callback(position) {
      	
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
      	
	document.getElementById('latitude').innerHTML = lat;
	document.getElementById('longitude').innerHTML = lon;
           	
    var latLong = new google.maps.LatLng(lat, lon);
      	
	var marker = new google.maps.Marker({position: latLong});      
				
	marker.setMap(map);
    map.setZoom(8);
    map.setCenter(marker.getPosition());
}
      
google.maps.event.addDomListener(window, 'load', initMap);
function initMap() {
    var mapOptions = {center: new google.maps.LatLng(0, 0),
          zoom: 1,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
      
}

function hideQuestions() {
    var x = document.getElementById("jsonquestions");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
} 