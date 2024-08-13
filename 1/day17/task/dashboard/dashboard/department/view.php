<?php 
    include "../includes/dbconnection.php";
    $quary  = $connect->prepare("SELECT dep.dname as department,pro.pname,concat(emp.fname,' ',emp.lname) as manager FROM department dep join project pro on pro.dnum = dep.dnum join employee emp on emp.ssn = dep.mgrssn;");
    $quary->execute();
    $data = $quary->fetchAll(PDO::FETCH_ASSOC);

   
?>



<!DOCTYPE html>
<html lang="en">
<head>
      <?php include "../includes/header.php" ?>
  </head>

  <body>

    <div
      id="main-wrapper"
      data-layout="vertical"
      data-navbarbg="skin5"
      data-sidebartype="full"
      data-sidebar-position="absolute"
      data-header-position="absolute"
      data-boxed-layout="full"
    >

      <header class="topbar" data-navbarbg="skin5">
        <?php include "../includes/navbar.php" ?>
    </header>

      <aside class="left-sidebar" data-sidebarbg="skin5">
       <?php include "../includes/asides.php" ?>
      </aside>

      <div class="page-wrapper">
        <!-- Bread crumb -->
        <div class="page-breadcrumb">
          <div class="row">
            <div class="col-12 d-flex no-block align-items-center">
              <h4 class="page-title">departments</h4>
              <div class="ms-auto text-end">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">
                    <a href="#">Add New</a></li>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <!-- End Bread crumb -->

        <!-- Container fluid -->
        <div class="container-fluid">
          <!-- Start Page Content -->
          <div class="row">
            <div class="col-12">
            <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Basic Datatable</h5>
                  <div class="table-responsive">
                    <table
                      id="zero_config"
                      class="table table-striped table-bordered"
                    >
                      <thead>
                        <tr>
                        
                          <th>Department</th>
                          <th>project</th>
                          <th>manager</th>
                          
                        </tr>
                      </thead>
                      <tbody>
                        <?php foreach ($data as  $deparment) {
                            # code...
                        ?>
                        <tr>

                          <td><?php echo $deparment['department'] ?></td>
                          <td><?php echo $deparment['pname'] ?></td>
                          <td><?php echo $deparment['manager'] ?></td>
                          
                        </tr>
                       <?php } ?>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Page Content -->

        </div>
        <!-- End Container fluid -->

        <!-- footer -->
        <footer class="footer text-center">
          All Rights Reserved by Matrix-admin. Designed and Developed by
          <a href="https://www.wrappixel.com">WrapPixel</a>.
        </footer>
        <!-- End footer -->
        
      </div>
      <!-- End Page wrapper -->
    </div>
    <!-- End Wrapper -->
    <?php include "../includes/script.php" ?>
    <!-- All Jquery -->
    <!-- ============================================================== -->
   
  </body>
</html>