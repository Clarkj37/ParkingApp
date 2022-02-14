function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 47.245009704980454, lng: -122.437795569982 },
        zoom: 17,
        mapId: '8da7054fc3046b02'
    });

    var parkingSpots = 0;

    const markers = [
        [
            "Republic Parking (Cragle Lot)",
            47.24354673546066,
            -122.43809363900421,
            `
            <div id='infoWindow'>
                <script>
                    function Savedata() {
                    var x = document.getElementById('user_input').value;
                    document.getElementById('spots').innerHTML = x;
                    };
                </script>
                <center>
                    <h4>Republic Parking (Cragle Lot)</h4>
                </center>
                <div>
                    <table>
                        <tr>
                            <td>Current Parking Spots: </td>
                            <td id='spots'></td>
                        </tr>
                        <tr>
                            <td>Open Parking Spots: </td>
                            <td><textarea id=user_input placeholder='Open Spots'></textarea></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type='button' name='Save' value='Save' onclick='Savedata()' /></td>
                        </tr>
                    </table>
                </div>
                </div>`
        ],
        [
            "Diamond Parking Lot",
            47.243823825373646,
            -122.43879538158146,
            `
            <div id='infoWindow'>
                <script>
                    function Savedata() {
                    var x = document.getElementById('user_input').value;
                    document.getElementById('spots').innerHTML = x;
                    };
                </script>
                <center>
                    <h4>Diamond Parking Lot</h4>
                </center>
                <div>
                    <table>
                        <tr>
                            <td>Current Parking Spots: </td>
                            <td id='spots'></td>
                        </tr>
                        <tr>
                            <td>Open Parking Spots: </td>
                            <td><textarea id=user_input placeholder='Open Spots'></textarea></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type='button' name='Save' value='Save' onclick='Savedata()' /></td>
                        </tr>
                    </table>
                </div>
                </div>`
        ],
        [
            "Washington State History Museum",
            47.24403095983615,
            -122.43596082635172,
            `
            <div id='infoWindow'>
                <script>
                    function Savedata() {
                    var x = document.getElementById('user_input').value;
                    document.getElementById('spots').innerHTML = x;
                    };
                </script>
                <center>
                    <h4Washington State History Museum</h4>
                </center>
                <div>
                    <table>
                        <tr>
                            <td>Current Parking Spots: </td>
                            <td id='spots'></td>
                        </tr>
                        <tr>
                            <td>Open Parking Spots: </td>
                            <td><textarea id=user_input placeholder='Open Spots'></textarea></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type='button' name='Save' value='Save' onclick='Savedata()' /></td>
                        </tr>
                    </table>
                </div>
                </div>`
        ],
        [
            "Court 17 Garage",
            47.24636054985241,
            -122.43981330806251,
            `
            <div id='infoWindow'>
                <script>
                    function Savedata() {
                    var x = document.getElementById('user_input').value;
                    document.getElementById('spots').innerHTML = x;
                    };
                </script>
                <center>
                    <h4>Court 17 Garage</h4>
                </center>
                <div>
                    <table>
                        <tr>
                            <td>Current Parking Spots: </td>
                            <td id='spots'></td>
                        </tr>
                        <tr>
                            <td>Open Parking Spots: </td>
                            <td><textarea id=user_input placeholder='Open Spots'></textarea></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type='button' name='Save' value='Save' onclick='Savedata()' /></td>
                        </tr>
                    </table>
                </div>
                </div>`
        ],
        [
            "Pinkerton",
            47.24659581323548,
            -122.43917691878448,
            `
            <div id='infoWindow'>
                <script>
                    function Savedata() {
                    var x = document.getElementById('user_input').value;
                    document.getElementById('spots').innerHTML = x;
                    };
                </script>
                <center>
                    <h4>Pinkerton</h4>
                </center>
                <div>
                    <table>
                        <tr>
                            <td>Current Parking Spots: </td>
                            <td id='spots'></td>
                        </tr>
                        <tr>
                            <td>Open Parking Spots: </td>
                            <td><textarea id=user_input placeholder='Open Spots'></textarea></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type='button' name='Save' value='Save' onclick='Savedata()' /></td>
                        </tr>
                    </table>
                </div>
                </div>`
        ],
        [
            "Whitney Parking Lot",
            47.24491739592806,
            -122.44083116220746,
            `
            <div id='infoWindow'>
                <script>
                    function Savedata() {
                    var x = document.getElementById('user_input').value;
                    document.getElementById('spots').innerHTML = x;
                    };
                </script>
                <center>
                    <h4>Whitney Parking Lot</h4>
                </center>
                <div>
                    <table>
                        <tr>
                            <td>Current Parking Spots: </td>
                            <td id='spots'></td>
                        </tr>
                        <tr>
                            <td>Open Parking Spots: </td>
                            <td><textarea id=user_input placeholder='Open Spots'></textarea></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type='button' name='Save' value='Save' onclick='Savedata()' /></td>
                        </tr>
                    </table>
                </div>
                </div>`
        ],
    ];

    for (let i = 0; i < markers.length; i++) {
        const currentMarker = markers[i];
        const marker = new google.maps.Marker({
            position: { lat: currentMarker[1], lng: currentMarker[2] },
            map,
            title: currentMarker[0],
            label: {
                text: currentMarker[0],
                color: "#000000",
                fontWeight: "bold"
            },
            animation: google.maps.Animation.DROP
        });

        const infowindow = new google.maps.InfoWindow({
            content: currentMarker[3],
        });

        marker.addListener("click", () => {
            infowindow.open(map, marker)
        });

        map.addListener("click", () => {
            infowindow.close(map, marker)
        });

        marker.addListener(infowindow, 'domready', function () {
            $('#myInfoWinDiv').click(function () {
                var x = document.getElementById('user_input').value;
                document.getElementById('spots').innerHTML = x;
            });
        });
    }
}
