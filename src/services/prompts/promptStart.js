const inquirer = require('inquirer');
const redirect = require('../../controller/controller')

function startApp(){
inquirer.prompt([
    {
        type: 'list',
        message: 'What do you want to do?',
        name: 'command',
        choices: [
            'Add task',
            'Show task(s)',
            'Edit task',
            'Remove task',
            'Exit'
        ]
    }
]).then(answer => {
    redirect(answer);
}).catch((err) => console.log(err));
}

module.exports = startApp;