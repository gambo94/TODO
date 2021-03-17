const yargs = require('yargs');
//const commands = require('./commands');

const add = require('./add');
const update = require('./update');
const remove = require('./remove');
const list = require('./list');


let command = yargs.argv._[0]
let title = yargs.argv.title;
let id = yargs.argv.id;
let status = yargs.argv.status;

if (command == 'add') {
    if (title) {
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
    return list();

} else {
    console.log("this command doesn't exist")
}





