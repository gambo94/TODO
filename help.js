const callHelp = () => {

    const usageText = `
    ============ HELP ============

    todo helps you manage you todo tasks.

    usage:
      node app.js <command>
  
      commands can be:

      add --title=<'your task'> --startDate=<DD/MM/YYYY> --finishDate=<DD/MM/YYYY>
      
      update --id=<id of your task> --title=<'new title'> AND/OR --status=<'new status'> 
      AND/OR --startDate=<DD/MM/YYYY> AND/OR --finishDate=<DD/MM/YYYY> AND/OR --user=<'new user'>
      
      delete --id=<id of your task>

      list OR list --id=<id of your task>
      
      getHelp     
      `
      console.log(usageText);
}

module.exports = callHelp;
