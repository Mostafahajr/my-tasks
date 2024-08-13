<?php
// $arr=[1,2,3];
// $arr=array(1,2,3);

// $arr=['FnAmE'=>'ali','LasT'=>'ahmed'];
// $arr1=array_change_key_case($arr,CASE_UPPER); // upper case, array 
// var_dump($arr1);

// $arr=['ali','mona','sara','hala','ahmed']; 
// $arr1=array_chunk($arr,2,true); // return multi array
// var_dump($arr1);
// [ali,mona,sara,hala]
//var_dump(array_column($students,'name'));
//var_dump(array_combine($arr1,$arr2)); // assoc array
// var_dump(array_count_values($students1));
// $odd=array_filter($numbers,function($x){
//     return !($x%2); // 1,3
// });
// var_dump($odd); // all array
// echo array_key_exists('std15',$students1);
// arsort($students);
// var_dump($students);
// echo in_array('hany',$students);
// shuffle($students);
// var_dump($students);
$students_info=[
    ['name'=>'ali','age'=>20,'level'=>1],
    ['name'=>'mona','age'=>21,'level'=>2],
    ['name'=>'sara','age'=>22,'level'=>3],
    ['name'=>'hala','age'=>25,'level'=>4]
];
$students=['std1'=>'mona','std2'=>'ali','std3'=>'sara','std4'=>'hala','std5'=>'ahmed','std6'=>'noha'];
//$students1=['std1'=>'mona','std2'=>'ali','std3'=>'sara'];
// $arr1=['username','password'];
// $arr2=['omnia',123];
$numbers=[1,2,3,4,5,6,7,8,9,10];

// in_array, empty, current, shuffle, explode, implode

// echo current($students); // mona
// echo next($students); // ali
// echo current($students); // ali
// echo prev($students); // mona
// end($students);
// echo current($students);
// reset($students);
// echo current($students); // mona
//$str='ali,sara,mona'; // string => array
// $arr=explode(",",$str,2);
// var_dump($arr);

// $arr=['sara','ahmed']; // array => string
// $str=implode(" ",$arr);
// echo $str;
?>