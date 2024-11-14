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


// function updateSomething() {
//   inquirer.prompt([
//     {
//       type: 'list',
//       name: 'updateWhat',
//       message: 'What do you want to know about the survivors from the 12 Colonies?',
//       choices: ['Survivor`s commander',
//         'Survivor`s alignment',
//         'Survivor`s role'
//       ],
//     },])
//     .then((answers) => {
//       switch (answers.updateWhat) {
//         case 'Survivor`s commander': {
//           updateCommander();
//           break;
//         }
//         case 'Survivor`s alignment': {
//           updateAlignment();
//           break;
//         }
//         case 'Survivor`s role': {
//           updateRole();
//           break;
//         }
//       }})};

//       // TODO: THEN I am prompted to select a survivor to update and am I prompted to input a new commander and this information is updated in the database 
//   const updateCommander = (() => (
//     pool.query(`SELECT * FROM roles`, (err: Error, result: QueryResult) => {
//       if (err) {
//         console.log(err);
//       } else if (result) {
//         console.log(result.rows);
//       }
//     })
    
//     ));
//     // TODO: THEN I am prompted to select a survivor to update and am I prompted to input a new alignment and this information is updated in the database 
//     const updateAlignment = (() => (
//       pool.query(`SELECT * FROM roles`, (err: Error, result: QueryResult) => {
//         if (err) {
//           console.log(err);
//         } else if (result) {
//           console.log(result.rows);
//         }
//       })
      
//       ));
//       // TODO: THEN I am prompted to select a survivor to update and am I prompted to input a new role and this information is updated in the database 
//       const updateRole = (() => (
//         pool.query(`SELECT * FROM roles`, (err: Error, result: QueryResult) => {
//           if (err) {
//             console.log(err);
//           } else if (result) {
//             console.log(result.rows);
//           }
//         })
        
//         ));

// app.use((_req, res) => {
//   res.status(404).end();
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// export default updateSomething;