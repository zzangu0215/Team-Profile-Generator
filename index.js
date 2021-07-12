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
  console.log('\nManager Added ✔\nTime to add your employees\n');
  return inquirer
    .prompt(employeeInputArray)
    .then(userInput => {
      let { employee_role, employee_name, employee_id, employee_email, employee_github, employee_school, add_more } = userInput;
      let employee;

      if (employee_role === "Engineer")
        employee = new Engineer (employee_name, employee_id, employee_email, employee_github);
      else if (employee_role === "Intern")
        employee = new Intern (employee_name, employee_id, employee_email, employee_school);

      teamMemberArray.push(employee);

      if (add_more === 'yes') return addEmployee();
      else if (add_more === 'no') return teamMemberArray;
      console.log(teamMemberArray);
    });
}

function addTeamMembers() {

  console.log(`
  =====================================
    WELCOME TO TEAM PROFILE GENERATOR
  =====================================
  `)
  addManager()
    .then(addEmployee);

}

addTeamMembers();


