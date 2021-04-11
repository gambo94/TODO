//CÓDIGO DUPLICADO EN promptEdit.js VER CÓMO EVITARLO.

const editTask = require('../services/editTask');
const inquirer = require('inquirer');
const listTask = require('../services/listTask');
const dateValidator = require('../helpers/dateValidator');

let idTaskEnter;

let confirmPrompt = [
  {
      type: 'confirm',
      name: 'command',
      message: 'Do you want update a task?',
      default: true,
    }
];

let confirmId = [
  {
      type: 'input',
      name: 'taskById',
      message: 'Enter the id of the task you want to update',
      validate: function (value) {
          var valid = !isNaN(parseFloat(value));
          return valid || 'Please enter a number';
        }
  }
];

let updateChoices = [ {
  type: 'list',
  message: 'Which field do you want to update?',
  name: 'field',
  choices: [
      'Title',
      'Start Date',
      'Finish Date',
      'Status',
      'Username'
  ]
}
];

let statusOptions = [ {
  type: 'list',
  message: 'Choose a new status',
  name: 'status',
  choices: [
      'DONE',
      'PENDING',
      'IN PROCESS'
  ]
}
];

let newValue = [
  {
    type: 'input',
    name: 'newVal',
    message: 'Please enter a new value:',
    validate: function (task) {
      return true;
    }
  }
];

let startDate = [
  {
    type: 'input',
    name: 'startDate',
    message: 'Please enter a new date:',
    validate: function (date) {
      return dateValidator.isValid(date);
    }
  }
]
let finishDate = [
  {
    type: 'input',
    name: 'finishDate',
    message: 'Finish Date?',
    validate: function (date) {
      return dateValidator.isOlder(date)
   }
  }
]

function promptEdit(){
  inquirer.prompt(confirmPrompt).then((answers) => {
    if (answers.command == false) {
      console.log('No tasks have been updated.')
      } else if (answers.command == true) {
        promptConfirmId();
        //removeTask.removeTask(idTaskEnter);
        }
      }).catch((err) => console.log(err));
}

function promptConfirmId() {
  inquirer.prompt(confirmId).then((answers) => {
    idTaskEnter = Number(answers.taskById)
    readTask(idTaskEnter);
    triggerPrompt(updateChoices, promptUpdate);
  }).catch((err) => console.log(err));
}

function readTask(id){
  let task = listTask.getTareaEspecifica(id)
  listTask.printList(task)
}

function promptUpdate(answer) {
  switch(answer.field) {
    case 'Status': 
      triggerPrompt(statusOptions, (answer) => { editTask(idTaskEnter, 'status', answer.status, readTask) })
      break;
    case 'Title':
      triggerPrompt(newValue, (answer) => {editTask(idTaskEnter, 'title', answer.newVal, readTask)} )
      break;
    case 'Username':
      triggerPrompt(newValue, (answer) => {editTask(idTaskEnter, 'userName', answer.newVal, readTask)} ) 
      break;
    case 'Start Date':
      triggerPrompt(startDate, (answer) => {editTask(idTaskEnter, 'startDate', answer.startDate, readTask)} )
      console.log(answer.startDate); 
      break;
    case 'Finish Date':
      triggerPrompt(finishDate, (answer) => {editTask(idTaskEnter, 'finishDate', answer.finishDate, readTask)} )
      console.log(answer.startDate); 
      break;
    default:
      console.log('Something went wrong');       
    }
  }


//Esta es una función que se podría reusar en otros apartados, lanza un inquirer.prompt que acepta como parámetros QUESTIONS definidas arriba y una función callback

function triggerPrompt(question, callback){
  inquirer.prompt(question).then(answer => {
    callback(answer);
  }).catch((err) => console.log(err));
}

module.exports = promptEdit;