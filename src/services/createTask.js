const fs = require('fs');
const taskFactory = require('../models/taskFactory');
let database = require('../config/db');
let jsonDB = database.jsonDB;
const listTask = require('../services/listTask');


function createTask(answer){
    let {title} = answer;
    let {startDate} = answer;
    let {finishDate} = answer;
    let {userName} = answer;
    
    // creating the task object to be pushed into jsonDB array
    let task = taskFactory(title, startDate, finishDate, userName);
   
    // reading to check if file exists. 
    try {
        // this helps to mantain the same copy of the file to keep adding objects to the array
        jsonDB = JSON.parse(fs.readFileSync("TODOlist.json"));
        // this allows to increase the ID by one everytime a new item is added to the array
        let taskId = jsonDB[jsonDB.length - 1].id + 1;
        task.setId(taskId);
    } catch (error) {
        // console.log(error);
    }

    // CHECKING IF ELEMENT EXISTS 
    let index = jsonDB.findIndex((item) => item.title === title);

     if (index === -1) { // if item doesn't exist push it into the array
        jsonDB.push(task);
        console.log('Task successfully created');
    } else {
        console.log('This task has aleady been inserted. Please, type "getHelp" to check how to use this app')
    }
    fs.writeFileSync("TODOlist.json", JSON.stringify(jsonDB));
    readTask(task.id);
}
//Esta función está repetida, se usa también en promptEdit.
function readTask(id){
    let task = listTask.getTareaEspecifica(id)
    listTask.printList(task)
  }
//Repensar cómo exportar los servicios, si como métodos o funciones en archivos distintos.
module.exports = {createTask};