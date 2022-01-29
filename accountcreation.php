<!DOCTYPE html>
<html>

<head>
    <title>Account Creation</title>
    <link rel="stylesheet" type="text/css" href="app.css">
</head>
<center>

    <body>
        <br><br><br>
        <h1>Create Account</h1>
        <!-- Email and Password text and input boxes tables -->
        <div>
            <table>
                <br>
                <tr>
                    <td class="logintext">Name</td>
                </tr>
                <tr>
                    <td><input type="text" name="name" class = "textinput"></td>
                </tr>
                <tr>
                    <td class="logintext">Email</td>
                </tr>
                <tr>
                    <td><input type="text" name="email" class = "textinput"></td>
                </tr>
                <tr>
                    <td class="logintext">Phone</td>
                </tr>
                <tr>
                    <td><input type="text" name="phone" class = "textinput"></td>
                </tr>
                <tr>
                    <td class="logintext">Password</td>
                </tr>
                <tr>
                    <td><input type="password" name="password" class = "textinput"></td>
                </tr>
                <tr>
                    <td class="logintext">Confirm Password</td>
                </tr>
                <tr>
                    <td><input type="password" name="password" class = "textinput"></td>
                </tr>
            </table>
            <br>
            <!-- Don't Have an account text -->
            <br>
            <!-- Sign Up Button -->
            <form action="index.php">
                <input type="submit" value="Sign Up" class = "buttoninput"/>
            </form>
            <br>
        </div>
    </body>
</center>

</html>