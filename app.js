const yargs = require('yargs');
//const commands = require('./commands');


// importing filesystem module to retrieve user dynamically
const fs = require('fs');
const os = require('os');

const list = require('./list');
//const add = require('./add');
// const update = require('./update');
// const remove = require('./remove');



// declaring variables that contains user's input from CLI
let command = yargs.argv._[0]
let title = yargs.argv.title;
let id = yargs.argv.id;
let status = yargs.argv.status;
let startDate = yargs.argv.startDate;
let finishDate = yargs.argv.finishDate;
let userName = os.userInfo().username;


if (command == 'add') {
    if (title && id && status && startDate && finishDate && userName) {
        return add(title);
 }
} else if (command == 'update') {
    if (id && status) {
        return update(id, status);
    }
  }
  else if (command == 'delete') {
return remove();

} else if (command == 'list') {
    let tareas = list.getTareas();
    for (let tarea of tareas) {
        console.log('============ TODO LIST ============');
        console.log("title: " + tarea.title);
        console.log("id: " + tarea.id);
        console.log("status: " + tarea.status);
        console.log("startDate: " + tarea.startDate);
        console.log("finishDate: " + tarea.finishDate);
        console.log("userName: " + tarea.userName);
    }
    
    

} else {
    console.log("this command doesn't exist")
}





