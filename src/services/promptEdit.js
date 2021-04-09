function promptEdit(){
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
  module.exports = promptEdit;