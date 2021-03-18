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

module.exports = {
    getTareas
}