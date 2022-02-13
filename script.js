function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 47.245009704980454, lng: -122.437795569982 },
        zoom: 17,
        mapId: '8da7054fc3046b02'
    });

    const markers = [
        [
            "Republic Parking (Cragle Lot)",
            47.24354673546066,
            -122.43809363900421,
            '<h4>Republic Parking (Cragle Lot)</h4>'
        ],
        [
            "Diamond Parking Lot",
            47.243823825373646,
            -122.43879538158146,
            '<h4>Diamond Parking Lot</h4>'
        ],
        [
            "Washington State History Museum Parking Lot",
            47.24403095983615,
            -122.43596082635172,
            '<h4>Washington State History Museum Parking Lot</h4>'
        ],
        [
            "Court 17 Garage",
            47.24636054985241,
            -122.43981330806251,
            '<h4>Court 17 Garage</h4>'
        ],
        [
            "Pinkerton",
            47.24659581323548,
            -122.43917691878448,
            '<h4>Pinkerton</h4>'
        ],
        [
            "Whitney Parking Lot",
            47.24491739592806,
            -122.44083116220746,
            '<h4>Whitney Parking Lot</h4>'
        ],
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
            content: currentMarker[3],
        });

        marker.addListener("click", () => {
            infowindow.open(map, marker)
        });
    }
    
    var userMarker;
    function placeMarker(location) {
        

        if ( userMarker ) {
            userMarker.setPosition(location)
          } else {
            userMarker = new google.maps.Marker({
              position: location,
              map: map,
              animation: google.maps.Animation.DROP
            });
          }

        userMarker.addListener("click", () => {
            userInfoWindow.open(map, userMarker)
        });

        const userInfoWindow = new google.maps.InfoWindow({
          //content:,
            content: 
            "    <div> \n" +
            "        <table>\n" +
            "            <tr>\n" +
            "                <td><a>Open Parking Spots:</a></td>\n" +
            "                <td><textarea  id='user_input' placeholder='Open Spots'></textarea></td></tr>\n" +
            "            <tr><td></td><td><input type='button' name='Save' value='Save' onclick='saveData()'/></td></tr>\n" +
            "        </table>\n" +
            "    </div>",
        });

    }
    google.maps.event.addListener(map, 'click', function (event) {
        placeMarker(event.latLng);
    });
}
