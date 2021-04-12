const listTask = require('../listTask');
const inquirer = require('inquirer');

function  promptList() {
var questions = [
    {
        type: 'list',
        message: 'What do you want to do?',
        name: 'command',
        choices: [
            'List all task',
            'List task by id',
        ]
    }
];

inquirer.prompt(questions).then((answers) => {
    //ver el contenido del objeto
    //console.log(JSON.stringify(answers, null, '  '));

    if (answers.command == "List all task") {

        //Call function getTareas and show task with printList function
        let tareas = listTask.getTareas();
        //For loop to show all tasks
        for (let tarea of tareas) {
            listTask.printList(tarea)
        }

    } else if (answers.command == "List task by id") {

        var questions = [
            {
                type: 'input',
                name: 'taskById',
                message: 'Enter the id of the task you want to see',
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
            //Call function getTareaEspecifica and show task with printList function
            let tareas = listTask.getTareaEspecifica(idTaskEnter)
            listTask.printList(tareas)
        });


    }


});
}

module.exports = promptList;