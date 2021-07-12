function managerInput() {

  const askForManager = [
    {
      type: 'input',
      message: 'Press [ENTER] to get started! (type "exit" to return to main menu)',
      name: 'program_start',
      validate: answer => {
        const ans = answer.toLowerCase();
        if (ans === "exit") return process.exit();
        else return true;
      }
    },
    {
      type: 'input',
      message: 'Are you a manager of your team? (Type "yes" or "no")',
      name: 'ask_manager',
      validate: answer => {
        if (answer === 'yes') return true;
        else if (answer === 'no') {
          console.log("\nONLY manager can access to this program! Good Bye!");
          return process.exit();
        }
        else {
          console.log('\nPlease type "yes" or "no"!!');
          return false;
        }
      }
    },
    {
      type: 'input',
      message: "WELCOME Manager! What's your name?",
      name: 'manager_name',
      validate: answer => {
        if (answer) return true;
        else {
          console.log("\nPlease Enter your name!");
          return false;
        }
      }
    },
    {
      type: 'input',
      message: 'What is your ID?',
      name: 'manager_id',
      validate: answer => {
        if (answer) return true;
        else {
          console.log("\nPlease Enter your ID!");
          return false;
        }
      }
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'manager_email',
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
      message: 'What is your office number?',
      name: 'manager_office',
      validate: answer => {
        if (answer) return true;
        else {
          console.log("\nPlease Enter your Office Number!");
          return false;
        }
      }
    }
  ];

  return askForManager;
}

module.exports = managerInput;