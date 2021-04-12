const isDate = require('validate-date');

let startDate = {};
let finishDate = {};

// this function validates the start date and stores it in an object so that you can compare it later
const isValid = (date) =>{
    let valid = isDate(date, responseType="boolean", dateFormat="mm/dd/yyyy");
    if (!valid){
        return 'Please insert a valid date <mm/dd/yyyy>';
    } else{
        startDate = new Date(date);
        return valid;
    }
}

// this function validates the finish date and compares it with the start date to check if user inserted a date before the start date
const isOlder = (date, currentDate) => {
    if (currentDate) {
        startDate = new Date(currentDate);
}
    let valid = isDate(date, responseType="boolean", dateFormat="mm/dd/yyyy");
    if(valid === true){
        finishDate = new Date(date);
    } else {
        return 'Please insert a valid date <mm/dd/yyyy>';
    }
    if(finishDate < startDate){
        return 'Time travel has not been invented yet. Please, insert a date ahead of the start date'
    } else {
        return true;
    }
}

// this function validates the start date and compares it with the finish date to check if user inserted a date before the finish date
const isEarlier = (date, currentDate) => {
    if (currentDate) {
        finishDate = new Date(currentDate);
}
    let valid = isDate(date, responseType="boolean", dateFormat="mm/dd/yyyy");
    if(valid === true){
        startDate = new Date(date);
    } else {
        return 'Please insert a valid date <mm/dd/yyyy>';
    }
    if(finishDate < startDate){
        return 'Time travel has not been invented yet. Please, insert a date before the finish date'
    } else {
        return true;
    }
}

module.exports = { isValid, isOlder, isEarlier };
