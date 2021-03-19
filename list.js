let tareas = require('./db');

const loadDB = () => {
    try {
        tareas = require('./TODOlist.json');
    } catch (error) {
        tareas = [];
        console.log("ERROR JSON DB")
    }
}

const getTareas = () => {

    loadDB();
    if (tareas == null || tareas == ""){
        console.log(`The task you were looking was not found. Type 'help' to find out how to list the items.`);
    }
    return tareas;
}

const getTareaEspecifica = (id) => {
    loadDB();
    tareaEspecifica = tareas.find(tarea => tarea.id === id);
    if (!tareaEspecifica) {
        console.log(`The task you were looking was not found. Type 'help' to find out how to list the items.`);
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
UserName: ${tarea.user}
${colorStatusTarea = "\x1b[0m"}`);
    }
}

module.exports = {
    getTareas, getTareaEspecifica, printList
}