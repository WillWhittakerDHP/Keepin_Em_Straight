import inquirer from "inquirer";
import viewSomething from "./viewSomething.js";
// import addSomething from "./addSomething.js";
// import updateSomething from "./updateSomething.js";
// import deleteSomething from "./deleteSomething.js";

let exit = false;

function chooseCensusActions(): void {
  inquirer
  .prompt([
    {
      type: 'list',
      name: 'databaseAction',
      message: 'What do you want to do about the survivors from the 12 Colonies?',
      choices: [`View`, `Add`, `Update`, `Delete`, `Nothing`],
    },
  ])
  .then((answers) => {
    switch (answers.databaseAction) {
      case `View`: {
        viewSomething();
        break;
      }
      case `Add`: {
        console.log(`add`);
        // addSomething();
        break;
      }
      case `Update`: {
        console.log(`update`);
        // updateSomething();
        break;
        }
      case `Delete`: { 
        console.log(`delete`);
        // deleteSomething();
        break;
      }
      case `Nothing`: {
        console.log(`done`);
        exit = true;
      }
      continueCensusActions();
      }
    }
  )
  };

function continueCensusActions(): void {
  if (!exit) {
    // if the user does not want to exit, perform actions on the selected survivor
    chooseCensusActions();
  } else {
  // exit the cli if the user selects exit
    exit = true;
  } 
}

function init() {
  chooseCensusActions();
};

init();