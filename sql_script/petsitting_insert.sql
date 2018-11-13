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