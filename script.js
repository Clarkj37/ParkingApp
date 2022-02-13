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
            '<center><h4>"Republic Parking (Cragle Lot)</h4></center>' +
            "    <div> \n" +
            "        <table>\n" +
            "                <td>Current Parking Spots: </td>\n" +
            "            <tr>\n" +
            "                <td>Open Parking Spots:</td>\n" +
            "                <td><textarea  id='user_input' placeholder='Open Spots'></textarea></td></tr>\n" +
            "            <tr><td></td><td><input type='button' name='Save' value='Save' onclick='saveData()'/></td></tr>\n" +
            "        </table>\n" +
            "    </div>"
        ],
        [
            "Diamond Parking Lot",
            47.243823825373646,
            -122.43879538158146,
            '<center><h4>Diamond Parking Lot</h4></center>' +
            "    <div> \n" +
            "        <table>\n" +
            "                <td>Current Parking Spots: </td>\n" +
            "            <tr>\n" +
            "                <td>Open Parking Spots:</td>\n" +
            "                <td><textarea  id='user_input' placeholder='Open Spots'></textarea></td></tr>\n" +
            "            <tr><td></td><td><input type='button' name='Save' value='Save' onclick='saveData()'/></td></tr>\n" +
            "        </table>\n" +
            "    </div>"
        ],
        [
            "Washington State History Museum Parking Lot",
            47.24403095983615,
            -122.43596082635172,
            '<center><h4>Washington State History Museum Parking Lot</h4></center>' +
            "    <div> \n" +
            "        <table>\n" +
            "                <td>Current Parking Spots: </td>\n" +
            "            <tr>\n" +
            "                <td>Open Parking Spots:</td>\n" +
            "                <td><textarea  id='user_input' placeholder='Open Spots'></textarea></td></tr>\n" +
            "            <tr><td></td><td><input type='button' name='Save' value='Save' onclick='saveData()'/></td></tr>\n" +
            "        </table>\n" +
            "    </div>"
        ],
        [
            "Court 17 Garage",
            47.24636054985241,
            -122.43981330806251,
            '<center><h4>Court 17 Garage</h4></center>' +
            "    <div> \n" +
            "        <table>\n" +
            "                <td>Current Parking Spots: </td>\n" +
            "            <tr>\n" +
            "                <td>Open Parking Spots:</td>\n" +
            "                <td><textarea  id='user_input' placeholder='Open Spots'></textarea></td></tr>\n" +
            "            <tr><td></td><td><input type='button' name='Save' value='Save' onclick='saveData()'/></td></tr>\n" +
            "        </table>\n" +
            "    </div>"
        ],
        [
            "Pinkerton",
            47.24659581323548,
            -122.43917691878448,
            '<center><h4>Pinkerton</h4></center>' +
            "    <div> \n" +
            "        <table>\n" +
            "                <td>Current Parking Spots: </td>\n" +
            "            <tr>\n" +
            "                <td>Open Parking Spots:</td>\n" +
            "                <td><textarea  id='user_input' placeholder='Open Spots'></textarea></td></tr>\n" +
            "            <tr><td></td><td><input type='button' name='Save' value='Save' onclick='saveData()'/></td></tr>\n" +
            "        </table>\n" +
            "    </div>"
        ],
        [
            "Whitney Parking Lot",
            47.24491739592806,
            -122.44083116220746,
            '<center><h4>Whitney Parking Lot</h4></center>' +
            "    <div> \n" +
            "        <table>\n" +
            "                <td>Current Parking Spots: </td>\n" +
            "            <tr>\n" +
            "                <td>Open Parking Spots:</td>\n" +
            "                <td><textarea  id='user_input' placeholder='Open Spots'></textarea></td></tr>\n" +
            "            <tr><td></td><td><input type='button' name='Save' value='Save' onclick='saveData()'/></td></tr>\n" +
            "        </table>\n" +
            "    </div>"
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
}
