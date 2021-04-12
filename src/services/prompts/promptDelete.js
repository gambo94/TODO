const removeTask = require('../removeTask');
const inquirer = require('inquirer');


function  promptDelete() {
var questions = [
    {
        type: 'confirm',
        name: 'command',
        message: 'Do you want delete a task?',
        default: true,
      }
];

inquirer.prompt(questions).then((answers) => {
    //ver el contenido del objeto
    //console.log(JSON.stringify(answers, null, '  '));

    if (answers.command == false) {

       console.log("No tasks have been deleted.")

    } else if (answers.command == true) {

        var questions = [
            {
                type: 'input',
                name: 'taskById',
                message: 'Enter the id of the task you want to delete',
                validate: function (value) {
                    var valid = !isNaN(parseFloat(value));
                    return valid || 'Please enter a number';
                  }
            }
        ];

        inquirer.prompt(questions).then((answers) => {
            //ver el contenido del objeto
            //console.log(JSON.stringify(answers, null, '  '));
            //Convert number inserted to a Number
            let idTaskEnter = Number(answers.taskById)
            //Call function removeTask to remove task with id
            removeTask.removeTask(idTaskEnter);
        });


    }


});
}

module.exports = promptDelete;