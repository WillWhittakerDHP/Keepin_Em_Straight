// import inquirer from 'inquirer';
// import express from 'express';
// import chooseSurvivorRecord from "./survivorSelector";
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
//       message: 'What do you want to know about the survivors from the 12 Colonies?',
//       choices: [    'Survivors',
//         'Division',
//         'Roles'
//       ],
//     },])
//     .then((answers) => {
//       switch (answers.deleteWhat) {
//   case 'Survivors': {
//     deleteSurvivor();
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

// // TODO: THEN I am prompted to select a survivor to delete and their information is deleted from the database 
// const deleteSurvivor = (() => (
//           // const deletedRow = 2;
//           pool.query(`DELETE FROM favorite_books WHERE id = $1`,
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
//           // TODO: THEN I am prompted to select a division to delete and that division is deleted from the database 
//           const deleteDivision = (() => (
//           // const deletedRow = 2;
//           pool.query(`DELETE FROM favorite_books WHERE id = $1`,
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
//           pool.query(`DELETE FROM favorite_books WHERE id = $1`,
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