<?php
include 'validate.php';
if($_SERVER['REQUEST_METHOD'] == "POST"){
    // $allowedExt=['jpg','png','jpeg'];
    // $code=$_POST['code']; //123.
    // $image_name=$_FILES['image']['name']; // flower1.jpg
    // $tmp_name=$_FILES['image']['tmp_name'];
    // $ExtArr=explode(".",$image_name); // [flower1,jpg]
    // $ext=end($ExtArr); // jpg
    // $ext=strtolower($ext);
    // if(in_array($ext,$allowedExt)){
    //     move_uploaded_file($tmp_name,"upload/images/$code.$ext"); // from , to 
    // }else{
    //     echo "not allowed..";
    // }
    
    // $pdf_name=$_FILES['cv']['name'];
    // $pdf_tmp_name=$_FILES['cv']['tmp_name'];
    
    //move_uploaded_file($pdf_tmp_name,"upload/pdf/$pdf_name"); // from , to 

    $errors=[];
    $username=general_validate($_POST['username']);
    $phone=general_validate($_POST['phone']);
    $email=general_validate($_POST['email']);
    $password=general_validate($_POST['password']);
    $confPassword=general_validate($_POST['conf-password']);
    if(!checkFullName($username)){
        $errors['valid_name']="not valid name..";
    }

    if(!validateEmail($email)){
        $errors['valid_email']="not valid email..";
    }
}
 

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Form Validation</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <style>
        .alert{
            max-width: 45%;
            margin: 0 auto;
            padding: 20px;
        }
        .alert-success{
            background-color: lightgreen;
        }
        .alert-danger{
            background-color: rgba(255,0,0,.7);
        }
    </style>
</head>
<body>
    <h1>REGISTRATION FORM</h1>
    <?php if(isset($errors) && empty($errors)){ ?>
    <div class="alert alert-success">valid..</div>
    <?php } ?>
    <?php if(isset($errors) && !empty($errors)){ ?>
    <div class="alert alert-danger">not valid..</div>
    <?php } ?>
    <form name="RegForm" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']) ?>" method="post" enctype="multipart/form-data">
    <div class="form-group">
            <label for="name">Code:</label>
            <input type="text" id="name" name="code" 
                placeholder="Enter your code" />
            <span id="name-error" class="error-message"></span>
        </div>
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="username" 
                placeholder="Enter your full name" />
            <span id="name-error" class="error-message"></span>
        </div>
        <div class="form-group">
            <label for="address">phone:</label>
            <input type="text" id="phone" name="phone" 
                placeholder="Enter your phone" />
            <span id="phone-error" class="error-message"></span>
        </div>
        <div class="form-group">
            <label for="email">E-mail Address:</label>
            <input type="email" id="email" name="email" 
                placeholder="Enter your email" />
            <span id="email-error" class="error-message"></span>
        </div>
        <div class="form-group">
            <input type="file" name="image[]" multiple/>
            <span id="image-error" class="error-message"></span>
        </div>
        <div class="form-group">
            <input type="file" name="cv" />
            <span id="image-error" class="error-message"></span>
        </div>
        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" />
            <span id="password-error" class="error-message"></span>
        </div>
        <div class="form-group">
            <label for="password">Confirm Password:</label>
            <input type="password" id="conf-password" name="conf-password" />
            <span id="conf-password-error" class="error-message"></span>
        </div>
        <div class="form-group">
            <input type="submit" value="Send" name="Submit">
        </div>
    </form>
    <!-- <script src="assets/js/main.js"></script> -->
</body>

</html>
