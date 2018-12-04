const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'petsitting'
});

connection.connect(err => {
    if (err) {
        console.log(err);
        return err;
    }
});
app.use(cors());


app.get('/', (req, res) => {
    res.send("/pets for all pets")
});

//////////////////// USERS //////////////////////

// gets all users
app.get("/users", (req, res) => {
    const GET_ALL_USERS = "SELECT * FROM USER;";
    connection.query(GET_ALL_USERS, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    })
});

// gets user with user_id
app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    const GET_USER = `SELECT * FROM user WHERE user_id=${id};`;
    connection.query(GET_USER, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    })
});

// get user's pets with user_id
app.get('/users/:id/pets', function (req, res) {
    const id = req.params.id;
    const GET_PET = `SELECT pet_id, pet.name as name, age, description, species_name
     FROM pet join species using (species_id) WHERE owner_id = ${id};`;

    connection.query(GET_PET, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    })
});

// get all of the user_id's listings
app.get('/users/:id/listings', function (req, res) {
    const id = req.params.id;
    const GET_USER_LISTINGS = `SELECT * FROM (
        select request_id, title, user_id, user.name as owner, start, end, city, 
            request.description, wage, pet_id, pet.name as pet_name, species_name as species
        from request join user on (owner_id = user_id)
	                 join pet using (pet_id)
                     join species using (species_id)) as listings
        WHERE user_id = ${id};`;

    connection.query(GET_USER_LISTINGS, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    })
});

// get user's preferences
app.get('/users/:id/preferences', function (req, res) {
    const id = req.params.id;
    const GET_USER_PREFERENCES = `SELECT species_name FROM preference join species using 
        (species_id) WHERE user_id = ${id};`;

    connection.query(GET_USER_PREFERENCES, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    })
});

//////////////////// PETS //////////////////////

// gets all pets
app.get("/pets", (req, res) => {
    const GET_ALL_PETS_QUERY = "SELECT * FROM pet;";
    connection.query(GET_ALL_PETS_QUERY, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    })
});

// adds a pet
app.get('/pets/add', function (req, res) {
    const {name, age, description, owner_id, species_id} = req.query;
    const ADD_PET_QUERY = `INSERT INTO pet (name, age, description, owner_id, species_id) VALUES ('${name}', ${age}, '${description}', ${owner_id}, ${species_id});`;

    connection.query(ADD_PET_QUERY, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            res.send({
                message: "Successfully added pet.",
                data: results
            })
        }
    });
});

// get pet with pet_id
app.get('/pets/:id', function (req, res) {
    const id = req.params.id;
    const GET_PET = `SELECT pet.name as pet_name, age, description, user.name as owner_name, species_name as species FROM pet join species using (species_id) join user on (owner_id = user_id) WHERE pet_id = ${id};`;

    connection.query(GET_PET, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    })
});

// gets the photos of pet with pet_id
app.get('/pets/:id/photos', function (req, res) {
    const id = req.params.id;
    const GET_PET_PHOTOS = `SELECT image FROM photo WHERE pet_id = ${id}`;

    connection.query(GET_PET_PHOTOS, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    })
});




app.get("/species", (req, res) => {
    const GET_ALL_SPECIES_QUERY = "SELECT * FROM species;";
    connection.query(GET_ALL_SPECIES_QUERY, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    })
});


//////////////////// LISTINGS //////////////////////

// gets all the job listings
app.get("/listings", (req, res) => {
    const GET_ALL_LISTINGS = "SELECT request_id, title, user_id, user.name as owner, start, end, city, " +
        "request.description, wage, pet_id, pet.name as pet_name, species_name as species\n" +
        "from request join user on (owner_id = user_id)\n" +
        "\tjoin pet using (pet_id)\n" +
        "join species using (species_id);";

    connection.query(GET_ALL_LISTINGS, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    })
});

// adds a listing
app.get("/listings/create", (req, res) => {
    const {owner_id, title, start, end, pet_id, wage, description} = req.query;
    const ADD_LISTING = `INSERT into request (owner_id, title, start, end, pet_id, wage, description) VALUES (${owner_id}, '${title}', '${start}', '${end}' , ${pet_id}, ${wage}, '${description}');`;

    connection.query(ADD_LISTING, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                message: 'Successfully created listing.',
                data: results
            })
        }
    })
});

//////////////////// SITTERS //////////////////////

app.get("/sitters", (req, res) => {
    const GET_ALL_SITTERS = 'select user_id, user.name, city, email, phone_number, round(avg(stars), 2) as avg_rating\n' +
        'from user left join rating on (user_id=ratee_id)\n' +
        'where user.is_sitter = 1\n' +
        'group by user.name, city, email, phone_number;';

    connection.query(GET_ALL_SITTERS, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    })
});

// gets all ratings about that user_id
app.get("/ratings/:id", (req, res) => {
    const id = req.params.id;
    const GET_USER_RATINGS = `select stars, rating_date, description, user_id as rater_id, user.name as rater_name
    from rating join user on (rater_id = user_id)
    where ratee_id = ${id};`;

    connection.query(GET_USER_RATINGS, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    })
});


app.listen(5000, () => {
    console.log("potato on port 5000");
});