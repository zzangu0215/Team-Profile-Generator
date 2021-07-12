const fs = require('fs');
const inquirer = require('inquirer');
const { mainModule } = require('process');

const managerInput = require('./prompt/manager_prompt.js');
const employeeInput = require('./prompt/employee_prompt.js');

const managerInputArray = managerInput();
const employeeInputArray = employeeInput();


function addTeamMembers() {

  inquirer
  .prompt(managerInputArray);

}

addTeamMembers();


