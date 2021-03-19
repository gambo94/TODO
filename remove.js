const fs = require('fs');

const remove = (id) => {

    // reading the file and storing its data into a variable 
    const taskObjs = JSON.parse(fs.readFileSync("TODOlist.json"));
    let index = taskObjs.findIndex((item) => item.id === id);
    // if it exists
    if(index > -1){
        // remove 1 item at position 'index'
        taskObjs.splice(index,1);
        fs.writeFileSync("TODOlist.json", JSON.stringify(taskObjs));
        console.log(`Task removed successfully!`);
    } else {
        console.log(`The task you were looking was not found. Type 'help' to find out how to list the items.`);
    }
}

module.exports = remove;

