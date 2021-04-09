const fs = require('fs');
const yargs = require('yargs');

let prop;
let val;

const applyChange = (id, prop, val) => {
    let jsonDB = [];
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
        console.log(`${prop} of task with id ${index+1} has been modified`)
    }
    fs.writeFileSync("TODOlist.json", JSON.stringify(jsonDB));
}

const update = (id) => {

    for (let key in yargs.argv) {
        prop = key;
        val = yargs.argv[prop]
        if (key == 'user' ||key == 'title' || key == 'startDate' || key == 'finishDate') {
            applyChange(id, prop, val);
        } else if (key == 'status') {
            if (val == 'DONE' || val == 'PENDING' || val == 'IN PROCESS') {
                applyChange(id, prop, val);
            } else {
                console.log('Could not modify Status. Make sure to enter one of the following options: "DONE", "PENDING", "IN PROCESS". Type "getHelp" to find them out');
            }
        }  
    } 
}

module.exports = update;