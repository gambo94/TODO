const promptAdd = require('../services/promptAdd');
const promptList = require('../services/promptList');
const promptEdit = require('../services/promptEdit');
const promptDelete = require('../services/promptDelete');

const redirect = (answers) => {
    if(answers.command === 'Add task'){
      promptAdd();      
    }
    if(answers.command === 'Show task(s)'){
      promptList();
    }
    if(answers.command === 'Edit task'){
      promptEdit();
    }
    if(answers.command === 'Remove task'){
      promptDelete();
    }
}


module.exports = redirect;