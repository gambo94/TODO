const createTask = require('./createTask');
const inquirer = require('inquirer');
const dateValidator = require('../helpers/dateValidator');

function promptAdd() {
    var questions = [
      {
        type: 'input',
        name: 'title',
        message: 'Please insert the title of the task:',
        validate: function (task) {
          return true;
        }
      },
      {
        type: 'input',
        name: 'startDate',
        message: 'Start Date?',
        validate: function (date) {
          return dateValidator.isValid(date);
        }
      },
      {
        type: 'input',
        name: 'finishDate',
        message: 'Finish Date?',
        validate: function (date) {
          return dateValidator.isOlder(date)
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
      createTask(answers);
    });
  }


module.exports = promptAdd;