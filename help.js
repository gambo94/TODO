const callHelp = () => {
    var colorHelp1 = "\x1b[32m";
    var colorHelp2 = "\x1b[0m";
    const usageText = `
    ============ HELP ============

    Todo helps you manage you todo tasks.

    usage:

      node app.js ${colorHelp1}command${colorHelp2}
  
    commands can be:

      ADD : The following fields required
      ------------------------------------
      add --title=${colorHelp1}'your task'${colorHelp2} --startDate=${colorHelp1}DD/MM/YYYY${colorHelp2} --finishDate=${colorHelp1}DD/MM/YYYY${colorHelp2}  
    
      UPDATE: Id is required. Status can be PENDING, 'IN PROCESS' or DONE
      ------------------------------------------------------------------------
      update --id=${colorHelp1}id of your task${colorHelp2} --title=${colorHelp1}'new title'${colorHelp2}  --status=${colorHelp1}NEWSTATUS${colorHelp2}  
      --startDate=${colorHelp1}DD/MM/YYYY${colorHelp2} --finishDate=${colorHelp1}DD/MM/YYYY${colorHelp2} --user=${colorHelp1}'new user'${colorHelp2}   
      
      DELETE: Id is required
      -----------------------
      delete --id=${colorHelp1}id of your task${colorHelp2}  

      LIST: To list all tasks
      -----------------------
      list   

      LIST TASK: Id required
      -----------------------
      list --id=${colorHelp1}id of your task${colorHelp2}    
      
      GET HELP
      ---------      
      getHelp     
      `
      console.log(usageText);
}

module.exports = callHelp;
