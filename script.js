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
            <div style="display: none;">
            <?php
    $database_host = "localhost";
    $database_account = "root";
    $database_password = "";
    $database_name = "locations";

    $connection = mysqli_connect($database_host, $database_account, $database_password, $database_name);
    if ($connection->connect_error) {
        die("Failed to connect" . $connection->connect_error);
    }

    $origSpots = "SELECT * FROM locations where name = 'Pinkerton';"; 
    $check = mysqli_query($connection,$origSpots);
    $resultCheck = mysqli_num_rows($check);
    if ($resultCheck > 0) {
        while($row = mysqli_fetch_assoc($check)){
            echo $row['spots'];
        }
    }

    if (isset($_POST['submit'])) {
        $location = $_POST["location"];
        $spots = $_POST["spots"];
        $query = "UPDATE locations SET spots='$spots' WHERE name='$location'";
        
        $query = mysqli_query($connection, $query);

        
        
    }
    ?>
            </div>
            <center>
            <form method="post">
                <div>
                    <table>
                        <tr>
                            <td class="logintext"><label for="name">Enter Parking Spaces </label></td>
                        </tr>
                        <tr>
                            <td><input type="text" name="spots" class="textinput"></td>
                        </tr>
                        <br>
                        <tr>
                            <td>
                        <tr>
                            <select name="location">
                                <option>Republic Parking (Cragle Lot)</option>
                            </select>
                        </tr>
                        </td>
                        </tr>
                        <tr>
                            <td>
                                <input name="submit" type="submit" value="Submit Number" class="buttoninput" />
                            </td>
                        </tr>
                    </table>
                </div>
            </form>
            </center>
    `
        ],
        [
            "Diamond Parking Lot",
            47.243823825373646,
            -122.43879538158146,
            `
            <div style="display: none;">
            <?php
    $database_host = "localhost";
    $database_account = "root";
    $database_password = "";
    $database_name = "locations";

    $connection = mysqli_connect($database_host, $database_account, $database_password, $database_name);
    if ($connection->connect_error) {
        die("Failed to connect" . $connection->connect_error);
    }

    $origSpots = "SELECT * FROM locations where name = 'Pinkerton';"; 
    $check = mysqli_query($connection,$origSpots);
    $resultCheck = mysqli_num_rows($check);
    if ($resultCheck > 0) {
        while($row = mysqli_fetch_assoc($check)){
            echo $row['spots'];
        }
    }

    if (isset($_POST['submit'])) {
        $location = $_POST["location"];
        $spots = $_POST["spots"];
        $query = "UPDATE locations SET spots='$spots' WHERE name='$location'";
        
        $query = mysqli_query($connection, $query);

        
        
    }
    ?>
            </div>
            <center>
            <form method="post">
                <div>
                    <table>
                        <tr>
                            <td class="logintext"><label for="name">Enter Parking Spaces </label></td>
                        </tr>
                        <tr>
                            <td><input type="text" name="spots" class="textinput"></td>
                        </tr>
                        <br>
                        <tr>
                            <td>
                        <tr>
                            <select name="location">
                                <option>Diamond Parking Lot</option>
                        </tr>
                        </td>
                        </tr>
                        <tr>
                            <td>
                                <input name="submit" type="submit" value="Submit Number" class="buttoninput" />
                            </td>
                        </tr>
                    </table>
                </div>
            </form>
            </center>
    `
        ],
        [
            "Washington State History Museum",
            47.24403095983615,
            -122.43596082635172,
            `
            <div style="display: none;">
            <?php
    $database_host = "localhost";
    $database_account = "root";
    $database_password = "";
    $database_name = "locations";

    $connection = mysqli_connect($database_host, $database_account, $database_password, $database_name);
    if ($connection->connect_error) {
        die("Failed to connect" . $connection->connect_error);
    }

    $origSpots = "SELECT * FROM locations where name = 'Pinkerton';"; 
    $check = mysqli_query($connection,$origSpots);
    $resultCheck = mysqli_num_rows($check);
    if ($resultCheck > 0) {
        while($row = mysqli_fetch_assoc($check)){
            echo $row['spots'];
        }
    }

    if (isset($_POST['submit'])) {
        $location = $_POST["location"];
        $spots = $_POST["spots"];
        $query = "UPDATE locations SET spots='$spots' WHERE name='$location'";
        
        $query = mysqli_query($connection, $query);

        
        
    }
    ?>
            </div>
            <center>
            <form method="post">
                <div>
                    <table>
                        <tr>
                            <td class="logintext"><label for="name">Enter Parking Spaces </label></td>
                        </tr>
                        <tr>
                            <td><input type="text" name="spots" class="textinput"></td>
                        </tr>
                        <br>
                        <tr>
                            <td>
                        <tr>
                            <select name="location">
                                <option>Washington State History Museum</option>
                            </select>
                        </tr>
                        </td>
                        </tr>
                        <tr>
                            <td>
                                <input name="submit" type="submit" value="Submit Number" class="buttoninput" />
                            </td>
                        </tr>
                    </table>
                </div>
            </form>
            </center>
    `
        ],
        [
            "Court 17 Garage",
            47.24636054985241,
            -122.43981330806251,
            `
            <div style="display: none;">
            <?php
    $database_host = "localhost";
    $database_account = "root";
    $database_password = "";
    $database_name = "locations";

    $connection = mysqli_connect($database_host, $database_account, $database_password, $database_name);
    if ($connection->connect_error) {
        die("Failed to connect" . $connection->connect_error);
    }

    $origSpots = "SELECT * FROM locations where name = 'Pinkerton';"; 
    $check = mysqli_query($connection,$origSpots);
    $resultCheck = mysqli_num_rows($check);
    if ($resultCheck > 0) {
        while($row = mysqli_fetch_assoc($check)){
            echo $row['spots'];
        }
    }

    if (isset($_POST['submit'])) {
        $location = $_POST["location"];
        $spots = $_POST["spots"];
        $query = "UPDATE locations SET spots='$spots' WHERE name='$location'";
        
        $query = mysqli_query($connection, $query);

        
        
    }
    ?>
            </div>
            <center>
            <form method="post">
                <div>
                    <table>
                        <tr>
                            <td class="logintext"><label for="name">Enter Parking Spaces </label></td>
                        </tr>
                        <tr>
                            <td><input type="text" name="spots" class="textinput"></td>
                        </tr>
                        <br>
                        <tr>
                            <td>
                        <tr>
                            <select name="location">
                                <option>Court 17 Garage</option>
                            </select>
                        </tr>
                        </td>
                        </tr>
                        <tr>
                            <td>
                                <input name="submit" type="submit" value="Submit Number" class="buttoninput" />
                            </td>
                        </tr>
                    </table>
                </div>
            </form>
            </center>
    `
        ],
        [
            "Pinkerton",
            47.24659581323548,
            -122.43917691878448,
            `
            <div style="display: none;">
            <?php
    $database_host = "localhost";
    $database_account = "root";
    $database_password = "";
    $database_name = "locations";

    $connection = mysqli_connect($database_host, $database_account, $database_password, $database_name);
    if ($connection->connect_error) {
        die("Failed to connect" . $connection->connect_error);
    }

    $origSpots = "SELECT * FROM locations where name = 'Pinkerton';"; 
    $check = mysqli_query($connection,$origSpots);
    $resultCheck = mysqli_num_rows($check);
    if ($resultCheck > 0) {
        while($row = mysqli_fetch_assoc($check)){
            echo $row['spots'];
        }
    }

    if (isset($_POST['submit'])) {
        $location = $_POST["location"];
        $spots = $_POST["spots"];
        $query = "UPDATE locations SET spots='$spots' WHERE name='$location'";
        
        $query = mysqli_query($connection, $query);

        
        
    }
    ?>
            </div>
            <center>
            <?php echo $row['spots'];?>
            <form method="post">
                <div>
                    <table>
                        <tr>
                            <td class="logintext"><label for="name">Enter Parking Spaces </label></td>
                            <p><?php echo $firstSpots; ?></p>
                        </tr>
                        <tr>
                            <td><input type="text" name="spots" class="textinput"></td>
                        </tr>
                        <br>
                        <tr>
                            <td>
                        <tr>
                            <select name="location">
                                <option>Pinkerton</option>
                            </select>
                        </tr>
                        </td>
                        </tr>
                        <tr>
                            <td>
                                <input name="submit" type="submit" value="Submit Number" class="buttoninput" />
                            </td>
                        </tr>
                    </table>
                </div>
            </form>
            </center>
    `
        ],
        [
            "Whitney Parking Lot",
            47.24491739592806,
            -122.44083116220746,
            `
            <div style="display: none;">
            <?php
    $database_host = "localhost";
    $database_account = "root";
    $database_password = "";
    $database_name = "locations";

    $connection = mysqli_connect($database_host, $database_account, $database_password, $database_name);
    if ($connection->connect_error) {
        die("Failed to connect" . $connection->connect_error);
    }

    $origSpots = "SELECT * FROM locations where name = 'Pinkerton';"; 
    $check = mysqli_query($connection,$origSpots);
    $resultCheck = mysqli_num_rows($check);
    if ($resultCheck > 0) {
        while($row = mysqli_fetch_assoc($check)){
            echo $row['spots'];
        }
    }

    if (isset($_POST['submit'])) {
        $location = $_POST["location"];
        $spots = $_POST["spots"];
        $query = "UPDATE locations SET spots='$spots' WHERE name='$location'";
        
        $query = mysqli_query($connection, $query);

        
        
    }
    ?>
            </div>
            <center>
            <form method="post">
                <div>
                    <table>
                        <tr>
                            <td class="logintext"><label for="name">Enter Parking Spaces </label></td>
                        </tr>
                        <tr>
                            <td><input type="text" name="spots" class="textinput"></td>
                        </tr>
                            <br>
                        <tr>
                            <td>
                        <tr>
                            <select name="location">
                                <option>Whitney Parking Lot</option>
                            </select>
                        </tr>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input name="submit" type="submit" value="Submit Number" class="buttoninput" />
                            </td>
                        </tr>
                    </table>
                </div>
            </form>
            </center>
    `
        ],
    ];

    for (let i = 0; i < markers.length; i++) {
        const currentMarker = markers[i];
        const marker = new google.maps.Marker({ position: { 
            lat: currentMarker[1], lng: currentMarker[2] },
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
            //content: `<?php echo "test";?>`
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
