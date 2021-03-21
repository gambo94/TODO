const fs = require('fs');

// importing db module in which there's the array that represents JSON file
let jsonDB = require('./db');

// count in order to keep track of IDs
let idCount = 1;

const addToList = (title, startDate, finishDate, userName) => {
    // creating the task object to be pushed into jsonDB array
    let task = {
        id: idCount,
        title: title,
        status: 'PENDING',
        startDate: startDate,
        finishDate: finishDate,
        user: userName,
    }
    
    // reading to check if file exists. 
    try {
        // this helps to mantain the same copy of the file to keep adding objects to the array
        jsonDB = JSON.parse(fs.readFileSync("TODOlist.json"));
        // this allows to increase the ID by one everytime a new item is added to the array
        task.id = jsonDB[jsonDB.length-1].id +1
    } catch (error) {
        // console.log(error);
    }

    /* CHECKING IF ELEMENT EXISTS */
    let index = jsonDB.findIndex((item) => item.title === title);

    // if item doesn't exist push it into the array
    if(index === -1){
        jsonDB.push(task);
        console.log('Task successfully created');
    } else {
        console.log('This task has aleady been inserted. Please, type "getHelp" to check how to use this app')
    }
    fs.writeFileSync("TODOlist.json", JSON.stringify(jsonDB));
}



module.exports = addToList;