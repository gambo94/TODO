const inquirer = require('inquirer');

function promptExit() {
    var questions = [ ];
    
    inquirer.prompt(questions).then(() => {
      console.log('bye');
    });
  }

  module.exports = promptExit;