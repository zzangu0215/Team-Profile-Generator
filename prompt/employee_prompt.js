function employeeInput() {

  const askForEmployee = [
    {
      type: 'list',
      message: "Please choose your employee's role.",
      name: 'employee_role',
      choices: ['Engineer', 'Intern'],
    },
    {
      type: 'input',
      message: "\nWhat's the name of the employee?",
      name: 'employee_name',
      validate: answer => {
        if (answer) return true;
        else {
          console.log("\nPlease Enter the employee's name!");
          return false;
        }
      }
    },
    {
      type: 'input',
      message: "What's the employee's ID?",
      name: 'employee_id',
      validate: answer => {
        if (answer) return true;
        else {
          console.log("\nPlease Enter the employee's ID!");
          return false;
        }
      }
    },
    {
      type: 'input',
      message: "What's the employee's email?",
      name: 'employee_email',
      validate: answer => {
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answer);
        if (validEmail) return true;
        else {
          console.log("\nPlease Enter the valid email!");
          return false;
        }
      }
    },
    {
      type: 'input',
      message: "What's the employee's GitHub username?",
      name: 'employee_github',
      when: answer => answer.employee_role === "Engineer",
      validate: answer => {
        if (answer) return true;
        else {
          console.log("\nPlease Enter the employee's GitHub username!");
          return false;
        }
      }
    },
    {
      type: 'input',
      message: "What's the employee's school name?",
      name: 'employee_school',
      when: answer => answer.employee_role === "Intern",
      validate: answer => {
        if (answer) return true;
        else {
          console.log("\nPlease Enter the employee's School!");
          return false;
        }
      }
    },
    {
      type: 'input',
      message: 'Would you like to add more employee? (Type "yes" or "no")',
      name: 'add_more_employee',
      validate: answer => {
        if (answer !== 'yes' && answer !== 'no') {
          console.log('\nPlease type "yes" or "no"!!');
          return false;
        }
        else return true;
      }
    }
  ]

  return askForEmployee;
}

module.exports = employeeInput;