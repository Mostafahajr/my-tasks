<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <form action="server.php" method="POST" enctype="multipart/form-data">
        <div class="input-group">
            <label for="username">Username :</label>
            <input type="text" name="username" id="user-name" class="datainput">
        </div>
        <div class="input-group">
            <label for="email">email :</label>
            <input type="email" name="email" id="user-email" class="datainput">
        </div>
        <div class="input-group">
            <label for="password">Password :</label>
            <input type="password" name="password" id="user-password" class="datainput">
        </div>
        <div class="input-group">
            <label for="confirmPassword">Confirm Password :</label>
            <input type="password" name="cpnfirmPassword" id="user-confirm" class="datainput">
        </div>
        <div class="inputgroup">
            <label for="image">Image</label>
            <input type="file" name="image" id="user-image">
        </div>
        <div class="input-group">
            <input type="submit" value="submit" name="registeration">
        </div>
    </form>
</body>
</html>