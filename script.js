function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const mapsLink = `https://www.google.com/maps?q=${lat},${lon}`;
      document.getElementById("autoLocation").value = mapsLink;
    }, function (error) {
      alert("Location access denied. Please enable location permissions.");
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}
