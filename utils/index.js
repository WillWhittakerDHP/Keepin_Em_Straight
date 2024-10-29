import fs from 'fs';
import inquirer from 'inquirer';

async function whatToDoWhatToDo() {
  inquirer
  .prompt([
    {
      type: 'list',
      name: 'databaseAction',
      message: 'What do you want to do about the survivors from the 12 Colonies?',
      choices: ['View', 'Add', 'Update', 'Delete'],
    },
  ])
  .then((answers) => {
    switch (answers.databaseAction) {
      case 'View': {
        inquirer.prompt([
          {
            type: 'list',
            name: 'viewWhat',
            message: 'What do you want to know about the survivors from the 12 Colonies?',
            choices: [    'All humanity',
              'All roles',
              'All divisions',
              'All alignments',
              'Survivors by alignment',
              'Survivors by division',
              'Each division`s total utilized budget'
            ],
          },])
          .then((answers) => {
            switch (answers.viewWhat) {
              case 'All humanity': {
                this.viewHumanity();
                break;
              }
              case 'All roles': {
                this.viewRoles();
                break;
              }
              case 'All divisions': {
                this.viewDivisions();
                break;
              }
              case 'All alignments': {
                this.viewAlignments();
                break;
              }
              case 'Survivors by alignment': {
                this.viewSurvivorsByAlignment();
                break;
              }
              case 'Survivors by division': {
                this.viewSurvivorsByDivision();
                break;
              }
              case 'Each division`s total utilized budget': {
                this.viewDivisionBudgets();
                //  See section 25
              }
            }})};
            break;
      case 'Add': {
        inquirer.prompt([
          {
            type: 'list',
            name: 'addWhat',
            message: 'What do you want to know about the survivors from the 12 Colonies?',
            choices: [    'A survivor',
              'A role',
              'A division',
              'An alignment'],
            },])
            .then((answers) => {
              switch (answers.addWhat) {
                case 'A survivor': {
                  this.addSurvivor();
                  break;
                }
                case 'A role': {
                  this.addRole();
                  break;
                }
                case 'A division': {
                  this.addDivision();
                  break;
                }
                case 'An alignment': {
                  this.addAlignment();
                  break;
                }
              }})};
              break;
      case 'Update': {
        inquirer.prompt([
          {
            type: 'list',
            name: 'updateWhat',
            message: 'What do you want to know about the survivors from the 12 Colonies?',
            choices: ['Survivor`s commander',
              'Survivor`s alignment',
              'Survivor`s role'
            ],
          },])
          .then((answers) => {
            switch (answers.updateWhat) {
              case 'Survivor`s commander': {
                this.updateCommander();
                break;
              },
              case 'Survivor`s alignment': {
                this.updateAlignment();
                break;
              }
              case 'Survivor`s role': {
                this.updateRole();
                break;
              }
            }})};
            break;
            case 'Delete': {
              inquirer.prompt([
                {
                  type: 'list',
                  name: 'deleteWhat',
                  message: 'What do you want to know about the survivors from the 12 Colonies?',
                  choices: [    'Survivors',
                    'Division',
                    'Roles'
                  ],
                },])
                .then((answers) => {
                  switch (answers.deleteWhat) {
              case 'Survivors': {
                this.deleteSurvivor();
                break;
                }
              case 'Division': {
              this.deleteDivision();
              break;
              }
              case 'Roles': {
              this.deleteRoles();
              break;
              }
            }})};
            break;
          }
        });}

function init() {
  whatToDoWhatToDo();
};
                            
init();
/*
viewHumanity();
// THEN I am presented with a formatted table showing survivor data, including survivor ids, first names, last names, roles, divisions, salaries, and commanders that the survivors report to
viewRoles();
// THEN I am presented with the role, role id, the division that role belongs to, and the salary for that role
viewDivisions();
// THEN I am presented with a formatted table showing division names and division ids
viewAlignments();
// THEN I am presented with a formatted table showing alignment names and alignment ids
viewSurvivorsByAlignment();
TODO: THEN I am presented with a formatted table showing alignment names and alignment ids
viewSurvivorsByDivision();
TODO: THEN I am presented with a formatted table showing alignment names and alignment ids
viewDivisionBudgets();
TODO: THEN I am presented with a formatted table showing alignment names and alignment ids
addSurvivor();
// THEN I am prompted to enter the survivor’s first name, last name, humanity, role, and commander, and that survivor is added to the database
addRole();
// THEN I am prompted to enter the name, salary, and division for the role and that role is added to the database
addDivision();
// THEN I am prompted to enter the name of the division and that division is added to the database
addAlignment();
// THEN I am prompted to enter the name of the alignment and that alignment is added to the database
updateCommander();
TODO: THEN I am presented with a formatted table showing alignment names and alignment ids
updateAlignment();
// THEN I am prompted to select a survivor to update and their new humanity and this information is updated in the database 
updateRole();
// THEN I am prompted to select a survivor to update and their new role and this information is updated in the database 
deleteSurvivor();
TODO: THEN I am presented with a formatted table showing alignment names and alignment ids
deleteDivision();
TODO: THEN I am presented with a formatted table showing alignment names and alignment ids
deleteRoles();
TODO: THEN I am presented with a formatted table showing alignment names and alignment ids
*/