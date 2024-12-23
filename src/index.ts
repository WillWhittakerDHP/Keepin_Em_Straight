import express from 'express';
import inquirer from "inquirer";
import { pool, connectToDb } from './connection.js';
import viewAllDepartments from './viewAllDepartments.js';
import viewAllRoles from './viewAllRoles.js';
import viewAllEmployees from './viewAllEmployees.js';
import addDepartment from './addDepartment.js';
import addRole from './addRole.js';
import addEmployee from './addEmployee.js';
import updateEmployeeRole from './updateEmployeeRole.js';

await connectToDb();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const chooseCensusActions = async () => {
  try {
const { databaseAction } = await inquirer
    .prompt([
      {
        type: 'list',
        name: 'databaseAction',
        message: 'What do you want to do about the employees?',
        choices: [ 'View All Departments', 'View All Roles', 'View All Employees', 'Add Department', 
          'Add Role', 
          'Add Employee', 
          'Update Employee Role', 
          'Exit', ],
      },
    ])
    switch (databaseAction) {
      case `View All Departments`: {
        await viewAllDepartments();
        break;
      }
      case `View All Roles`: {
        await viewAllRoles();
        break;
      }
      case `View All Employees`: {
        await viewAllEmployees();
        break;
      }
      case `Add Department`: { 
        await addDepartment();
        break;
      }
      case `Add Role`: {
        await addRole();
        break;
      }
      case `Add Employee`: { 
        await addEmployee();
        break;
      }
      case `Update Employee Role`: { 
        await updateEmployeeRole();
        break;
      } 
      case `Exit`: { 
      console.log(`goodbye`)
        pool.end();
        return;
      }
      default: console.log(`invalid option`)
    }
    await chooseCensusActions();
      } catch (err) { 
        console.error ('Error:', err)}
    };

  chooseCensusActions();


app.use((_req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
