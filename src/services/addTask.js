const fs = require('fs');

// importing db module in which there's the array that represents JSON file
let jsonDB = require('../config/db');

function receriveAnswer(answer){
    console.log("respuestaaaa" + answer);
    console.log(answer);
}
// count in order to keep track of IDs
let idCount = 1;
console.log("hola")
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
        task.id = jsonDB[jsonDB.length - 1].id + 1
    } catch (error) {
        // console.log(error);
    }

    /* CHECKING IF FINISHDATE < STARTDATE = ERROR */
    let indexDate = jsonDB.findIndex((item) => item.finishDate < item.startDate);
    console.log(indexDate);

    /* CHECKING IF ELEMENT EXISTS */
    let index = jsonDB.findIndex((item) => item.title === title);
    console.log(index);

    if (indexDate != -1) { // if finishDate doesn't is < than startDate push it into the array
        console.log("Error: finishDate is < than startDate");
        
    } else if (index === -1) { // if item doesn't exist push it into the array
        jsonDB.push(task);
        console.log('Task successfully created');
    } else {
        console.log('This task has aleady been inserted. Please, type "getHelp" to check how to use this app')
    }
    fs.writeFileSync("TODOlist.json", JSON.stringify(jsonDB));
}



module.exports = {addToList, receriveAnswer};