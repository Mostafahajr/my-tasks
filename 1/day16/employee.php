
<?php
    include "connection.php";

    $sel_quary = $connect->prepare("SELECT emp.fname as name,dep.dname as department,emp.address as address,emp.salary,sub.fname as manager from employee emp JOIN department dep on emp.dno = dep.dnum JOIN employee sub ON emp.superssn = sub.ssn;");
    $sel_quary->execute();
    $data = $sel_quary->fetchAll(PDO::FETCH_ASSOC);


    // $select_super_quary = $connect->prepare("SELECT emp.* as name,dep.dname as department,concat(sub.fname,' ',sub.lname) as manager from employee emp JOIN department dep on emp.dno = dep.dnum
//join employee sub ON dep.mgrssn = sub.ssn;");
    // $select_super_quary->execute();
    // $dataSuper = $select_super_quary->fetchAll(PDO::FETCH_ASSOC);



?>






<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assests/css/style.css">
    <title>Document</title>
</head>
<body>

    <div class="container">



        <div class="sideBar">
            <ul>
                <li><a href="employee.html">home</a></li>
                <li><a href="employee.html">Employee</a></li>
            </ul>
        </div>
        <div class="center">
            <nav>

                <h2>
                    welcome
                </h2>

                <a href="index.html">
                    <img src="assests/image/user.png" alt="">
                </a>
                
                
            </nav>  
            <div class="content">
                <div class="content_header">
                    <h2>Students</h2>
                    <div class="links">
                        <span>
                            <a href="employee.html">
                                home
                            </a>
                        </span>
                        >
                        <span>
                            <a href="add.html">
                                addNew
                            </a>
                        </span>
                    </div>
                </div>
                <div class="basicDatabase">
                    <h2>Basic database</h2>
                    <div class="filter">
                        <div class="show_num_rows">
                            <span>
                                show
                                <input type="text" >
                                entires
                            </span>
                        </div>
                        <div class="search">
                            <span>
                                search <input type="text">
                            </span>
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                
                                <th>Office</th>
                                <th>Address</th>
                                <th>Salary</th>
                                <th>manager</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($data as $employee) {
                                # code...
                        
                            ?>
                            <tr>
                                <td><?php echo $employee['name'] ?></td>
                                
                                <td><?php echo $employee["department"] ?></td>
                                <td><?php echo $employee['address'] ?></td>
                                <td><?php echo $employee['salary'] ?></td>
                                <td><?php echo $employee['manager'] ?></td>
                            </tr>
                            <?php    } ?>
                           
                        </tbody>
                    </table>
                </div>
                
            </div>


        </div>
       
        
    </div>

    



    
</body>
</html>