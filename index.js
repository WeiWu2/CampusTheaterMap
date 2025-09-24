let handicapMode = false;
// Open Google Maps directions
function openMaps(lat, lng) {
  const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  window.open(url, "_blank");
}

// Toggle Accessible Parking Route
function toggleHandicap() {
  const map = document.getElementById("campus-map");
  const box = document.getElementById("directions-box");
  const btn = document.querySelector(".handicap");

  if (!handicapMode) {
    map.src = "CampusMapTest2Access.jpg"; // image WITH arrow
    box.style.display = "block";
    btn.textContent = "Hide Accessible Parking Directions";
    handicapMode = true;
  } else {
    map.src = "CampusMapTest2.jpg"; // normal image
    box.style.display = "none";
    btn.textContent = "Show Accessible Parking Directions";
    handicapMode = false;
  }
}
