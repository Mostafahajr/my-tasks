<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <!-- /** Session */ -->

    <!-- show user Data -->
 

    <div class="user-info">
        <h1>Profile</h1>
        <div>
            <?php

                session_start();
                if(isset($_SESSION["name"])){
                    echo "Username: " . $_SESSION['name'] . "<br>";
                }
            ?>
        </div>
        <div>
        <?php
                if(isset($_SESSION["email"])){
                    echo "Email: " . $_SESSION['email'] . "<br>";
                }
            ?>
        </div>
    </div>
</body>
</html>