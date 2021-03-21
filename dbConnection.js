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
    // defying the query and execute it
    let sql = 'INSERT INTO task SET ?';
    return db.query(sql, task, (err, result) => {
            if(err) throw err;
            console.log('Your task has been saved correctly');
            end();
        })
}

const list = () => {
    // defying the query and execute it
    let sql = 'SELECT id_task, title, startDate, finishDate, task_status, username FROM task';
    return db.query(sql, (err, result) => {
        if(err) throw err;
        // if there are no results, log a message and end connection
        if(result.length <= 0){
            console.log('Your task doesnt exist');
            end();
            return;
        }
        console.log('Your tasks:');
        let usersRows = JSON.parse(JSON.stringify(result));
        console.log(usersRows);
        end();
    })
}

const listSpecific = (id) => {
    // defying the query and execute it
    let sql = `SELECT id_task, title, startDate, finishDate, task_status, username FROM task WHERE id_task=${id}`;
    return db.query(sql, (err, result) => {
        if(err) throw err;

        // if there are no results, log a message and end connection
        if(result.length <= 0){
            console.log('Your task doesnt exist');
            end();
            return;
        }
        // if there are results, display them and end connection
        console.log('Your selected task:');
        let usersRows = JSON.parse(JSON.stringify(result));
        console.log(usersRows);
        end();
    })
}

const remove = (id) => {
    let sql = `DELETE FROM task WHERE id_task=${id}`;
    return db.query(sql, (err, result) => {
        if(err) throw err;
        console.log('Task deleted successfully');
        end();
    })
}

module.exports = { connect, end, add, list, listSpecific, remove }