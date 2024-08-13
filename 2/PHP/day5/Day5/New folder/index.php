<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <form action="server.php" method="POST">
        <div class="note">
            <p>
                <?php
                    if(isset($_GET["message"])){
                        echo $_GET["message"];
                    }
                ?>
            </p>
        </div>
        <label for="username">
            username
        </label>
        <input type="text" id="user-name" name="username" class="dataInput">
        <label for="email">
            email
        </label>
        <input type="text" id="user-name" name="email" class="dataInput">
        <label for="username">
            password
        </label>
        <input type="password" id="user-name" name="password" class="dataInput">
        <label for="confirm">
            Confirm Password
        </label>
        <input type="password" id="user-name" name="confirm" class="dataInput">
        <div class="inputGroup">
            <input type="submit" value="submit" name="regestration">
        </div>
        
    
    </form>
</body>
</html>