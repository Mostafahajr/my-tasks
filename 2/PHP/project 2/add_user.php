
<?php 
    include 'connection.php';

        if (isset($_POST['update'])) {
            # code...
            var_dump($_POST);
            $id = $_POST["id"];
            $link='add_user.php';
        }else{
            $link='manage_users.php';
        }
        if (isset($_POST['save'])) {
            var_dump($_POST);
            # code...
            $username = $_POST["username"];
            $id = $_POST["id"];
            $email = $_POST["email"];
            $password = $_POST["password"];
            $image_name=$_FILES["imagesrc"]["name"];
            $tmp_name = $_FILES["imagesrc"]["tmp_name"];
            $image=explode(".",$image_name);
            
            $ext = end($image);
            move_uploaded_file($tmp_name,"uploads/$username-$email.$ext");
            $up_query = $connection->prepare("UPDATE `user` SET `username` = :username, `email` = :email, `userpassword` = :password, `image` = :image WHERE `id` = :id");

            // Bind the parameters to the placeholders
            $up_query->bindParam(':username', $username);
            $up_query->bindParam(':email', $email);
            $up_query->bindParam(':password', $password);
            $up_query->bindParam(':image', $image);
            $up_query->bindParam(':id', $id, PDO::PARAM_INT);

            // Execute the query
            $up_query->execute();

            // header("Location: manage_users.php");
        }
        
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>Document</title>
    
</head>
<body>
    <div class="container">
    <div class="wrapper mt-5 pt-5">
          <div class="header d-flex justify-content-around align-item-center">
            <h3>
                  add User
              </h3>

              <a href="manage_users.php">
                  <button class="btn btn-primary">
                      show users
                  </button>
              </a>

          </div>
            
        </div>
        
        <hr class="w-75 m-auto mt-4">
    <form action="<?php echo $link ?>" method="post" class="row w-50 m-auto p-4 my-4" enctype="multipart/form-data">
                <?php 
                if (isset($_POST['update'])) {
                    # code...
                ?>
            <div class="col-12">
                
                <input type="hidden" name="id" value="<?php echo $id ?>">
                
            </div>
            <?php }  ?>
            <div class="col-12">
                    <label for="username" class="form-label">username:</label>
                    <input type="text" class="form-control" name="username">
            </div>
            <div class="col-12">
                    <label for="username" class="form-label">email:</label>
                    <input type="email" class="form-control" name="email">
            </div>
            <div class="col-12">
                    <label for="password" class="form-label">password:</label>
                    <input type="password" class="form-control" name="password">
            </div>
            <div class="col-12">
                    <label for="username" class="form-label">image:</label>
                    <input type="file" class="form-control" name="imagesrc">
            </div>
            <div class="col-12 my-3">
              
                <input type="submit" value="submit" class="btn btn-primary" name="save">
            
            </div>
    </form>
    </div>
        

</body>
</html>