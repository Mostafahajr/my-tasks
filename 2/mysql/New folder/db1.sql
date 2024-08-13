create table student(st_id int,name varchar(40));

-- ------------------------------------------


select * from empolyee;

-- -------------------------------------------- 

select fname,lname,Dno,salary from empolyee;



-- -----------------------------------------

select pname,plocation ,department_name 
from employee,department
where dnum = dnumber;

-- ------------------------------------------ 

select concat(fname," ",lname),salary*.1 as 'annual comm'
from employee;

-- ------------------------------

select ssn,fname 
from employee
where salary > 1000; 


-- ------------------------------

select ssn,fname 
from employee
where salary*12 > 10000; 

-- -----------------------------------------

select salary,fname 
from employee
where gender = "f"; 


-- --------------------------------------------

select dname,dnumber from department
where mgrssn = 968574;

-- ------------------------------------------

select  pnumber,plocation,pname 
from project
where dnum = 10;

-- ------------------------------------------ 

insert into empolyee values("mostafa","hajr",102672,"31/3/2001","menyaelqamh","m",1500,112233,30);


insert into empolyee (fname,lname,ssn,bdate,address,sex,dno)values("ahmed","ibrahim",102660,"5/1/2001","menofia","m",30);


insert into department values ("dept it",100,112233,"1/11/2005");

-- ------------------------------------------------------

update department 
set mgrssn = 968574
where dnumber = 100;

update department
set mgrssn = 102672 
where  dnumber = 20;


update employee
set superssn = 102672 
where ssn = 102660;


-- ------------------------------

delete from empolyee
where ssn=102660  ;

delete from dependent where essn =102660;

delete from work_for where essn = 102660;

update department
set mgrssn = 102672
where mgrssn  = 102660;
-- ---------------------------------------- 

update employee
set salary =salary + salary*.2
where ssn = 102672;





