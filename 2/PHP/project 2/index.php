<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="server.php" method="post">
        <p>
        <?php

            if (isset($_GET["message"]))
            {

                # code...
                echo $_GET["message"];
            }
        ?>
        </p>
        
       
        <input type="text" name="user" class="dataInput" placeholder="Enter your email.." id="user-email">
        <input type="text" name="password" class="dataInput" placeholder="Enter your password.." id="user-password">
        <input type="submit" value="submit" name="login">
    </form>
</body>
</html>