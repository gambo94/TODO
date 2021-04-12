const editTask = require('../services/editTask');
const inquirer = require('inquirer');
const listTask = require('../services/listTask');
const dateValidator = require('../helpers/dateValidator');

let currentStartDate;
let currentFinishDate;
let idTask;

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
      return dateValidator.isEarlier(date, currentFinishDate);
    }
  }
]

let finishDate = [
  {
    type: 'input',
    name: 'finishDate',
    message: 'Finish Date?',
    validate: function (date) {
      return dateValidator.isOlder(date, currentStartDate)
   }
  }
]

// Initial prompt for confirming is the user wants to update an already existing task
function promptEdit(){
  inquirer.prompt(confirmPrompt).then((answers) => {
    if (answers.command == false) {
      console.log('No tasks have been updated.')
      } else if (answers.command == true) {
        promptConfirmId();
        }
      }).catch((err) => console.log(err));
}

// Asking the user for the ID of the task to be updated.
function promptConfirmId() {
  inquirer.prompt(confirmId).then((answers) => {
    idTask = Number(answers.taskById)
    readTask(idTask);
    //Asking the user for the field to be updated, and then, updating the JSON with the given answer.
    triggerPrompt(updateChoices, triggerUpdate);
  }).catch((err) => console.log(err));
}

// Reading task to be updated and grabbing the task' current Start Date and Finish Date to check that both are valid dates.
function readTask(id){
  let task = listTask.getTareaEspecifica(id)
  listTask.printList(task)
  currentStartDate = task.startDate;
  currentFinishDate = task.finishDate;
}

// Updating corresponding field task in the JSON with the provided new values.
function triggerUpdate(answer) {
  switch(answer.field) {
    case 'Status': 
      triggerPrompt(statusOptions, (answer) => { editTask(idTask, 'status', answer.status, readTask) })
      break;
    case 'Title':
      triggerPrompt(newValue, (answer) => {editTask(idTask, 'title', answer.newVal, readTask)} )
      break;
    case 'Username':
      triggerPrompt(newValue, (answer) => {editTask(idTask, 'userName', answer.newVal, readTask)} ) 
      break;
    case 'Start Date':
      triggerPrompt(startDate, (answer) => {editTask(idTask, 'startDate', answer.startDate, readTask)} )
      break;
    case 'Finish Date':
      triggerPrompt(finishDate, (answer) => {editTask(idTask, 'finishDate', answer.finishDate, readTask)} )
      break;
    default:
      console.log('Something went wrong');       
    }
  }


function triggerPrompt(question, callback){
  inquirer.prompt(question).then(answer => {
    callback(answer);
  }).catch((err) => console.log(err));
}

module.exports = promptEdit;