//Factory pattern

class Task {
    constructor(title, startDate, finishDate, userName) {
        this.title = title;
        this.status = 'PENDING';
        this.startDate = startDate;
        this.finishDate = finishDate;
        this.userName = userName;
    }
    setId(newId) {
        this.id = newId;
    }    
}

function taskFactory(title, startDate, finishDate, userName) {
    return new Task(title, startDate, finishDate, userName)
}

//Exporting taskFactory function
module.exports = taskFactory;

