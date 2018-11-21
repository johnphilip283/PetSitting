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

// gets the pets of the user of that user_id
app.get('/pets/:id', function (req, res) {
    const id = req.params.id;
    const GET_PET = `SELECT pet.name as pet_name, age, description, user.name as owner_name, species_name as species FROM pet 
    join species using (species_id) join user on (owner_id = user_id) WHERE pet_id = ${id};`;

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


// adds a pet to the user_id
app.get('/pets/add', function (req, res) {
    const {name, age, description, owner_id, species_id} = req.query
    const ADD_PET_QUERY = `INSERT INTO pet (name, age, description, owner_id, species_id) VALUES ('${name}', ${age}, ` +
        `'${description}', ${owner_id}, ${species_id})`;

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



app.listen(5000, () => {
    console.log("potato on port 5000");
});