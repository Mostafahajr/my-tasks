<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/form.css">
    <title>Document</title>
</head>
<body>
    <form action="done.php" method="post" class="form-container">
        <div class="form-group">
            <input type="text" name="username" class="form-control" placeholder="Username..">
        </div>
        <div class="form-group">
            <select name="city" class="form-control">
                <option value="1">cairo</option>
                <option value="2">alex</option>
                <option value="3">zag</option>
            </select>
        </div>
        <div class="form-group">
            <label>gender</label>
            <div>
                <label>male</label>
                <input type="radio" name="gender" value="m">
                <label>female</label>
                <input type="radio" name="gender" value="f">
            </div>
        </div>
        <div class="form-group">
            <label>skills</label>
            <div>
                <label>php</label>
                <input type="checkbox" name="skills[]" value="php">
                <label>css</label>
                <input type="checkbox" name="skills[]" value="css">
                <label>mysql</label>
                <input type="checkbox" name="skills[]" value="mysql">
                <label>js</label>
                <input type="checkbox" name="skills[]" value="js">
            </div>
        </div>
        <div class="form-group">
            <input type="text" name="department" class="form-control" value="php" readonly>
        </div>
        <div class="form-group" style="margin-bottom: 20px;">
            <input type="submit">
        </div>
    </form> 
</body>
</html>