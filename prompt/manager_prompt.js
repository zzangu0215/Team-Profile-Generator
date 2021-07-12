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
      message: 'What is your email? (e.g. person@email.com)',
      name: 'manager_email',
      validate: answer => {
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answer);
        if (validEmail) return true;
        else {
          console.log("\nPlease Enter the valid email! Valid format is (e.g. person@email.com)");
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