<?php

$database_account = "root";
$database_name = "user accounts";
$database_password = "";

$db = new PDO('mysql:host=localhost;dbname=' . $database_name . ';charset=utf8', $database_account, $database_password);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>