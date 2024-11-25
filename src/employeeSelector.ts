// import inquirer from 'inquirer';
// import { QueryResult } from 'pg';
// import { pool} from './connection.js';
// import Employee from './employeeClass.js'

// let employees: Employee[] = [];

// async function employeeArrayGetter(array_to_json:string[]) {
// let employeesArray: string[] = [pool.query(`SELECT array_to_json(array_agg(row_to_json(t)))
//     FROM (
//       SELECT concat(first_name, ' ', last_name) AS "Employee Name"
//       FROM employees;`), (err: Error, result: QueryResult) => {
//         if (err) {
//           console.log(err);
//         } else if (result) {
//           console.table(result.rows);
//         }
//       }];
//       console.table(employeesArray);
// return employeesArray;
//     };
      
  
// // method to choose a employee from existing employees for Update and Delete

// async function chooseEmployeeRecord(): Promise<void> {
//   inquirer
//   .prompt([
//     {
//       type: 'list',
//       name: 'selectedEmployee',
//       message: 'Select a employee to perform an action on',
//       choices: employees.map((employee) => {
//         return {
//           name: `${employee.firstName} ${employee.lastName}`,
//           value: employee.employeeId,
//         };
//       }),
//     },
//   ])
//   .then((answers) => {
//     let employee = answers.selectedEmployee;
//     this.chooseColonialCensusActions();
//     return employee;
//   });
// }

// export default chooseEmployeeRecord;