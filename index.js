const fs = require('fs');
const inquirer = require('inquirer');
const { mainModule } = require('process');

const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const initialInput = require('./prompt/initial_prompt.js')
const managerInput = require('./prompt/manager_prompt.js');
const employeeInput = require('./prompt/employee_prompt.js');

const initialInputArray = initialInput();
const managerInputArray = managerInput();
const employeeInputArray = employeeInput();
const teamMemberArray = [];

function initialPrompt() {
  return inquirer
    .prompt(initialInputArray)
}

function addManager() {
  return inquirer
    .prompt(managerInputArray)
    .then(userInput => {
      const { manager_name, manager_id, manager_email, manager_office } = userInput;
      const manager = new Manager (manager_name, manager_id, manager_email, manager_office);

      teamMemberArray.push(manager);
      console.log('\nManager Added ✔')
    });
}

function addEmployee() {
  console.log(`
  =====================================
            ADD YOUR EMPLOYEE
  =====================================
  `);
  return inquirer
    .prompt(employeeInputArray)
    .then(userInput => {
      let { employee_role, employee_name, employee_id, employee_email, employee_github, employee_school, add_more_employee } = userInput;
      let employee;

      if (employee_role === "Engineer")
        employee = new Engineer (employee_name, employee_id, employee_email, employee_github);
      else if (employee_role === "Intern")
        employee = new Intern (employee_name, employee_id, employee_email, employee_school);

      teamMemberArray.push(employee);

      if (add_more_employee === 'yes') return addEmployee(teamMemberArray);
      else if (add_more_employee === 'no') {
        console.log(teamMemberArray);
        return teamMemberArray;
      }
      
    });
}

function addTeamMembers() {

  console.log(`
  =====================================
    WELCOME TO TEAM PROFILE GENERATOR
  =====================================
  `);
  initialPrompt()
    .then(addManager)
    .then(addEmployee);

}

addTeamMembers();


