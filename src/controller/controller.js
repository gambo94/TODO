const service = require('../services/service');

const redirect = (answers) => {
    if(answers.command === 'Add task'){
        service.addTask
    }
    if(answers.coomand === 'Show task(s)'){
        
    }
    if(answers.coomand === 'Edit task'){
        
    }
    if(answers.coomand === 'Remove task'){
        
    }
}

module.exports = redirect;