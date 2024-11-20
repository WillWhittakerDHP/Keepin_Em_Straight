import inquirer from 'inquirer';
import express from 'express';
// import { QueryResult } from 'pg';
import { 
  // pool, 
  connectToDb } from './connection.js';
import Employee from './employeeClass.js'

await connectToDb();

// const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let employees: Employee[] = [];

// async function employeeArrayGetter(array_to_json:string[]) {
// let employeesArray: string[] = [pool.query(`SELECT array_to_json(array_agg(row_to_json(t)))
//     FROM (
//       SELECT employee_id, first_name, last_name, roles.role_id, departments.department_id, commander
//       FROM employees
//       JOIN departments ON employees.department_id = departments.department_id
//       JOIN roles ON employees.role_id = roles.role_id
//       ) t;`), (err: Error, result: QueryResult) => {
//         if (err) {
//           console.log(err);
//         } else if (result) {
//           console.table(result.rows);
//         }
//       }];
//       console.table(employeesArray);
// return employeesArray;
//     };
      
  
// method to choose a employee from existing employees for Update and Delete

async function chooseEmployeeRecord(): Promise<void> {
  inquirer
  .prompt([
    {
      type: 'list',
      name: 'selectedEmployee',
      message: 'Select a employee to perform an action on',
      choices: employees.map((employee) => {
        return {
          name: `${employee.firstName} ${employee.lastName}`,
          value: employee.employeeId,
        };
      }),
    },
  ])
  .then((answers) => {
    // set the selectedEmployee to the alignment of the selected employee
    let employee = answers.selectedEmployee;
    // perform actions on the selected employee
    // this.chooseColonialCensusActions();
    return employee;
  });
}

export default chooseEmployeeRecord;