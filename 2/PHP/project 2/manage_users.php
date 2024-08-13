<?php 
  include_once "connection.php";
  // echo "<pre>";
  // var_dump($_FILES);
  // echo "</pre>";
  if(isset($_POST["save"])){
      $username = $_POST["username"];
      $email = $_POST["email"];
      $password = $_POST["password"];
      $image_name=$_FILES["imagesrc"]["name"];
      $tmp_name = $_FILES["imagesrc"]["tmp_name"];
      var_dump($_FILES["imagesrc"]["name"]);
    //   $image=explode(".",$image_name);
    //   $ext = end($image);
    //   move_uploaded_file($tmp_name,"uploads/$username-$email.$ext");

    //   $quary="INSERT INTO `user` (`username`, `email`, `userpassword`, `image`, `role`) VALUES ('$username','$email', '$password', 'uploads/$username-$email.$ext', 'user')";
    //   $ins_quary = $connection->prepare($quary);
    //   $ins_quary->execute();

    //   header("Location: manage_users.php");
  }

  if (isset($_POST["delete"])) {
    # code...
    $id = $_POST["id"];
    $del_quary = $connection->prepare("DELETE FROM `rooms` WHERE `rooms`.`user_id` = $id");
    $del_quary->execute();
    $del_quary = $connection->prepare("DELETE FROM `user` WHERE `user`.`id` = $id");
    $del_quary->execute();
   
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
    <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
            <a class="nav-link" aria-current="page" href="home.php">Home</a>
            <a class="nav-link active" href="manage_users.php">Users</a>
            <a class="nav-link" href="#">Pricing</a>
            <a class="nav-link" aria-disabled="true">Disabled</a>
        </div>
        </div>
    </div>
    </nav>
    <div class="container">
        <div class="wrapper my-5 pt-5">
            <div class="header d-flex justify-content-around align-item-center">
                <h2>
                    all Users
                </h2>

                <a href="add_user.php">
                    <button class="btn btn-primary">
                        add user
                    </button>
                </a>
            </div>

        </div>

        <div class="table_data ">
            <table class="table w-75 m-auto border-top text-center">
                <thead>
                    <tr >
                        <th scope="col text-center">#</th>
                        <th scope="col text-center">Name</th>
                        <th scope="col text-center">Email</th>
                        <th scope="col text-center">image</th>
                        <th scope="col text-center bg-danger">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <?php 
                    $sel_quary=$connection->prepare("select * from user");
                    $sel_quary->execute();
                    $data=$sel_quary->fetchAll(PDO::FETCH_ASSOC);
                    foreach ($data as $user) {
                  ?>
                    <tr class="border-bottom">
                        <th scope="row"><?php  echo $user["id"] ?></th>
                        <td><?php  echo $user["username"] ?></td>
                        <td><?php  echo $user["email"] ?></td>
                        <td><img src="<?php  echo $user["image"] ?>" class="rounded" style="width: 4rem;height:3rem;" alt=""></td>
                        <td>
                          <div class="d-flex justify-content-around align-items-center">
                            <form action="manage_users.php" method="post">
                                <input type="hidden" name="id" value="<?php echo $user['id'] ?>">
                                <button type="submit" class="btn btn-danger" name="delete" onclick="delfunction(<?php echo $user['id'] ?>)">delete</button>
                            </form>
                            <form action="add_user.php" method="post">
                                <input type="hidden" name="id" value="<?php echo $user['id'] ?>">
                                <button type="submit" class="btn btn-warning" name="update">update</button>

                            </form>
                            

                          </div>
                        </td>
                    </tr>
                    <?php } ?>
                </tbody>
            </table>
        </div>

    </div>

    <script src="index.js"></script>
</body>

</html>