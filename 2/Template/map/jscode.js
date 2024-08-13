navigator.geolocation.getCurrentPosition(func1,func2);

function func1(position) {
    console.log("success");
    var mylat = position.coords.latitude;
    var mylng = position.coords.longitude;

    initMap(mylat,mylng)
    
}
function func2() {
    console.log("failed")
}


function initMap(mylat,mylng) {
    const myLatLng = { lat: mylat, lng: mylng };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: myLatLng,
    });
  
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
    });
  }
  
  window.initMap = initMap;
  