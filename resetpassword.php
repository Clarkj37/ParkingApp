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
        <br><br><br><br>
        <h1>Parking App</h1>
        <!-- Email and Password text and input boxes tables -->
        <br>
        <form action = resetpassword.php method = post>
            <div>
                <?php
                if (isset($_POST['resetpassword'])) {
                    $to = $_POST["email"];
                    $subject = "Password Recovery";
                    $message = "Use This Link to Recover your password";
                    $headers = "From: tinfo482parkingapp@gmail.com" . "\r\n" .
                        "CC: $to";
                    #mail($to, $subject, $message, $headers);
                    $result = mail($to, $subject, $message, $headers);
                    if ($result) {
                        echo 'Recovery Email Sent';
                    } else {
                        echo 'Fail';
                    }
                }
                ?>
            </div>
            <div>
                <table>
                    <tr>
                        <td class="logintext">Enter your Recovery Email</td>
                    </tr>
                    <tr>
                        <td><input type="text" name="email" class="textinput" required></td>
                    </tr>
                    <br>
                    <!-- Login Button -->
                    <tr>
                        <td>
                            <input name="resetpassword" type="submit" value="Reset Password" class="buttoninput" />
                        </td>
                    </tr>
                </table>
            </div>
        </form>
        <br>

    </body>
</center>

</html>