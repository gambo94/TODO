# TODO 

## todo helps you manage you todo tasks

### installation:
    npm install


### usage:
    node app.js <command>


### commands
------------- 
#### add:

    add --title=<'your task'> --startDate=<DD/MM/YYYY> --finishDate=<DD/MM/YYYY>

#### update:

    update --id=<id of your task> --title=<'new title'> --status=<NEWSTATUS> 
    --startDate=<DD/MM/YYYY> --finishDate=<DD/MM/YYYY> --user=<'new user'>

#### delete:

    delete --id=<id of your task>

#### list:

    list OR list --id=<id of your task>

#### help:

    getHelp    



### examples
------------- 

    node app add --title="sacar al perro" --startDate=01/02/2021 --finishDate=07/02/2021

    node app update --id=1 --title="sacar al perro y comprar comida de perro"  --status="IN PROCESS" 

    node app update --id=1 --status=DONE --finishDate=05/02/2021 --user=Eric 
    
    node app list
    
    node app list --id=1
    
    node app delete --id=1
    
    node app getHelp



### happy path
-----------------------
<img src="./todo.jpg">