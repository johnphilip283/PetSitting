use petsitting;

INSERT INTO user VALUES
	(1, "John Philip", "philip.j@husky.neu.edu", "potato", 1, "Boston, MA", "914-826-5190"),
	(2, "Amy Luo", "luo.am@husky.neu.edu", "breab", 0, "Boston, MA", "914-666-6666"),
	(3, "Caroline McCadden", "mccadden.c@husky.neu.edu", "abc123", 1, "Reading, MA", "212-453-3678"),
	(4, "John Rachlin", "rachlin.j@northeastern.edu", "database4lyfe", 1, "Boston, MA", "123-456-7890");

INSERT INTO species VALUES
	(1, "Dog"),
	(2, "Cat"),
	(3, "Bird"),
	(4, "Reptiles and Scales"),
	(5, "Rabbit"),
	(6, "Small Animal"),
	(7, "Barnyard"),
	(8, "Fish");

INSERT INTO pet VALUES
	(1, "Tofu", 1, "A dog pretending to be a cat.", 2, 1),
	(2, "UFO", 1, "A smol lump who likes sunflower seeds.", 2, 6),
	(3, " Sparky", 3, "he's a guard pomeranian.", 1, 1),
	(4, "Tootsie", 2, "taken by someone else.", 4, 5);
    
INSERT INTO request VALUES
	(1, "Looking for reputable dog-sitter Jan.-Feb.", "Someone pls feed my stinky bean. She swears she’s a dog but this is highly debatable. 
    Will get zoomies around 7pm daily. Likes broccoli and the blood of her enemies as snacks. Also requires a joint supplement because her 
    leggers are too long and this dog has no chill.", 2, 1, "2019-01-01", "2019-02-14", 20),
    (2, "Do hamsters even need sitters?", "I hope Reslife doesn’t find out about my illegal hamster. High maintenance hamster. 
    Requires a minimum of 7 sunflower seeds a day. Likes to aggressively run on her wheel during romantic movies.", 2, 2, "2019-01-01", "2019-02-14", 10),
    (3, "I want a bunny.", "Tootsie is in a loving home that is not mine.", 4, 4, "2018-12-05", "2019-12-31", 20);
    
INSERT INTO rating VALUES
	(1, 3, "Extremely okay hamster sitter. Does not fully appreciate the power of UFO but fed sufficient amount of sunflower seeds.", 2, 1, '2018-09-05');
    
INSERT INTO preference VALUES
	(1, 1),
    (1, 2),
    (1, 6);

    
    
    
    
    
    
    
    
    
    