const yargs = require('yargs');


// importing filesystem module to retrieve user dynamically
const fs = require('fs');
const os = require('os');

const list = require('./list');
const addDB = require('./addDB');
const update = require('./update');
const remove = require('./remove');
const callHelp = require('./help');


// declaring variables that contains user's input from CLI
let command = yargs.argv._[0]
let title = yargs.argv.title;
let id = yargs.argv.id;
let startDate = yargs.argv.startDate;
let finishDate = yargs.argv.finishDate;
let userName = os.userInfo().username;
let status = yargs.argv.status;


if (command == 'add') {
    if (title && startDate && finishDate && userName) {
        return addDB(title, startDate, finishDate, userName);
    } else {
        console.log('Please, make sure to fill in all the fields required. Type "getHelp" to find them out');
    }
} else if (command == 'update') {
    if (id && status || id && title || id && startDate || id && finishDate || id && userName) {
        update(id);
    } else {
         console.log('Please enter ID and fields of the task you want to modify. Type "getHelp" to find out more.');
    }  
  }

else if (command == 'delete') {
    return remove(id);

} else if (command == 'list') {

    if (id) {
        let tareaEspecifica = list.getTareaEspecifica(id);
        list.printList(tareaEspecifica)

    } else {
        let tareas = list.getTareas();
        for (let tarea of tareas) {
            list.printList(tarea)
        }
    }

} else if (command == 'getHelp') {
   return callHelp();

} else
{
    console.log("this command doesn't exist")
    return callHelp();
}