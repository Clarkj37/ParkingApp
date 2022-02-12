function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 47.245009704980454, lng: -122.437795569982 },
        zoom: 16,
        mapId: '8da7054fc3046b02'
    });

    const markers = [
        [
            "Republic Parking (Cragle Lot)",
            47.24354673546066,
            -122.43809363900421,
            '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h4>Republic Parking (Cragle Lot)</h4>' +
            '<div>' +

            "</div>" +
            "</div>"
        ]
    ];

    for (let i = 0; i < markers.length; i++) {
        const currentMarker = markers[i];
        const marker = new google.maps.Marker({
            position: { lat: currentMarker[1], lng: currentMarker[2] },
            map,
            title: currentMarker[0],
            animation: google.maps.Animation.DROP
        });

        const infowindow = new google.maps.InfoWindow({
            content:currentMarker[3],
        });

        marker.addListener("click", () => {
            infowindow.open(map, marker)
        });
    }
}
