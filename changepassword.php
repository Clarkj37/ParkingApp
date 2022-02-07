<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" type="text/css" href="app.css">
    <title>Parking App</title>
</head>
<center>

    <body>
        <br><br><br><br>
        <h1>Parking App</h1>
        <!-- Email and Password text and input boxes tables -->
        <br>
        <?php
        $database_host = "localhost";
        $database_account = "root";
        $database_password = "";
        $database_name = "user accounts";

        $connection = mysqli_connect($database_host, $database_account, $database_password, $database_name);
        if ($connection->connect_error) {
            die("Failed to connect" . $connection->connect_error);
        }

        if (isset($_POST['password'])) {
            $code = $_GET["code"];
            $selectcode = "SELECT email FROM resetpasswords WHERE code='$code'";
            $getEmailQuery = mysqli_query($connection, $selectcode);
            if (mysqli_num_rows($getEmailQuery) == 0) {
                exit("Can't find email");
            }
            $pw = $_POST["password"];

            $row = mysqli_fetch_array($getEmailQuery);
            $email = $row["email"];

            $query = mysqli_query($connection, "UPDATE users SET password='$pw' WHERE email='$email'");

            if ($query) {
                $query = mysqli_query($connection, "DELETE FROM resetpasswords WHERE code ='$code'");
                exit("Password Updated");
            } else {
                exit("Something Went Wrong");
            }
        }
        ?>
        <form method="post">
            <div>
                <table>
                    <tr>
                        <td class="logintext"><label for="name">Enter Your New Password </label></td>
                    </tr>
                    <tr>
                        <td><input type="text" name="password" class="textinput"></td>
                    </tr>
                    <br>
                    <!-- Login Button -->
                    <tr>
                        <td>
                            <input name="submit" type="submit" value="Reset Password" class="buttoninput" />
                        </td>
                    </tr>
                </table>
            </div>
        </form>
        <br>

    </body>
</center>

</html>