const fs = require('fs');
const inquirer = require('inquirer');
const { mainModule } = require('process');

const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const managerInput = require('./prompt/manager_prompt.js');
const employeeInput = require('./prompt/employee_prompt.js');

const managerInputArray = managerInput();
const employeeInputArray = employeeInput();
const teamMemberArray = [];

function addManager() {
  return inquirer
    .prompt(managerInputArray)
    .then(userInput => {
      const { manager_name, manager_id, manager_email, manager_officeNum } = userInput;
      const manager = new Manager (manager_name, manager_id, manager_email, manager_officeNum);

      teamMemberArray.push(manager);
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


