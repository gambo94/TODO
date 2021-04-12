const fs = require('fs');
let database = require('../config/db');
let jsonDB = database.jsonDB;



    //let prop;
    //let val;
    
    const editTask = (id, prop, val, readFile) => {
        try {
            jsonDB = JSON.parse(fs.readFileSync("TODOlist.json"));
        } catch (error) {
            // console.log(error);
        }
    
        // Checking if element exists
        let index = jsonDB.findIndex((item) => item.id === id);
    
        // if item exists, update key(s) and value(s) for the one(s) provided.
        if(index === -1){
            console.log("This task doesn't exist");
        } else {
            jsonDB[index][prop] = val;
            console.log(`${prop} of task with id ${id} has been modified`)
        }
        fs.writeFileSync("TODOlist.json", JSON.stringify(jsonDB));
        readFile(id);
    }

module.exports = editTask;