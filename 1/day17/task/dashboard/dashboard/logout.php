<?php
session_start();
setcookie("user", "", time() - 3600);
session_unset();
session_regenerate_id();
session_destroy();
header("location: login.php");

?>