<?php

$students=[

    ["name"=>"mostafa","gender"=>"m","imageSrc"=>"banner.jpg","skills"=>["php","css","js"]],
    ["name"=>"mona","gender"=>"f","imageSrc"=>"banner.jpg","skills"=>["php","js"]],
    ["name"=>"ali","gender"=>"m","imageSrc"=>"banner.jpg","skills"=>["js"]],
];



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
<table>
        <thead>
            <tr><th>name</th><th>gender</th><th>imageSrc</th><th>skills</th></tr>
        </thead>
        <tbody>
            <?php 
                foreach ($students as  $student) :
            ?>
            <tr>
                <td>
                    <?php
                        echo $student["name"];
                    ?>
                </td>
                <td>
                <?php
                        echo $student["gender"];
                    ?>
                </td>
                <td>
                    
                <img src="<?php echo $student["imageSrc"];?>" alt="">
                   
                </td>
                <td>
                    <ul>
                <?php
                        
                        for ($i=0; $i < count($student["skills"]); $i++) { 
                            # code...
                            echo "<li>{$student["skills"][$i]}</li>";
                        }
                        
                    ?>
                    </ul>
                </td>
            </tr>
            <?php
                endforeach
            ?>
        </tbody>
    </table>
</body>
</html>