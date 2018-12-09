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
    phone_number varchar(15)
);

drop table if exists rating;
create table rating (
	rating_id int primary key auto_increment,
    stars double not null,
    description varchar(250),
    rater_id int not null,
    ratee_id int not null,
    rating_date date,
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

drop trigger if exists check_stars;
delimiter //
create trigger check_stars before insert on rating
for each row
begin
	if (new.stars < 1 or new.stars > 5) then
		signal sqlstate '45000'
		set message_text = 'Stars must be between 1 and 5.';
	end if;
end 
//
delimiter ;

drop trigger if exists check_end_start_date;
delimiter //
create trigger check_end_start_date before insert on request
for each row
begin if (new.start > new.end) then
		signal sqlstate '45000'
		set message_text = 'Start date must be before end date.';
	end if;
end 
//
delimiter ;

drop trigger if exists negative_wage;
delimiter //
create trigger negative_wage before insert on request
for each row
begin if (new.wage < 0) then
		signal sqlstate '45000'
		set message_text = 'Wage cannot be negative.';
	end if;
end
//
delimiter ;

drop trigger if exists check_self_hype;
delimiter //
create trigger check_self_hype before insert on rating
for each row
begin
	if (new.ratee_id = new.rater_id) then
		signal sqlstate '45000'
		set message_text = 'Cannot hype yourself up by being both the rater and the ratee.';
	end if;
end 
//
delimiter ;

drop trigger if exists check_user_email;
delimiter //
create trigger check_user_email before insert on user
for each row
begin
	if (LOCATE("@", NEW.email) = 0) THEN
		SIGNAL SQLSTATE '45000'
		SET MESSAGE_TEXT = 'Email must have an @.';
	end if;
end 
//
delimiter ;

drop trigger if exists check_user_being_rated_is_sitter;
delimiter //
create trigger check_user_being_rated_is_sitter before insert on rating
for each row
begin
	if ((select is_sitter 
			from user
		 where user.user_id = new.ratee_id) = 0) then
		signal sqlstate '45000'
		set message_text = ' Cannot enter a rating about someone who is not a sitter.';
	end if;
end 
//
delimiter ;

drop trigger if exists check_pet_put_up_is_owners;
delimiter //
create trigger check_pet_put_up_is_owners before insert on request
for each row
begin
	if (new.pet_id not in (select pet.pet_id
									from pet
									join user on (pet.owner_id = user.user_id)
									where user.user_id = new.owner_id)) then
		signal sqlstate '45000'
		set message_text = 'Cannot put up a pet that is not your own.';
	end if;
end 
//
delimiter ;

drop function if exists duration;
delimiter //
create function duration(start date, end date) returns integer
begin
  return end - start;
end //
delimiter ;