function initialInput() {

  const askToStart = [
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
    }
  ];

  return askToStart;
}

module.exports = initialInput;