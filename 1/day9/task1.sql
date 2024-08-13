create database company;

use company;

create table office(
num int not null unique  primary key,
location varchar(255) not null,
mgrssn int not null,
foreign key (mgrssn) references employee(id)
); 


create table employee(
id int not null unique primary key,
emp_name varchar(255) not null,
off_num int not null 
);

alter table employee add foreign key (off_num) references office(num); 

create table property(

id int not null unique primary key,
address varchar(255) not null,
state varchar(255) not null,
city varchar(255) not null,
zip_code varchar(255) not null,
off_num int not null,
foreign key (off_num) references office(num)
);



create table owner(

id int not null unique primary key,
own_name varchar(255)
);


create table owner_proberty(
id_prop int not null ,
id_own int not null,
percent decimal not null,
primary key(id_prop,id_own),
foreign key (id_prop) references property(id),
foreign key (id_own) references owner(id)

);



-- ------------ Task 2------------------------

create database music_company;

use music_company;

create table musicana(id int primary key unique auto_increment not null,name varchar(255) not null,
						street varchar(255) , city varchar(255));
                        
                        
create table musicana_phone(id_music int not null ,
							phone varchar(255),
                            primary key(id_music,phone),
                            foreign key (id_music) references musicana(id));



create table song(title varchar(255) primary key unique not null,
					author varchar(255),
                    album_title varchar(255),
                    foreign key (album_title) references album(title)
                    );


create table album(title varchar(255) primary key unique not null,
					copyright_date varchar(255) not null,
                    identifier varchar(255) not null,
                    id_music int,
                    foreign key (id_music) references musicana(id)
					);
                    
                    
create table musicana_song (id_music int ,
							song_title varchar(255),
                            primary key (id_music,song_title),
                            foreign key (id_music) references musicana(id),
                            foreign key (song_title) references song(title)
                            );
                            
create table instruments(name varchar(255) primary key unique not null,
						music_key varchar(255)
							);

create table music_insrt(id_music int , 
						name_ins varchar(255),
                        foreign key (id_music) references musicana(id),
                        foreign key (name_ins) references instruments(name)
                        );




