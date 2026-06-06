// =============================
// INITIALIZE MAP
// =============================

var map = L.map('map').setView([12.5, -86.5], 7);


// =============================
// MAP TILES
// =============================

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles © Esri — Source: Esri, USGS, NOAA',
    maxZoom: 18
}).addTo(map);


// =============================
// MARKERS
// =============================

var masayaMarker = L.marker([11.984, -86.161]).addTo(map);

masayaMarker.bindPopup(
    "<b>Masaya Volcano</b><br><a href='Volcanoes/masaya.html'>Open page</a>"
);


var telicaMarker = L.marker([12.602, -86.845]).addTo(map);

telicaMarker.bindPopup(
    "<b>Telica Volcano</b><br><a href='Volcanoes/telica.html'>Open page</a>"
);


var cerroMarker = L.marker([12.506, -86.702]).addTo(map);

cerroMarker.bindPopup(
    "<b>Cerro Negro Volcano</b><br><a href='Volcanoes/cerro-negro.html'>Open page</a>"
);


// =============================
// MARKER HOVER EFFECT FUNCTION
// =============================

function addMarkerHoverEffect(marker, buttonId) {

    // Hover over BUTTON

    document.getElementById(buttonId).addEventListener("mouseenter", function() {

        marker._icon.style.transition = "transform 0.2s ease";

        // Scale from bottom center
        marker._icon.style.transformOrigin = "bottom center";

        marker._icon.style.transform += " scale(1.4)";

    });

    document.getElementById(buttonId).addEventListener("mouseleave", function() {

        marker._icon.style.transform =
            marker._icon.style.transform.replace(" scale(1.4)", "");

    });


    // Hover directly over MARKER

    marker.on("mouseover", function() {

        marker._icon.style.transition = "transform 0.2s ease";

        marker._icon.style.transformOrigin = "bottom center";

        marker._icon.style.transform += " scale(1.4)";

    });

    marker.on("mouseout", function() {

        marker._icon.style.transform =
            marker._icon.style.transform.replace(" scale(1.4)", "");

    });

}


// =============================
// RESET VIEW CONTROL
// =============================

var ResetControl = L.Control.extend({
    options: { position: 'topright' },
    onAdd: function() {
        var btn = L.DomUtil.create('button', 'reset-view-btn');
        btn.innerHTML = 'Reset View';
        btn.title = 'Reset to default view';
        L.DomEvent.on(btn, 'click', function() {
            map.setView([12.5, -86.5], 7);
        });
        L.DomEvent.disableClickPropagation(btn);
        return btn;
    }
});

map.addControl(new ResetControl());


// =============================
// APPLY EFFECTS TO ALL MARKERS
// =============================

window.onload = function() {

    addMarkerHoverEffect(masayaMarker, "masayaBtn");

    addMarkerHoverEffect(telicaMarker, "telicaBtn");

    addMarkerHoverEffect(cerroMarker, "cerroBtn");

};