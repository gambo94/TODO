const db = require('./dbConnection');



const addToList = (title, startDate, finishDate, userName) => {
    // creating the task object to be pushed into jsonDB array
    let task = {
        title: title,
        startDate: startDate,
        finishDate: finishDate,
        username: userName
    }
    db.add(task);
    
}



module.exports = addToList;