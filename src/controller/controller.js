const addTask = require('../services/addTask');
const listTask = require('../services/listTask');

const inquirer = require('inquirer');

const redirect = (answers) => {
    if (answers.command === 'Add task') {
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
    if (answers.command === 'Show task(s)') {

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
            console.log('\nMostrando tarea:');
            console.log(JSON.stringify(answers, null, '  '));

            if (answers.command == "List all task") {

                let tareas = listTask.getTareas();
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
                    let idTaskEnter = Number(answers.taskById)

                    let tareas = listTask.getTareaEspecifica(idTaskEnter)
                    listTask.printList(tareas)
                });


            }


        });

    }
    if (answers.command === 'Edit task') {
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
    if (answers.command === 'Remove task') {

    }
}

module.exports = redirect;