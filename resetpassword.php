<?php
require_once('config.php');
?>

<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" type="text/css" href="app.css">
    <title>Parking App</title>
</head>
<center>

    <body>
        <br><br><br><br><br>
        <h1>Parking App</h1>
        <!-- Email and Password text and input boxes tables -->
        <div>
            <br>
            <form>
                <table>
                    <tr>
                        <td class="logintext">Enter your Recovery Email</td>
                    </tr>
                    <tr>
                        <td><input type="text" name="email" class="textinput" required></td>
                    </tr>
                </table>

                <br>
                <!-- Login Button -->
                <form action="sumbitted">
                    <input type="submit" value="reset password" class="buttoninput" />
                </form>
            </form>
            <br>
        </div>
    </body>
</center>

</html>