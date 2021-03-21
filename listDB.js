const db = require('./dbConnection');

const getTareas = () => {
    db.list();
}

const getTareaEspecifica = (id) => {
    db.listSpecific(id);
}

module.exports = { getTareas, getTareaEspecifica };