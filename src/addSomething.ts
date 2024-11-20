// import inquirer from 'inquirer';
// import express from 'express';
// import { QueryResult } from 'pg';
// import { pool, connectToDb } from './connection.js';
// import { firstName, lastName, department, role, manager } from './index.js';

// await connectToDb();

// const PORT = process.env.PORT || 3001;
// const app = express();

// // Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// async function addSomething() {
//   inquirer.prompt([
//     {
//       type: 'list',
//       name: 'addWhat',
//       message: 'What do you want to know about the employees from the 12 Colonies?',
//       choices: [    'An employee',
//         'A role',
//         'A department',
//       },])
//       .then((answers) => {
//         switch (answers.addWhat) {
//           case 'An employee': {
//             addEmployee();
//             break;
//           }
//           // case 'A role': {
//           //   addRole();
//           //   break;
//           // }
//           // case 'A department': {
//           //   addDepartment();
//           //   break;
//           // }
//           //   addAlignment();
//           //   break;
//           }
//         })};

// // TODO: THEN I am prompted to enter a new employee’s first name, last name,  role, and manager and then that employee is added to the database
// const addEmployee = (() => (
//     pool.query(`INSERT INTO employees (first_name, last_name, department_id, role_id, manager) VALUES ('$1', '$2', $3, $4, $5, $6)`,[firstName, lastName,  department, role, manager], (err: Error, result: QueryResult) => {
//       if (err) {
//         console.log(err);
//       } else if (result) {
//         console.log(result.rows);
//       }
//     })
//     ));
// //     // TODO: THEN I am prompted to enter the name, salary, and department for the role and then that role is added to the database
// //     const addRole = (() => (
// //       pool.query(`SELECT * FROM roles`, (err: Error, result: QueryResult) => {
// //         if (err) {
// //           console.log(err);
// //         } else if (result) {
// //           console.log(result.rows);
// //         }
// //       })
      
// //       ));
// //       // TODO: THEN I am prompted to enter the name of the department and that department is added to the database
// // const addDepartment = (() => (
// //   pool.query(`SELECT * FROM roles`, (err: Error, result: QueryResult) => {
// //     if (err) {
// //       console.log(err);
// //     } else if (result) {
// //       console.log(result.rows);
// //     }
// //   })
  
// //   ));
// //   // TODO: THEN I am prompted to enter the name of the and that is added to the database
// // const addAlignment = (() => (
// //   pool.query(`SELECT * FROM roles`, (err: Error, result: QueryResult) => {
// //     if (err) {
// //       console.log(err);
// //     } else if (result) {
// //       console.log(result.rows);
// //     }
// //   })
  
// //   ));

// // app.use((_req, res) => {
// //   res.status(404).end();
// // });

// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });

// export default addSomething;