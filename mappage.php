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

    <script src="script.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAyhCrohq-f-kdEo69X7FGhnf7nSoP3UGY&
map_ids=8da7054fc3046b02&callback=initMap">
    </script>
</body>

</html>