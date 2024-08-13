<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <form action="done.php" method="post">
       
        
       
        <div class="input-group">
            <input type="text" name="username" id="user-name" class="dataINput">
        </div>
        <div class="input-group">

        <input type="email" name="email" id="user-email"  class="dataINput">
        
    </div>
        <div class="input-group">
        <label for="">
            gender:
           
        </label>
        male <input type="radio" name="gender" value="male" id="user-gender" value>
        female <input type="radio" name="gender" value="female" id="user-gender">

        </div>
        <div class="input-group">
            <label for="">skills :</label>
        football<input type="checkbox" name="skills[]" value="football" id="">
            tennis<input type="checkbox" name="skills[]" value="tennis" id="">
            baskitball<input type="checkbox" name="skills[]" value="baskitball" id="">
        </div>
        <div class="input-group">
        <label for="">
            city
        </label>
        <select name="city" id="user-city"  class="dataINput">
            <option value="alex">alex</option>
            <option value="cairo">cairo</option>
            <option value="giza">giza</option>
        </div>


       
        


        </select>


        <div class="input-group">
            <label for="">trak</label>
        <input type="text" readonly name="track" value="php" class="rdonly">
        </div>

        <div class="input-group btn">
            <input type="submit" value="submit">
        </div>

        

        


        
    </form>
</body>
</html>