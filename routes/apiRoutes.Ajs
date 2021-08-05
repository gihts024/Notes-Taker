const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const newNote = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');

router.get("/api/notes", (req, res) => {
    fs.readFile(path.join(__dirname,"../db/db.json"), "utf8", (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

router.post("/api/notes", (req, res) => {

    const newNote = req.body;
    newNote.id = uuidv4();

    
    //read
    return fs.readFile(path.join(__dirname,"../db/db.json"), "utf8", (err, data) => {
        if (err) throw err;
    
        //modify
        const notes = JSON.parse(data);
        notes.push(newNote);

        //write
        fs.writeFile(path.join(__dirname,"../db/db.json"), JSON.stringify(notes), () => {
            res.json(newNote);
        });
    });
});

router.delete("/api/notes/:id", (req, res) => {

    //get params
    const id = req.params.id;

    return fs.readFile(path.join(__dirname,"../db/db.json"), "utf8", (err, data) => {
        if (err) throw err;

        //modify
        const notes = JSON.parse(data);
        const filteredNotes = notes.filter((note) => note.id !== id);

        //write
        fs.writeFile(path.join(__dirname,"../db/db.json"), JSON.stringify(filteredNotes), () => {
            res.json({
                targetDestroyed: id
            });
        });
    });
});

module.exports = router;