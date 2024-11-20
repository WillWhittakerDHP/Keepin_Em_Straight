// import inquirer from 'inquirer';
// import express from 'express';
// import chooseEmployeeRecord from "./employeeSelector";
// import { QueryResult } from 'pg';
// import { pool, connectToDb } from './connection.ts';

// await connectToDb();

// const PORT = process.env.PORT || 3001;
// const app = express();

// // Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());


// function deleteSomething() {
//   inquirer.prompt([
//     {
//       type: 'list',
//       name: 'deleteWhat',
//       message: 'What do you want to know about the employees from the 12 Colonies?',
//       choices: [    'Employees',
//         'Division',
//         'Roles'
//       ],
//     },])
//     .then((answers) => {
//       switch (answers.deleteWhat) {
//   case 'Employees': {
//     deleteEmployee();
//     break;
//     }
//   case 'Division': {
//   deleteDivision();
//   break;
//   }
//   case 'Roles': {
//   deleteRoles();
//   break;
//   }
// }})};

// // TODO: THEN I am prompted to select a employee to delete and their information is deleted from the database 
// const deleteEmployee = (() => (
//           // const deletedRow = 2;
//           pool.query(`DELETE FROM employees WHERE id = $1`,
//             [ 0
//               // deletedRow
//             ],
//             (err: Error, result: QueryResult) => {
//             if (err) {
//               console.log(err);
//             } else if (result) {
//               console.log(result.rows);
//             }
//           })
          
//           ));
//           // TODO: THEN I am prompted to select a department to delete and that department is deleted from the database 
//           const deleteDivision = (() => (
//           // const deletedRow = 2;
//           pool.query(`DELETE FROM employees WHERE id = $1`,
//             [ 0
//               // deletedRow
//             ],
//               (err: Error, result: QueryResult) => {
//               if (err) {
//                 console.log(err);
//               } else if (result) {
//                 console.log(result.rows);
//               }
//             })
            
//             ));
//           // TODO: THEN I am prompted to select a role to delete and that role is deleted from the database 
// const deleteRoles = (() => (
//           // const deletedRow = 2;
//           pool.query(`DELETE FROM employees WHERE id = $1`,
//             [ 0
//               // deletedRow
//             ],
//             (err: Error, result: QueryResult) => {
//             if (err) {
//               console.log(err);
//             } else if (result) {
//               console.log(result.rows);
//             }
//           })
          
//           ));

// app.use((_req, res) => {
//   res.status(404).end();
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// export default deleteSomething;