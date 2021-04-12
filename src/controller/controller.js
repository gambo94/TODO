const promptAdd = require('../services/prompts/promptAdd');
const promptList = require('../services/prompts/promptList');
const promptEdit = require('../services/prompts/promptEdit');
const promptDelete = require('../services/prompts/promptDelete');
const promptExit = require('../services/prompts/promptExit');

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
    if(answers.command === 'Exit'){
        promptExit();
    }
}


module.exports = redirect;