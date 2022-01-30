<?php
require_once('config.php');
?>

<!DOCTYPE html>
<html>

<head>
    <title>Account Creation</title>
    <link rel="stylesheet" type="text/css" href="app.css">
</head>

<center>
    <main>
        <h1>Create Account</h1>
    </main>

    <body>
        <form action="accountcreation.php" method="post">
            <div>
                <?php
                if (isset($_POST['signup'])) {
                    $Name = $_POST['name'];
                    $Email = $_POST['email'];
                    $Phone_Number = $_POST['Phone_Number'];
                    $Password = $_POST['password'];

                    $sql = "INSERT INTO users (name, email, Phone_Number, password ) VALUES(?,?,?,?)";
                    $stmtinsert = $db->prepare($sql);
                    $result = $stmtinsert->execute([$Name, $Email, $Phone_Number, $Password]);
                    if ($result) {
                        echo 'Account Created';
                    } else {
                        echo 'Error';
                    }
                }
                ?>
            </div>
            <!-- Email and Password text and input boxes tables -->
            <div>
                <table>
                    <br>
                    <tr>
                        <td class="logintext"><label for="name">Name</label></td>
                    </tr>
                    <tr>
                        <td><input type="text" name="name" class="textinput" ></td>
                    </tr>
                    <tr>
                        <td class="logintext"><label for="email">Email</label></td>
                    </tr>
                    <tr>
                        <td><input type="text" name="email" class="textinput" ></td>
                    </tr>
                    <tr>
                        <td class="logintext"><label for="phone">Phone</label></td>
                    </tr>
                    <tr>
                        <td><input type="text" name="Phone_Number" class="textinput" ></td>
                    </tr>
                    <tr>
                        <td class="logintext"><label for="password">Password</label></td>
                    </tr>
                    <tr>
                        <td><input type="password" name="password" class="textinput" ></td>
                    </tr>
                    <tr>
                        <td class="logintext"><label for="password">Confirm Password</label></td>
                    </tr>
                    <tr>
                        <td><input type="password" name="confirmpassword" class="textinput" ></td>
                    </tr>
                    <tr>
                        <td><input type="submit" name="signup" value="Sign Up" class="buttoninput" /></td>
                    </tr>
                </table>
                <br>
                <!-- Don't Have an account text -->
                <br>
                <br>
            </div>
        </form>
    </body>
</center>

</html>