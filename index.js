const fs = require('fs');
const inquirer = require('inquirer');
const { mainModule } = require('process');

const managerInput = require('./prompt/manager_prompt.js');
const employeeInput = require('./prompt/employee_prompt.js');

const managerInputArray = managerInput();
const employeeInputArray = employeeInput();


function addManager() {
  return inquirer
    .prompt(managerInputArray)
    .then(userInput => {
      const { manager_name, manager_id, manager_email, manager_officeNum } = userInput;
    });
}

function addEmployee() {
  return inquirer.prompt(employeeInputArray);
}

function addTeamMembers() {

  addManager()
    .then(addEmployee);

}

addTeamMembers();


