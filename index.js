let handicapMode = false;
// Open Google Maps directions
function openMaps(lat, lng) {
  const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  window.open(url, "_blank");
}
function openMapsMainBuilding(){
  window.open("https://maps.app.goo.gl/wJVP6bemXHRGtQQd6", "_blank");
}

// Toggle Accessible Parking Route
function toggleHandicap() {
  const map = document.getElementById("campus-map");
  const box = document.getElementById("directions-box");
  const btn = document.querySelector(".handicap");

  if (!handicapMode) {
    map.src = "CampusMapAccess.png"; // image WITH arrow
    box.style.display = "block";
    btn.textContent = "Hide Accessible Parking Directions";
    handicapMode = true;
  } else {
    map.src = "CampusMapFinal.png"; // normal image
    box.style.display = "none";
    btn.textContent = "Show Accessible Parking Directions";
    handicapMode = false;
  }
}

function lockMarkerSizes() {
  const zoom = window.devicePixelRatio; // ratio changes with zoom
  document.querySelectorAll('.lots').forEach(el => {
    el.style.transform = `scale(${1/zoom}) translate(-50%, -50%)`;
  });
}
window.addEventListener('resize', lockMarkerSizes);
lockMarkerSizes();

const arrowLot1 = document.getElementById('arrow-lot1');
const arrowLot1Line = document.getElementById('arrow-lot1-line');
const mapContainer = document.querySelector('.map-container');

// Attach listeners to all .lots buttons
document.querySelectorAll('.lots').forEach(btn => {
  btn.addEventListener('mouseenter', function () {
    // Get button center position
    const btnRect = btn.getBoundingClientRect();
    const mapRect = mapContainer.getBoundingClientRect();
    const btnX = btnRect.left + btnRect.width / 2 - mapRect.left;
    const btnY = btnRect.top + btnRect.height / 2 - mapRect.top;

    // Get target position from data attributes
    const targetTopPercent = parseFloat(btn.getAttribute('data-target-top'));
    const targetLeftPercent = parseFloat(btn.getAttribute('data-target-left'));
    const targetX = mapRect.width * (targetLeftPercent / 100);
    const targetY = mapRect.height * (targetTopPercent / 100);

    // Set SVG line coordinates
    arrowLot1.setAttribute('width', mapRect.width);
    arrowLot1.setAttribute('height', mapRect.height);
    arrowLot1.style.display = 'block';
    arrowLot1Line.setAttribute('x1', btnX);
    arrowLot1Line.setAttribute('y1', btnY);
    arrowLot1Line.setAttribute('x2', targetX);
    arrowLot1Line.setAttribute('y2', targetY);
  });

  btn.addEventListener('mouseleave', function () {
    arrowLot1.style.display = 'none';
  });
});