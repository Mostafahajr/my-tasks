<?php


 


    // $data = [];
    // $name =$_POST["username"];
    // $email =$_POST["email"];
    // $track =$_POST["track"];
    // $city=$_POST["city"];


    // $data =  [$name,$email,$track,$city];

    // $datastr = implode(",",$data);


    // $file="data.txt";
   
    // if (filesize($file)>0) {
    //     # code...
    //     file_put_contents($file,"\n$datastr",FILE_APPEND);
       

    // }else{
    //     file_put_contents($file,$datastr,FILE_APPEND);
        
    // }
    
   
   







    $file ="data.txt";
    
//         # code...
    $datastr = file_get_contents($file);
    $arrdata = explode("\n",$datastr);
    foreach ($arrdata as $user) {
        # code...
        $arr[] = explode(",",$user);
        
    }

//    echo "<pre>";
//     print_r($arr);

//    echo "</pre>";

    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <style>
        table{
    width: 50%;
    text-align: center;
    padding: 10px;
    border: 1px solid #33333308;
    border-radius: 10px;
    box-shadow: #33333352 1px 2px 7px;
    margin: 50px auto;
}

table td,th{
    padding: 10px;
    border-bottom: 1px solid #33333312;
    margin: 0;
}

    </style>
    <title>Document</title>
</head>
<body>

    <table>
        <tr>
            <th>name</th>
            <th>email</th>
            <th>city</th>
            <th>track</th>
        </tr>
        <?php 
            foreach ($arr as $user) {
                # code...
           
        ?>
       <tr>
        <td><?= $user[0]?></td>
        <td><?= $user[1]?></td>
        <td><?= $user[2]?></td>
        <td><?= $user[3]?></td>
       </tr>
        <?php }?>
        
    </table>







    <div class="container">
            

          
            <ul>
            <?php 
           
           $arrnames = array_column($arr , 0);

           foreach ($arrnames as $name) {
            # code...

           ?>
           
                <li>
                  <?php echo $name ?>

                </li>

               <?php 
           }
               ?>
            </ul>
   
        </div>
  
    
</body>
</html>
