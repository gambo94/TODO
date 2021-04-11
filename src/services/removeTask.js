const fs = require('fs');
let database = require('../config/db');
let jsonDB = database.jsonDB;

function removeTask(id) {

    // reading the file and storing its data into a variable 
    jsonDB = JSON.parse(fs.readFileSync("TODOlist.json"));
    let index = jsonDB.findIndex((item) => item.id === id);
    // if it exists
    if(index > -1){
        // remove 1 item at position 'index'
        jsonDB.splice(index,1);
        fs.writeFileSync("TODOlist.json", JSON.stringify(jsonDB));
        console.log(`Task removed successfully!`);
    } else {
        console.log(`The task you were looking was not found. Type 'getHelp' to find out how to list the items.`);
    }
}

module.exports = {removeTask};
