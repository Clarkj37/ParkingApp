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
            <table>
                <tr>
                    <td class = "logintext">Email</td>
                </tr>
                <tr>
                    <td><input type="text" name="email" class = "textinput"></td>
                </tr>
                <tr class = "logintext">
                    <td>Password</td>
                </tr>
                <tr>
                    <td><input type="password" name="password" class = "textinput"></td>
                </tr>
                <tr>
                    <td class = "forgotpassword"><a href="Password Forget Page">Forgot Password?</a> </td>
                </tr>
            </table>

            <br>
            <!-- Login Button -->
            <form action="Map Page">
                <input type="submit" value="Login" class = "buttoninput"/>
            </form>
            <br>
            <!-- Don't Have an account text -->
            <table>
                <tr>
                    <td class = "logintext">Don't Have an Account?</a></td>
                </tr>
            </table>
            <!-- Sign Up Button -->
            <form action="accountcreation.php">
                <input type="submit" value="Sign Up" class = "buttoninput"/>
            </form>
            <br>
        </div>
    </body>
</center>

</html>