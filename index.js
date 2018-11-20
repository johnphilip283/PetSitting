const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const GET_ALL_PETS_QUERY = "SELECT * FROM pet;";
const ADD_PET_QUERY = "INSERT INTO pet (name, age, description, owner_id, species_id) VALUES (req.body.name, req.body.age, " +
    "req.body.description, req.body.owner_id, req.body.species_id)";

const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'petsitting'
});

connection.connect(err => {
  if (err) {
      return err;
  }
});


app.use(cors());

app.get('/', (req, res) => {

});

app.post('/pets/add', function(req, res) {
    console.log("here")
    connection.query(ADD_PET_QUERY, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            console.log(results);
            return res.json({
                data: results
            })
        }
    })


});

app.get("/pets", (req, res) => {
    console.log("at /pets hurr")
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

app.listen(5000, () => {
    console.log("potato on port 5000");
});