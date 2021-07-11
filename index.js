const fs = require('fs');
const inquirer = require('inquirer');
const { mainModule } = require('process');

const askForManager = [
  {
    type: 'input',
    message: 'TEAM PROFILE GENERATOR! Press [ENTER] to get started! (type "exit" to return to main menu)',
    name: 'program_start',
    validate: answer => {
      const ans = answer.toLowerCase();
      if (ans === "exit") return process.exit();
      else return true;
    }
  },
  {
    type: 'input',
    message: 'Are you a manager of your team? (Type "Yes" or "No")',
    name: 'ask_manager',
    validate: answer => {
      if (answer === 'Yes') return true;
      else {
        console.log("\nONLY manager can access to this program! Good Bye!");
        return process.exit();
      }
    }
  }
]

inquirer
  .prompt(askForManager);

