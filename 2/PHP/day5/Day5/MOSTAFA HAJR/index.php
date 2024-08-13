<?php 

/** connection with database 
 * PDO  => different types of database => oracle , 
 * postgree,mySql lite mySql Server
 * mysqli =>mysql
*/

 /** connection with database
  * cardtionals => setUP
  * $host=> server name => localhost
  *user name
  * password
  * datatype database
  *database name
   */

   /** First connection with database insert data in table users */

//    include('./connection.php');
   require('./connection.php');

//    print_r($connection);
$query="select * from users"; // string
// var_dump($query);

$sqlQuery=$connection->prepare($query);// convert to sqlQuery
// var_dump($sqlQuery);

$sqlQuery->execute();// run

/** fetch=> display first record fetch all => all records*/
$result=$sqlQuery->fetchAll(PDO::FETCH_ASSOC); // getData
print_r($result);


?>