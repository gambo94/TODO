const createTask = require('../services/createTask');
const inquirer = require('inquirer');

const redirect = (answers) => {
    if(answers.command === 'Add task'){
      promptAddTask();      
    if(answers.command === 'Show task(s)'){
      promptReadTask();
    }
    if(answers.command === 'Edit task'){
      promptEditTask();
    }
    if(answers.command === 'Remove task'){
      promptRmoveTask();
    }
}
}

//Repensar dónde ponemos estas funciones. En servicios? En una carpeta intermedia como Repository?
function promptAddTask() {
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
    console.log('\nTarea crada:');
    console.log(JSON.stringify(answers, null, '  '));
    createTask.createTask(answers);

  });
}

function promptEditTask(){
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

  });

}

module.exports = redirect;