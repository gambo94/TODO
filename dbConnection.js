const mysql = require('mysql');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'Sonoetero94',
    database: 'todo'
}

const db = mysql.createConnection(dbConfig);

// use this to connect to the DB from another module
const connect = () =>{
    return db.connect((err) =>{
        if(err) throw err;
        console.log('Connected');
    });
} 

// use this to end connection 
const end = () => {
    return db.end();
}

// used to add a task into the DB
const  add = (task) => {
    let sql = 'INSERT INTO task SET ?';
    return db.query(sql, task, (err, result) => {
            if(err) throw err;
            console.log('Your task has been saved correctly');
            end();
        })
}

module.exports = { connect, end, add }