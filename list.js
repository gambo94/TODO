let tareas = [];

const loadDB = () => {
    try {
        tareas = require('./db/data.json');
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