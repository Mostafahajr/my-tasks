<?php
$students=[
    ['name'=>'ali','age'=>20,'level'=>1],
    ['name'=>'mona','age'=>21,'level'=>2],
    ['name'=>'sara','age'=>22,'level'=>3],
    ['name'=>'hala','age'=>25,'level'=>4]
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>Document</title>
</head>
<body>
<table class="table">
    <thead>
        <tr>
            <th>name</th>
            <th>age</th>
            <th>level</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach($students as $student){ ?>
        <tr>
            <td><?php echo $student['name'] ?></td>
            <td><?php echo $student['age'] ?></td>
            <td><?php echo $student['level'] ?></td>
        </tr>
        <?php } ?>
    </tbody>
</table>
</body>
</html>