const yargs = require('yargs');
//const commands = require('./commands');


// importing filesystem module to retrieve user dynamically
const fs = require('fs');
const os = require('os');

const list = require('./list');
const add = require('./add');
// const update = require('./update');
const remove = require('./remove');



// declaring variables that contains user's input from CLI
let command = yargs.argv._[0]
let title = yargs.argv.title;
let id = yargs.argv.id;
let startDate = yargs.argv.startDate;
let finishDate = yargs.argv.finishDate;
let userName = os.userInfo().username;

if (command == 'add') {
    if (title && startDate && finishDate && userName) {
        return add(title, startDate, finishDate, userName);
    } else {
        console.log('Please, make sure to fill in all the fields required. Type "help" to find them out');
    }
} else if (command == 'update') {
    if (id && status) {
        return update(id, status);
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

} else {
    console.log("this command doesn't exist")
}