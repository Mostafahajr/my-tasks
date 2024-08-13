

<?php 

class Person{
    private $id;
    private $name;

    function __construct($id="0", $name="name"){
        $this->id = $id;
        $this->name = $name;
    }

    public function display(){
        echo $this->id . " " . $this->name;
    }

    public function setid($id){
        $this->id = $id;
    }
    
    public function getid(){
        return $this->id;
    }
    
    public function setname($name){
        $this->name = $name;
    }
    
    public function getname(){
        return $this->name;
    }
}

class Employee extends Person{
    private $company_name;
    private $salary;

    function __construct($id, $name, $company_name, $salary){
        parent::__construct($id, $name);
        $this->company_name = $company_name;
        $this->salary = $salary;
    }

    public function display(){
        parent::display();
        echo "<br>";
        echo "company name: $this->company_name<br>";
        echo "salary: $this->salary<br>";
    }

    public function setCompany_name($company_name){
        $this->company_name = $company_name;
    }
    
    public function getCompany_name(){
        return $this->company_name;
    }
    
    public function setSalary($salary){
        $this->salary = $salary;
    }
    
    public function getSalary(){
        return $this->salary;
    }
} 

$p1 = new Employee(1, "Mostafa", "iti", 3000);
$p1->display();



// ------------------------------------------------------------------




// trait t1
// {
//     Function mm (){
//         echo "mm<br>";
//     }
// }

// trait t2
// {
//     Function nn (){
//         echo "nn<br>";
//     }
// }
// class D {
//     Function dd (){
//         echo "dd<br>";
//     }
// }
// class MN extends D{
//     use t1 , t2 ;
// }

// $mn1 = new MN();
// $mn1 ->mm();
// $mn1 ->nn();
// $mn1 ->dd();


?>

