<?php
 
//   $name = "programmer";
//   echo "hello"," ",$name;

// --------------------------------

// $num1 =2;
// $num2 = 3;

// echo  "sum =",$num1 + $num2," ";
// echo  "multi =",$num1 * $num2," ";
// echo  "sub =",$num1 - $num2," ";

// ----------------------------------

// $num3 =2;
// $num4 = 3;
// $num5 = 4;
// $num6 = 5;


// echo "result of ($num3 * $num4)-($num5 * $num6) is",($num3 * $num4)-($num5 * $num6);


// ------------------------------------


// $num1 = 13;
// $num2 = 12;

// $last_digit1 = $num1 % 10;
// $last_digit2 = $num2 % 10;

// echo $last_digit1 + $last_digit2;


// --------------------------------------


// $num = "5321";

// $first_num = $num[0];
// if ($first_num % 2 == 0) {
//     # code...
//     echo "even";

// }else{
//     echo "odd";
// }


// -------------------------------------


// $num = 4321;

// $nums = $num % 1000;

// $res = ($num - $nums) / 1000;

// echo $res;
// if ($res % 2 == 0 ) {
//     # code...
//     echo "even";
// }else{
//     echo "odd";
// }

// ---------------------------------------------

// $memo = 15;
// $momo = 13;
// $k=2;

// if ($momo % $k == 0 && $memo % $k == 0 ) {
//     # code...
//     echo "Both";
// }elseif($memo % $k == 0){
//     echo "Memo Win";
// }elseif($momo % $k == 0){
//     echo "momo win";
// }else{
//     echo "both lost";
// }


// ------------------------------------------------------



// $n1 = 93;

// $f = $n1 / 10;

// $int_f  = (integer) $f;

// $l = $n1 % 10;


// if ($int_f % $l == 0 || $l % $int_f ==0) {
//     # code...
//     echo "luckey";

// }else{
//     echo "unluckey";
// }


// =========================================================




// echo is_nan(200);
// echo is_numeric("200");
// echo is_nan(acos(1.01));

// if (is_numeric($number)) {
//     # code...
//     echo "is number";
// }

// echo is_nan(200.0);

$value1 = " asdasd";
$value2 = acos(4535435);


if (is_numeric($value1)) {
    echo "$value1 is numeric\n";
} else {
    echo "$value1 is not numeric\n";
}

if (is_nan($value2)) {
    echo "$value2 is nan\n";
} else {
    echo "$value2 is a number \n";
}

$a = 12; 
$b = 3; 
$result = $a & $b;
echo $result; 

// 12 : 1100
// 3:0011
// result : 0000 => 0



if (true && true) {
    # code...
    echo "done";
}

?>
