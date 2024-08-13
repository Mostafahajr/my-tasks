-- SQL "Structured Query Lang"
	-- DDL "Data Defintion Lang"
		-- create - alter - drop
	-- DML "Data Manipulation Lang"
		-- insert - update - delete - select
	-- DCL "Data Control Lang"
		-- grant - revoke
        
	-- DQL "Data Query Lang"
		-- select
        
-- ****************************************

use labschema;
use php_schema;

-- DDL
create table student(
	-- col_name data_type constraint
    stid int primary key,
    sname varchar(30) not null,
    telephone nvarchar(40) unique,
    dob date,
    city varchar(20) default "Cairo"
);

alter table student drop column telephone;
alter table student add column salary double;
alter table student modify column salary int;
alter table student drop constraint fk_student;


create table student_phones(
	studentid int,
    phone varchar(12),
    primary key (studentid,phone),
    foreign key (studentid) references student(stid)
);

create table course(
	cid int,
    cname varchar(20),
    primary key (cid)
);

create table student_courses(
	stid int,
    cid int,
    primary key (stid,cid),
    constraint fk_student foreign key (stid) references student(stid),
    foreign key (cid) references course (cid)
);

drop table student;
drop table student_phones;

-- insert

insert into student values (10,'Ahmed','2020-10-10','Alex',2000);
insert into student values (20,'Mohamed','2020-10-10','Alex',2000),(30,'Mona','2020-10-10','Alex',2000),(40,'Asmaa','2020-10-10','Alex',2000);

insert into student (stid,sname) values (60,'Ali');
insert into student (stid) values (80);

insert into student_phones values(10,'0123');
insert into student_phones values(100,'0123');
insert into student_phones values(20,'0124'),(20,'0125'),(20,'1245');

-- update 
update student
set salary = 5000
where stid=60;

update student
set salary = 2500
where city='Alex'
or sname='Ahmed';

delete from student
where stid=60;


-- select col_names
-- from table name

select fname , lname
from employee;

select concat(fname,' ',lname) as 'Emp Fullname'
from employee;

select *
from employee;

select concat(fname,' ',lname) as 'Emp Fullname' , salary
from employee
where gender='m';

 -- comparison operator > < = <= >= <>
select concat(fname,' ',lname) as 'Emp Fullname' , salary
from employee
where gender='m'
and salary > 1500;


select concat(fname,' ',lname) as 'Emp Fullname' , salary
from employee
where gender='m'
or salary > 1500;

select concat(fname,' ',lname) as 'Emp Fullname' , salary
from employee
where gender='m'
and salary not in (1000,1500,2000);

select concat(fname,' ',lname) as 'Emp Fullname' , salary
from employee
where gender='m'
and salary between 1000 and 2500;

select concat(fname,' ',lname) as 'Emp Fullname' , salary
from employee
where fname like '%a%';

-- arthimatic operation

select concat(fname,' ',lname) as 'Emp Fullname' , salary , salary+salary*0.1 as 'Raise'
from employee;