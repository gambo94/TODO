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
    }    //VALORAR SI PODEMOS APLICAR PROGRAMACIÓN ORIENTADA A OBJETOS (YA QUE LO PIDE JONATAN) ES DECIR, REFACTORIZAR LOS SERVICIOS COMO SI FUERAN MÉTODOS
    update(){
        console.log(`Updating task.`)
    }
    remove(){
        console.log(`Removing task.`)
    }
    read() {
        console.log(`Reading task.`)
    }
}

function taskFactory(title, startDate, finishDate, userName) {
    return new Task(title, startDate, finishDate, userName)
}

//Exporting taskFactory function
module.exports = taskFactory;

