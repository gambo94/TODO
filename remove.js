const fs = require('fs');
const db = require('./db');

const remove = (title) => {

    // reading the file and storing its data into a variable 
    const taskObjs = JSON.parse(fs.readFileSync("TODOlist.json"));
    let index = taskObj.findIndex((item) => item.title === title);
    console.log(index);
    // if it exists
    if(index > -1){
        // remove 1 item at position 'index'
        taskObjs.splice(index,1);
    } else {
        console.log('no estaaaaaaaaaaaaa joder');
    }
}

module.exports = remove;

