const createTask = require('../services/createTask');
const inquirer = require('inquirer');


function promptAdd() {
    var questions = [
      {
        type: 'confirm',
        name: 'toBeDelivered',
        message: 'Do you want to add a task?',
        default: true,
      },
      {
        type: 'input',
        name: 'title',
        message: 'Task title?',
        validate: function (value) {
          return true 
        }
      },
      {
        type: 'input',
        name: 'startDate',
        message: 'Start Date?',
        validate: function (value) {
          return true 
        }
      },
      {
        type: 'input',
        name: 'finishDate',
        message: 'Finish Date?',
        validate: function (value) {
          return true 
        }
      },
      {
        type: 'input',
        name: 'userName',
        message: 'Username?',
        validate: function (value) {
          return true 
        }
      },
    ];
    
    inquirer.prompt(questions).then((answers) => {
      //console.log('\nTarea crada:');
      //console.log(JSON.stringify(answers, null, '  '));
      createTask.createTask(answers);
  
    });
  }

module.exports = promptAdd;