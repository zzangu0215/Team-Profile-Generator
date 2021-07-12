function managerInput() {

  const askForManager = [
    {
      type: 'input',
      message: "\nWELCOME Manager! What's your name?",
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