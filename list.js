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
    return tareas;
}

const getTareaEspecifica = (idTarea) => {
    loadDB();
    tareaEspecifica = tareas.find(tarea => tarea.id === idTarea);
    return tareaEspecifica;
}

module.exports = {
    getTareas, getTareaEspecifica
}