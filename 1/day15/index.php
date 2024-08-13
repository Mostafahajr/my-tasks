<?php 
// echo "<pre>";
// var_dump($_FILES);
// echo "<?pre>";
include "validate.php";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    # code...
    $name = generalinput($_POST["username"]);
    $email = generalinput($_POST["email"]);
    $password = $_POST["password"];
    $errors =[];
    $images = array_column($_FILES,"name");
    $tmp_name=array_column($_FILES,"tmp_name");
    $code = intval($_POST["code"]);
    $ext= [];
    foreach ($images as $image ) {
        foreach ($image as $num) {
            $imageext = explode(".",$num);
            $ext[] = end($imageext);
        }
    }
    foreach ($tmp_name as $name) {
        foreach ($name as $n) {
            $tmp []= $n;
        }
    }
    for ($i=0; $i < count($tmp); $i++) { 
        move_uploaded_file($tmp[$i],"upload/$code-$i.png");
    }

    if (!checkEmail($email)) {
        # code...
        $errors["valid_email"]="email is not valid";
    }

    // if (!checkFullName($name)) {
    //     # code...
    //     $errors["valid_name"]="name is not valid";
    // }
    if (!checkPassword($password)) {
        # code...
        $errors["valid_password"]="password is not valid";
    }
    if (!checkInt($code)) {
        # code...
        $errors["valid_code"]="code is not valid";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="bootstrap.min.css">
    <title>Document</title>
</head>
<body>



   
  <form action="#" method="post" class="row m-auto w-50" enctype="multipart/form-data">
    
  <div class="col-6">
        <label for="username" class="form-label">name:</label>
        <input type="text" class="form-control" name="username" id="username">
    </div>
    <div class="col-6">
        <label for="password" class="form-label">Password:</label>
        <input type="password" class="form-control" name="password" id="Password">
    </div>
    <div class="col-12">
        <label for="email" class="form-label">Email:</label>
        <input type="text" class="form-control" name="email" id="email">
    </div>
    <div class="col-12 my-3">
        <label for="code" class="form-label">Code :</label>
        <input type="code" class="form-control" name="code" id="code">
    </div>
    <div class="col-12">
        <input type="file" class="form-control" name="images[]" id="userImages" multiple>
    </div>
    <div class="col-12 my-3">
        <input type="submit" class="btn btn-primary" id="submit">
    </div>
  </form>

  <?php if (isset($errors) && !empty($errors)) {
    # code...
  ?>

  <div class="alert alert-danger w-100 py-3 text-center">
        wrong inputs
        <?php foreach ($errors as $error) {
            # code...
            echo $error;
        }?>
  </div>
<?php }
    if (isset($errors) && empty($errors)) {
        # code...
    
?>
    <div class="alert alert-success">
        validate
    </div>
<?php }?>

</body>
</html>