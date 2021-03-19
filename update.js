const fs = require('fs');

const update = (id, value, key) => {
    
    let jsonDB = [];

    try {
        jsonDB = JSON.parse(fs.readFileSync("TODOlist.json"));
        
    } catch (error) {
        // console.log(error);
    }

    /* CHECKING IF ELEMENT EXISTS */
    let index = jsonDB.findIndex((item) => item.id === id);

    // if item exists, update key value for the property provided.
    if(index === -1){
        console.log("This task doesn't exist");
    } else if (key == 'status') {
        jsonDB[index].status = value;
    } else if (key == 'title') {
        jsonDB[index].title = value;
    } else if (key == 'finishDate') {
        jsonDB[index].finishDate = value;
    } else if (key == 'startDate') {
        jsonDB[index].startDate = value;
    } else if (key == 'user') {
        jsonDB[index].user = value;
    }
    console.log(`Task with index ${index+1} has been modified`)

    fs.writeFileSync("TODOlist.json", JSON.stringify(jsonDB));
    
}



module.exports = update;