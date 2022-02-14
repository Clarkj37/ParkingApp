<?php
require_once('config.php');
?>
<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" type="text/css" href="map.css">
    <title>Map Page</title>
</head>
<a href="index.php">Login</a>

<body>
    <h1>Parking App</h1>

    <div id="map"></div>

    <script src="script.js">

    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAyhCrohq-f-kdEo69X7FGhnf7nSoP3UGY&
map_ids=8da7054fc3046b02&callback=initMap">
    </script>

    <?php
    $database_host = "localhost";
    $database_account = "root";
    $database_password = "";
    $database_name = "locations";

    $connection = mysqli_connect($database_host, $database_account, $database_password, $database_name);
    if ($connection->connect_error) {
        die("Failed to connect" . $connection->connect_error);
    }
    if (isset($_POST['submit'])) {
        $location = $_POST["location"];
        $spots = $_POST["spots"];
        $query = "UPDATE locations SET spots='$spots' WHERE name='$location'";

        $query = mysqli_query($connection, $query);
    }
    $sql = mysqli_query($connection, $query);
    ?>
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
                        <option>Diamond Parking Lot</option>
                        <option>Washington State History Museum</option>
                        <option>Court 17 Garage</option>
                        <option>Pinkerton</option>
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
</body>

</html>