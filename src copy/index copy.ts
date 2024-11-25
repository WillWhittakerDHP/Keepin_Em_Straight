import inquirer from "inquirer";
import viewSomething from "./viewSomething.js";
import addSomething from "./addSomething.js";
// import updateSomething from "./updateSomething.js";
// import deleteSomething from "./deleteSomething.js";
import { QueryResult } from 'pg';
import { pool, connectToDb } from './connection.js';

// let exit = false;

const chooseCensusActions = async () => {
  try {
const { action } = await inquirer
    .prompt([
      {
        type: 'list',
        name: 'databaseAction',
        message: 'What do you want to do about the employees?',
        choices: [`View`, `Add`, `Update`, `Delete`, `Exit`],
      },
    ])
    .then((answers) => {
      switch (answers.databaseAction) {
        case `View`: {
          viewSomething();
          return;
        }
        case `Add`: {
          console.log(`add`);
          addSomething();
          break;
        }
        // case `Update`: {
          //   console.log(`update`);
          //   updateSomething();
          //   break;
          //   }
          // case `Delete`: { 
            //   console.log(`delete`);
            //   deleteSomething();
            //   break;
      // }
      // case `Nothing`: {
      //   console.log(`done`);
      //   exit = true;
      // }
      // continueCensusActions;
      }
    }
  )
  };

// function continueCensusActions(): void {
//   if (!exit) {
//     // if the user does not want to exit, perform actions on the selected employee
//     chooseCensusActions;
//   } else {
//   // exit the cli if the user selects exit
//     exit = true;
//   } 
// }

function init() {
  chooseCensusActions();
};

init();