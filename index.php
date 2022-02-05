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

        <br>
        <form action="index.php" method="post">
            <div>
                <?php

                $database_host = "localhost";
                $database_account = "root";
                $database_name = "user accounts";
                $database_password = "";

                $connection = mysqli_connect($database_host, $database_account, $database_password, $database_name);

                if (isset($_POST['login'])) {

                    $Email = $_POST["email"];
                    $Password = $_POST["password"];

                    $sql = "SELECT * FROM users WHERE Email = '" . $Email . "' AND Password = '" . $Password . "' limit 1 ";
                    $result = mysqli_query($connection, $sql);

                    if (mysqli_num_rows($result) == 1) {
                        echo " You Have Successfully Logged in";
                        header("Location: http://parkingapp/mappage.php?");
                    } else {
                        echo " You Have Entered Incorrect Email or Password";
                        
                    }
                }
                ?>
            </div>
            <div>
                <table>
                    <tr>
                        <td class="logintext">Email</td>
                    </tr>
                    <tr>
                        <td><input type="text" name="email" class="textinput" required></td>
                    </tr>
                    <tr class="logintext">
                        <td>Password</td>
                    </tr>
                    <tr>
                        <td><input type="password" name="password" class="textinput" required></td>
                    </tr>
                    <tr>
                        <td class="forgotpassword"><a href="resetpassword.php">Forgot Password?</a> </td>
                    </tr>
                    <!-- Login Button -->
                    <tr>
                        <td>
                            <input type="submit" name="login" value="Login" class="buttoninput" />
                        </td>
                    </tr>
                </table>
                <br>
                <!-- Don't Have an account text -->
                <table>
                    <tr>
                        <td class="logintext">Don't Have an Account?</a></td>
                    </tr>
                </table>
                <!-- Sign Up Button -->
                <form action="accountcreation.php">
                    <input type="submit" value="Sign Up" class="buttoninput" />
                </form>
            </div>
        </form>

    </body>
</center>

</html>