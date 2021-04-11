//CÓDIGO DUPLICADO EN promptEdit.js VER CÓMO EVITARLO.

const removeTask = require('../services/removeTask');
const inquirer = require('inquirer');

let message1 = 'Do you want delete a task?'
let answerToMessage1 = 'No tasks have been deleted.'
let message2 ='Enter the id of the task you want to delete';
let answerToMessage2 = 'Please enter a number';

function  promptDelete() {
var questions = [
    {
        type: 'confirm',
        name: 'command',
        message: message1,
        default: true,
      }
];

inquirer.prompt(questions).then((answers) => {
    //ver el contenido del objeto
    //console.log(JSON.stringify(answers, null, '  '));

    if (answers.command == false) {

       console.log(answerToMessage1)

    } else if (answers.command == true) {

        var questions = [
            {
                type: 'input',
                name: 'taskById',
                message: message2,
                validate: function (value) {
                    var valid = !isNaN(parseFloat(value));
                    return valid || answerToMessage2;
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