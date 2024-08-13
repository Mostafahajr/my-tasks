<?php
// 1- open file
/**
 * r => read only , can't create file 
 * w => write only , create file 
 * r+ => read and write, can't create file 
 * w+ => write and read, create file
 * a => append
 * a+ => append, read
 */

$f=fopen('test.txt',"a+"); // 
// 2- read and write
//==================== write =================
//================== conditions ==============
/**
 * 
 */
// if(file_exists('test.txt')){
//     if(filesize("test.txt") > 0){
//         fwrite($f,"\nmona");
//     }else{
//         fwrite($f,"mona");
//     }
// }

//file_put_contents("test.txt","\nhala",FILE_APPEND);
// ================== read =======================
// ================= all file ===================
//readfile("test.txt"); // string read & print
//echo file_get_contents("test.txt"); // string => no print
//var_dump(file("test.txt")); // return array, no print
//fpassthru($f); // string, print

// ==================== read line by line ===========
//echo fgets($f); // string, no print
// $arr=fgetcsv($f,filesize("test.txt"),",");
// var_dump($arr);
rewind($f);
$data=[];
while(!feof($f)){
    $row=fgetcsv($f,filesize("test.txt"),","); // line in array form
    $data[]=$row;
}

var_dump($data); // return multi array
// 3- close file
fclose($f);


?>