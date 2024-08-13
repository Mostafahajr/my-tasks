<?php 

echo "welcome to day2 <br>";

$n=10;

for ($i=1; $i <= $n ; $i++) { 
    # code...
    echo " $i <br>" ;
}

echo "****************************************** <br>";

for ($i=0; $i <= $n; $i++) { 
    # code...

    if ($i % 2 == 0) {
        # code...
        echo $i,"<br>";
    }
}

echo "****************************************** <br>";

$numbers = [3,2,4,5,6];
$max = $numbers[0];
for ($i=0; $i < 5; $i++) { 
    # code...
    if ($max < $numbers[$i] ) {
        # code...
        $max = $numbers[$i];
        
    }

}
echo $max,"<br>";

echo "****************************************** <br>";



for ($i=1; $i <= 100 ; $i++) { 
    # code...
    if ($i == 2 || $i == 3) {
        # code...
        echo "$i ";
    }
    if ($i % 2 != 0 && $i % 3 !=0 && $i > 1) {
        # code...
        echo "$i ";
        
    }
}

    
echo "****************************************** <br>";

$prime_number = 5;

if ($prime_number == 2 || $prime_number == 3) {
    # code...
    echo "$prime_number is a prime number <br>";
}
if ($prime_number % 2 != 0 && $prime_number % 3 !=0 && $prime_number > 1) {
    # code...
    echo "$prime_number is a prime number <br>";
    
}else
{
    echo "$prime_number is not a prime number <br>";
}

echo "****************************************** <br>";

$plindrome ="12321";

$plindrome = (string) $plindrome;
$rev_str;
$nolandZero_plind = '';
$plindrome_split = str_split($plindrome);



for ($i=0; $i < $counter; $i++) { 
   
    if ($plindrome[$i] > 0) {
       
        break;
    }
    array_shift($plindrome_split);  
}

$counter =  count($plindrome_split);


for ($i=$counter-1; $i > -1 ; $i--) { 
    # code...

    $rev_str .= $plindrome_split[$i];
}
if ($plindrome == $rev_str) {
    # code...
    echo "$plindrome is plindrome <br>";
}else{
    echo "$plindrome is not plindrome <br>";
}

echo "****************************************** <br>";


$divised_number = 100;

for ($i=1; $i <= $divised_number; $i++) { 
    # code...
    if ($divised_number % $i == 0 ) {
        # code...
        echo $i, "<br>";
    }
}

echo "****************************************** <br>";

$a = 1;
$b = 20;

for ($i=$a; $i <= $b  ; $i++) { 
    # code...
    $i_str = (string)$i;
    $i_split = str_split($i_str);
    var_dump($i_split) ;

   foreach($i_split as $digit) { 
    # code...
    if ($digit != 4  && $digit!=7) {
        # code...
        break;
    }
    echo "$i_str <br>";

    
   } 
}

echo "****************************************** <br>";

$n_ang = 10;
for ($i=0; $i < $n_ang; $i++) { 
    # code...
    for ($x=0; $x <= $i ; $x++) { 
        # code..
        echo "*";
    }
    echo "<br>";

}



echo "********************search********************** <br>";

$array = array("a" => 1, "b" => 2, "c" => 3);
unset($array["b"]);// destory variable from memory

print_r($array);


echo "****************************************** <br>";

$array1 = array(1, 2, 3);
$array2 = array(4, 5, 6);

$result = array_merge($array1, $array2);

print_r($result);


echo "****************************************** <br>";
$arr_shift = [1,2,3,4,5,6];

$remove = array_shift($arr_shift);
$add = array_unshift($arr_shift,5);

var_dump($arr_shift) ;


echo "****************************************** <br>";

$array = array("a" => 3, "b" => 1, "c" => 4);
asort($array);
print_r($array);

$array = array("a" => 3, "b" => 1, "c" => 4);
arsort($array);
print_r($array);



$array1 = array("a" => 1, "b" => 2);
$array2 = array("b" => 2, "a" => 1);

var_dump($array1 == $array2);
var_dump($array1 === $array2);



?>