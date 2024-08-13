<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") :

        $gender=$_POST["gender"];
        
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

    <div class="container">
            <h2>
                welcome,
                
                
                
                <?php
                    if ($gender =="male") {
                        echo "Mr ".$_POST["username"];
                    }else{
                        echo "Ms ".$_POST["username"];

                    }
                    
                ?>
            </h2>

            <p>
                yuor info
            </p>
            <ul>
            <?php
            foreach ($_POST as  $key => $value) :  
            ?>
                <li>
                    <?php
                        if ($key == "skills") {
                            echo "<b>$key</b> : " ;
                            for ($i=0; $i < count($_POST["skills"]) ; $i++) { 
                                # code...
                                echo  $_POST["skills"][$i].",";
                            }
                        }else{
                            echo "<b>$key</b> : $value";
                        }
                        
                    ?>

                </li>

                <?php endforeach;?>
            </ul>
   
        </div>
  
    
</body>
</html>
<?php
endif ;

?>