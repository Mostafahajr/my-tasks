<?php 
$users = [];
if (file_exists("data.json")) {
    # code...
    $users = json_decode(file_get_contents("data.json"),true);
}else{
    echo "error";
}



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
<h1>Users</h1>

<table>
    
    <tbody>
        <tr>
            <td>image</td>
            <td>name</td>
            <td>email</td>
        </tr>
        <?php 
            if(isset($users)):
                foreach($users as $user):
        ?>
        <tr>
            <td>
                <img src="<?php echo $user["image"];?>" alt="">
            
            </td>
            <td><?php echo $user["name"];?></td>
            <td>
            <?php echo $user["email"];?>
            </td>

        </tr>

        <?php 
            endforeach;
            endif;
        ?>
    </tbody>
</table>
</body>

</html>

