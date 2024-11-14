// import inquirer from 'inquirer';
// import express from 'express';
// import { QueryResult } from 'pg';
// import { pool, connectToDb } from './connection.js';
// import { firstName, lastName, alignment, division, role, commander } from './tryout.js';

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
//       message: 'What do you want to know about the survivors from the 12 Colonies?',
//       choices: [    'A survivor',
//         'A role',
//         'A division',
//         'An alignment'],
//       },])
//       .then((answers) => {
//         switch (answers.addWhat) {
//           case 'A survivor': {
//             addSurvivor();
//             break;
//           }
//           // case 'A role': {
//           //   addRole();
//           //   break;
//           // }
//           // case 'A division': {
//           //   addDivision();
//           //   break;
//           // }
//           // case 'An alignment': {
//           //   addAlignment();
//           //   break;
//           }
//         })};

// // TODO: THEN I am prompted to enter a new survivor’s first name, last name, alignment, role, and commander and then that survivor is added to the database
// const addSurvivor = (() => (
//     pool.query(`INSERT INTO survivors (first_name, last_name, alignment_id, division_id, role_id, commander) VALUES ('$1', '$2', $3, $4, $5, $6)`,[firstName, lastName, alignment, division, role, commander], (err: Error, result: QueryResult) => {
//       if (err) {
//         console.log(err);
//       } else if (result) {
//         console.log(result.rows);
//       }
//     })
//     ));
// //     // TODO: THEN I am prompted to enter the name, salary, and division for the role and then that role is added to the database
// //     const addRole = (() => (
// //       pool.query(`SELECT * FROM roles`, (err: Error, result: QueryResult) => {
// //         if (err) {
// //           console.log(err);
// //         } else if (result) {
// //           console.log(result.rows);
// //         }
// //       })
      
// //       ));
// //       // TODO: THEN I am prompted to enter the name of the division and that division is added to the database
// // const addDivision = (() => (
// //   pool.query(`SELECT * FROM roles`, (err: Error, result: QueryResult) => {
// //     if (err) {
// //       console.log(err);
// //     } else if (result) {
// //       console.log(result.rows);
// //     }
// //   })
  
// //   ));
// //   // TODO: THEN I am prompted to enter the name of the alignment and that alignment is added to the database
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