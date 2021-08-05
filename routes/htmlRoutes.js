// Create routes for the pathes
const router = require('express').Router();
const path = require('path');



    // Route to the notes
    router.get('/notes', (req, res)=>{
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    // route to the homepage
    router.get('/', (req, res)=>{
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

        // route to the homepage

    
    router.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
module.exports = router;