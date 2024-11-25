// import inquirer from 'inquirer';
// import express from 'express';
// // import chooseEmployeeRecord from "./employeeSelector";
// import { QueryResult } from 'pg';
// import { pool, connectToDb } from './connection.js';

// await connectToDb();

// const PORT = process.env.PORT || 3001;
// const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// let selectedDepartment = '';
// let selectedEmployee = '';
// let selectedRole = '';

// function deleteSomething() {
//   inquirer.prompt([
//     {
//       type: 'list',
//       name: 'deleteWhat',
//       message: 'What do you want to delete about the employees?',
//       choices: [    'Employees',
//         'Division',
//         'Roles'
//       ],
//     },])
//     .then((answers) => {
//       switch (answers.deleteWhat) {
//   case 'Employees': {
//     chooseEmployeeRecord;
//     deleteEmployee();
//     break;
//     }
//   case 'Division': {
//     chooseEmployeeRecord;
//     deleteDivision();
//     break;
//   }
//   case 'Roles': {
//     chooseEmployeeRecord;
//     deleteRoles();
//     break;
//   }
// }})};

// // TODO: THEN I am prompted to select a employee to delete and their information is deleted from the database 
// const deleteEmployee = (() => (
// pool.query(`DELETE FROM employees WHERE id = $1`,
//   [ selectedEmployee ],
//   (err: Error, result: QueryResult) => {
//   if (err) {
//     console.log(err);
//   } else if (result) {
//     console.log(result.rows);
//   }
// })
// ));

// // TODO: THEN I am prompted to select a department to delete and that department is deleted from the database 
// const deleteDivision = (() => (
//   pool.query(`DELETE FROM departments WHERE id = $1`,
//     [ selectedDepartment ],
//     (err: Error, result: QueryResult) => {
//       if (err) {
//         console.log(err);
//       } else if (result) {
//         console.log(result.rows);
//       }
//     })
//   ));

// // TODO: THEN I am prompted to select a role to delete and that role is deleted from the database 
// const deleteRoles = (() => (
//   pool.query(`DELETE FROM roles WHERE id = $1`,
//     [ selectedRole ],
//     (err: Error, result: QueryResult) => {
//     if (err) {
//       console.log(err);
//     } else if (result) {
//       console.log(result.rows);
//     }
//   })
//   ));

// app.use((_req, res) => {
//   res.status(404).end();
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// export default deleteSomething;