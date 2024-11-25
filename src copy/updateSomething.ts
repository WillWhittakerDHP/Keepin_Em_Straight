// import inquirer from 'inquirer';
// import express from 'express';
// // import chooseEmployeeRecord from "./employeeSelector";
// import { QueryResult } from 'pg';
// import { pool, connectToDb } from './connection.js';

// await connectToDb();

// const PORT = process.env.PORT || 3001;
// const app = express();

// // Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());


// function updateSomething() {
//   inquirer.prompt([
//     {
//       type: 'list',
//       name: 'updateWhat',
//       message: 'What do you want to change about the employee?',
//       choices: ['Employee`s manager',
//         'Employee`s role'
//       ],
//     },])
//     .then((answers) => {
//       switch (answers.updateWhat) {
//         case 'Employee`s manager': {
//           updateManager();
//           break;
//         }
//         case 'Employee`s role': {
//           updateRole();
//           break;
//         }
//       }})};

      
// // TODO: THEN I am prompted to select a employee to update and am I prompted to input a new manager and this information is updated in the database 
// const updateManager = (() => (
//   pool.query(`UPDATE employees
//     SET manager = '$1'
//     WHERE id = '$2';`, (err: Error, result: QueryResult) => {
//     if (err) {
//       console.log(err);
//     } else if (result) {
//       console.log(result.rows);
//     }
//   })
// ));

// // TODO: THEN I am prompted to select a employee to update and am I prompted to input a new role and this information is updated in the database 
// const updateRole = (() => (
//   pool.query(`UPDATE employees
//     SET role = '$1'
//     WHERE id = '$2';`, (err: Error, result: QueryResult) => {
//     if (err) {
//       console.log(err);
//     } else if (result) {
//       console.log(result.rows);
//     }
//   })
// ));

// app.use((_req, res) => {
//   res.status(404).end();
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// export default updateSomething;