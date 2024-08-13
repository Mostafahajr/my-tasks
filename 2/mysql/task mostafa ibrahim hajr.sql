-- select * from employee;

-- -- -------------------------------------------- 

-- select fname,lname,Dno,salary from employee;



-- -- -----------------------------------------

-- select pname,plocation ,dnum 
-- from project;


-- -- ------------------------------------------ 

-- select concat(fname," ",lname) as "full name",salary*.1 as 'annual comm'
-- from employee;

-- -- ------------------------------

-- select ssn,fname 
-- from employee
-- where salary > 1000; 


-- -- ------------------------------

-- select ssn,fname,Salary+Salary*12 as salary
-- from employee
-- where salary*12 > 10000; 

-- -- -----------------------------------------

-- select salary,fname,gender 
-- from employee
-- where gender = "f"; 


-- -- --------------------------------------------

-- select Dname,Dnum from departments
-- where mgrssn = 968574;

-- -- ------------------------------------------

-- select  pnumber,plocation,pname 
-- from project
-- where dnum = 10;

-- -- ------------------------------------------ 

-- insert into employee values(102672,"mostafa","hajr","2001/01/05","menyaelqamh","m",1500,112233,30);


-- insert into employee (fname,lname,ssn,bdate,address,gender,dno)values("ahmed","ibrahim",102660,"2002/03/31","menofia","m",30);


-- insert into departments values ("dept it",100,112233,"2005/11/01");

-- -- ------------------------------------------------------

-- update departments 
-- set mgrssn = 968574
-- where Dnum = 100;

-- update departments
-- set mgrssn = 102672 
-- where  Dnum = 20;


-- update employee
-- set Superssn = 102672 
-- where ssn = 102660;


-- -- ------------------------------

-- delete from employee
-- where ssn=223344;

-- select * from employee;

-- delete from dependent where essn =223344;

-- delete from works_for where essn = 223344;

-- update departments
-- set mgrssn = 102672
-- where mgrssn  = 102660;
-- -- ---------------------------------------- 

-- update employee
-- set salary =salary + salary*.2
-- where ssn = 102672;

-- ---------------------------------------- day2 

-- 1 

select dep.Dnum,em.ssn,concat(em.Fname,' ',em.Lname)as 'full name'
from departments dep,employee em
where dep.MGRSSN = em.SSN;


-- 2

select dep.Dname,pro.Pname
from departments dep,project pro
where dep.Dnum = pro.Dnum;

-- 3

select depn.*, concat(em.Fname,' ',em.Lname) as 'full name'
from dependent depn,employee em
where em.SSN = depn.ESSN;

-- 4
	
select depn.Dependent_name,depn.Sex,em.fname 
from dependent depn,employee em
where depn.Sex = "F" and em.Gender = "F"
union
select depn.Dependent_name,depn.Sex,em.fname 
from dependent depn,employee em
where depn.Sex = "m" and em.Gender = "m";

-- ---5

select em.* 
from  employee em , departments depa
where em.SSN = depa.MGRSSN;

-- --6
select * from project;
select  pnumber,Pname,Plocation
from project
where city = "Alex" or city = "cairo";

-- 7--------------

select * 
from project
where Pname like "a%"; 


-- 8---------

select em.* from employee em
where em.DNO = 30 and em.Salary between 1000 and 2000;

-- 9 ----

select * from works_for;

select  concat(em.fname,' ',em.lname) as "full name"
from employee em,project pro,works_for wor
where em.SSN = wor.Essn and  wor.hours >= 10 and   em.DNO = 10 and pro.Pname = "Al Rabwah" and wor.Pno = pro.Pnumber ;

 -- -----------
 -- 10
 
select concat(em.fname,' ',em.lname) as 'full name'
from employee em
where em.SuperSSN = (select ssn 
					from employee
                    where fname = "kamel");
 
 -- 11
 
 select pro.pname,sum(w.hours)
 from project pro, works_for w
 where pro.pnumber = w.Pno
 group by pro.pname;
 
 
 -- 12
 
select em.fname,pro.Pname
from employee em,project pro
where em.DNO = pro.Dnum
order by pro.pname;


-- 13



-- select depa.* 
-- from departments depa,employee em
-- where em.SSN = ();

select departments.*
from departments , employee
where employee.DNO = departments.Dnum and employee.ssn =(
															select min(em.ssn)
															from employee em
														);

--  14

select  departments.Dname,avg(employee.Salary),max(employee.Salary),min(employee.Salary)
from departments,employee
where departments.Dnum = employee.DNO
group by  departments.Dname;


-- 15

select employee.lname,employee.Fname
from employee,departments
where employee.ssn = departments.MGRSSN
and employee.SSN not in (
select dependent.ESSN
from dependent
);

-- 16

select d.dnum, d.dname,count(e.ssn)
from employee e
join departments d on e.DNO = d.Dnum
group by d.Dnum 
having avg(e.Salary) < (select avg(Salary)from employee);


--  17
select employee.lname, project.Pname,project.Dnum
from employee,project,works_for
where employee.ssn =works_for.Essn and project.Pnumber = works_for.Pno
order by project.Dnum,employee.lname;



-- 18
select project.Pnumber,departments.Dname,employee.Lname,employee.Bdate,employee.Address
from project,departments,employee
where  project.City = "Cairo" and project.Dnum = departments.Dnum and departments.MGRSSN = employee.SSN
group by project.Pnumber;


-- 19

SELECT p.pnumber
FROM project p
WHERE EXISTS (
    SELECT *
    FROM employee e
    WHERE (e.dno = p.dnum AND e.lname = 'Mohamed')); 

 


-- 20

select employee.SSN,employee.Fname
from employee
where   not exists(
	select dependent.ESSN
    from dependent
    where employee.ssn = dependent.ESSN
) ;

 