drop database if exists petsitting;

create database petsitting;
use petsitting;

drop table if exists species;
create table species (
	species_id int primary key auto_increment,
    species_name varchar(50)
);

drop table if exists user;
create table user (
	user_id int primary key auto_increment,
    name varchar(100) not null,
    email varchar(100) not null unique,
    password varchar(50) not null,
    is_sitter tinyint default 0,
    city varchar(100),
    phone_number varchar(10)
);

drop table if exists rating;
create table rating (
	rating_id int primary key auto_increment,
    stars int not null,
    description varchar(250),
    rater_id int not null,
    ratee_id int not null,
    constraint check (stars BETWEEN 1 AND 5),
    constraint foreign key (rater_id) references user (user_id),
    constraint foreign key (ratee_id) references user (user_id)
);

drop table if exists pet;
create table pet (
	pet_id int primary key auto_increment,
    name varchar(100) not null,
    age int,
    description varchar(250),
    owner_id int not null,
    species_id int not null,
    constraint foreign key (owner_id) references user(user_id),
    constraint foreign key (species_id) references species (species_id)
);

drop table if exists photo;
create table photo (
	photo_id int primary key auto_increment,
    pet_id int not null,
    image blob not null,
    constraint foreign key (pet_id) references pet (pet_id)
);

drop table if exists request;
create table request (
	request_id int primary key auto_increment,
    title varchar(100) not null,
    description varchar(500),
    owner_id int not null,
    pet_id int not null,
    start date not null,
    end date not null,
    wage double,
    constraint foreign key (pet_id) references pet (pet_id),
    constraint foreign key (owner_id) references user (user_id)
);

drop table if exists preference;
create table preference (
	user_id int not null,
    species_id int not null,
     constraint foreign key (user_id) references user (user_id),
      constraint foreign key (species_id) references species (species_id)
);