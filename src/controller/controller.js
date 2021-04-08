const addTask = require('../services/addTask');
const inquirer = require('inquirer');

const redirect = (answers) => {
    if(answers.command === 'Add task'){
        console.log("¿Qué tarea quieres crear?");
        var questions = [
            {
              type: 'confirm',
              name: 'toBeDelivered',
              message: 'Do you want add task?',
              default: false,
            },
            {
              type: 'input',
              name: 'title',
              message: 'Task title?',
              validate: function (value) {
              
                return true 
              }
             
            },
          ];
          
          inquirer.prompt(questions).then((answers) => {
            console.log('\nTarea crada:');
            console.log(JSON.stringify(answers, null, '  '));
            addTask.receriveAnswer(answers);
          });
          
    }
    if(answers.command === 'Show task(s)'){

    }
    if(answers.command === 'Edit task'){
        console.log("¿Qué tarea quieres editar?");
        var questions = [
            {
              type: 'confirm',
              name: 'toBeDelivered',
              message: 'Do you want edit task?',
              default: false,
            },
            {
              type: 'input',
              name: 'title',
              message: 'Task id?',
              validate: function (value) {
              
                return true 
              }
             
            },
          ];
          
          inquirer.prompt(questions).then((answers) => {
            console.log('\nTarea crada:');
            console.log(JSON.stringify(answers, null, '  '));
          });
    }
    if(answers.command === 'Remove task'){
        
    }
}

module.exports = redirect;