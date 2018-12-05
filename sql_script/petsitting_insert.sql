use petsitting;

INSERT INTO user VALUES
	(1, "John Philip", "philip.j@husky.neu.edu", "potato", 1, "Boston", "9148265190"),
	(2, "Amy Luo", "luo.am@husky.neu.edu", "breab", 0, "Boston", "9146666666"),
	(3, "Caroline McCadden", "mccadden.c@husky.neu.edu", "abc123", 1, "Reading", "2124533678"),
	(4, "John Rachlin", "rachlin.j@northeastern.edu", "database4lyfe", 1, "Boston", "1234567890");

INSERT INTO species VALUES
	(1, "Dog"),
	(2, "Cat"),
	(3, "Bird"),
	(4, "Reptiles and Scales"),
	(5, "Rabbit"),
	(6, "Small Animals"),
	(7, "Barnyard"),
	(8, "Fish");


INSERT INTO pet VALUES
	(1, "Tofu", 1, "A dog pretending to be a cat.", 2, 1),
	(2, "UFO", 1, "A smol lump who likes sunflower seeds.", 2, 6),
	(3, " Sparky", 3, "he's a guard pomeranian.", 1, 1),
	(4, "Tootsie", 2, "taken by someone else.", 4, 5);
    
INSERT INTO request VALUES
	(1, "Looking for reputable dog-sitter Jan.-Feb.", "Someone pls feed my stinky bean.", 2, 1, "2019-01-01", "2019-02-14", 20),
    (2, "Do hamsters even need sitters?", "I hope Reslife doesn’t find out about my illegal hamster.", 2, 2, "2019-01-01", "2019-02-14", 10),
    (3, "I want a bunny.", "Tootsie is in a loving home that is not mine.", 4, 4, "2018-12-05", "2019-12-31", 20);
    
INSERT INTO rating VALUES
	(1, 3, "Extremely okay hamster sitter.", 2, 1);
    
INSERT INTO preference VALUES
	(1, 1),
    (1, 2),
    (1, 6);

INSERT INTO request (title, description, owner_id, pet_id, start, end, wage) VALUES ("fishy wishy", "this is a fish. his name is rummy. take care of him.", 1, 1, DATE(NOW()), DATE_ADD(NOW(), INTERVAL 1 DAY), 10);
INSERT INTO rating (stars, description, rater_id, ratee_id) VALUES (2, "amy got hit with that ddu ddu", 1, 2);
INSERT INTO user (user_id, name, email, password, is_sitter, city, phone_number) VALUES (5, "TImothee Chalamet", "timmyhusky.neu.edu", "callmebyyourname", 1, "Boston", "9149789678");
INSERT INTO rating (stars, description, rater_id, ratee_id) VALUES (4, "I'm absolutely amazing. I'm the best petsitter I've ever had.", 3, 3);
INSERT INTO request (title, description, owner_id, pet_id, start, end, wage) VALUES ("fishy wishy", "this is a fish. his name is rummy. take care of him.", 1, 3, DATE(NOW()), DATE_ADD(NOW(), INTERVAL 1 DAY), -1);
INSERT INTO request (title, description, owner_id, pet_id, start, end, wage) VALUES ("i need snake help", "amy's a snake and she needs to be pet sat. srs inquiries only. may bite upon presentation of crappy k-pop.", 2, 2,  DATE_ADD(NOW(), INTERVAL 1 DAY), DATE(NOW()), 1);
INSERT INTO rating (stars, description, rater_id, ratee_id) VALUES (10, "This person was an absolutely great sitter. great taste in music. perfect human being. ", 2, 1);
INSERT INTO rating (stars, description, rater_id, ratee_id) VALUES (10, "This person was an absolutely great sitter. great taste in music. perfect human being. ", 2, 1);


    
    