const db = require('./dbConnection');

const remove = (id) => {
    db.remove(id);
}

module.exports = remove;