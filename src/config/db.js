class Database {
    constructor() {
        //If there is no instance of this class, set the instance to the result of this call
        if (Database.instance == null) {
            this.jsonDB = []; // array to be written into a json file
            Database.instance = this
        } else { // ELse return the instance already created
        return Database.instance
        }
    }
    // FALTARÍA AÑADIR LOS MÉTODOS QUE MODIFICAN LA BASE DE DATOS.
}

const database = new Database();
// To prevent this object frm being changed after being initiallized: 
Object.freeze(database);
module.exports = database;


//Underhood: Calling this class will create: "Database { jsonDB: [] }"