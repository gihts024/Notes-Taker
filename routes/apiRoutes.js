// Create global variables to be accessed
const fs = require("fs");
var data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
const router = require('express').Router();

const path = require('path');


module.exports = function(app) {

    // access the notes from the db
    app.get("/api/notes", function(req, res) {
       
        res.json(data);

    });
// access the notes id
    app.get("/api/notes/:id", function(req, res) {

        res.json(data[Number(req.params.id)]);

    });
// post the notes after a new note has been added
    app.post("/api/notes", function(req, res) {

        var newNote = req.body;
        var newID = (data.length).toString();
        console.log(newID);
        newNote.id = newID;
        data.push(newNote);
        
        fs.writeFileSync("./db/db.json", JSON.stringify(data), function(err) {
            if (err) throw (err);        
        }); 

        res.json(data);    

    });

    // allo deleting of the identified notes using filter
    app.delete("/api/notes/:id", function(req, res) {

        var noteId = req.params.id;
        var newId = 0;
        console.log(`Deleting note with id ${noteId}`);
        data = data.filter(currentNote => {
           return currentNote.id != noteId;
        });
        for (currentNote of data) {
            currentNote.id = newId.toString();
            newId++;
        }
        fs.writeFileSync("./db/db.json", JSON.stringify(data));
        res.json(data);
    }); 


}

