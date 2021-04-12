const fs = require('fs');
let database = require('../config/db');
let jsonDB = database.jsonDB;


const getTareas = () => {
    // Leemos el JsonDB
    jsonDB = JSON.parse(fs.readFileSync("TODOlist.json"));

    if (jsonDB == null || jsonDB == "") {
        console.log(`The task you were looking was not found.`);
    }
    return jsonDB;
}

const getTareaEspecifica = (id) => {
    // Leemos el JsonDB
    jsonDB = JSON.parse(fs.readFileSync("TODOlist.json"));
    
    tareaEspecifica = jsonDB.find(tarea => tarea.id === id);
    if (!tareaEspecifica) {
        console.log(`The task you were looking was not found.`);
        return false;
    } else {
        return tareaEspecifica;
    }
}

function printList(tarea) {

    if (tarea == null || tarea == "") {
        return;

    } else {
        if (tarea.status == "PENDING") {
            var colorStatusTarea = "\x1b[31m";

        } else if (tarea.status == "IN PROCESS") {
            var colorStatusTarea = "\x1b[33m";

        } else if (tarea.status == "DONE") {
            var colorStatusTarea = "\x1b[32m";

        }
        console.log(`${colorStatusTarea}
============ TODO LIST ============
Title: ${tarea.title} 
Id: ${tarea.id}
Status: ${tarea.status}
StartDate: ${tarea.startDate}
FinishDate: ${tarea.finishDate}
UserName: ${tarea.userName}
${colorStatusTarea = "\x1b[0m"}`);
    }
}

module.exports = {
    getTareas, getTareaEspecifica, printList
}