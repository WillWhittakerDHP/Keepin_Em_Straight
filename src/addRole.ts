import inquirer from 'inquirer';
import express from 'express';
import { QueryResult } from 'pg';
import { pool } from './connection.js';
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// let newRole = '';
  
class Role {
  title: string; 
  salary: number;
  department: string;
  
  constructor(
    title: string,
    salary: number,
    department: string) {
      this.title = title;
      this.salary = salary;
      this.department = department;
    }
  }

// TODO: THEN I am prompted to enter the name, salary, and department for the role and then that role is added to the database
async function addRole(): Promise<void> {
  // let newRole = {};
  await inquirer.prompt ([
    {
      type: 'input',
      name: 'title',
      message: `What is the title of this role?`,
    },       
    {
      type: 'number',
      name: 'salary',
      message: `What is the salary for this role?`,
    },
    {
      type: 'input',
      name: 'department',
      message: `What is the role's department?`,
    },
  ])
    .then((answers) => {
      const newRole = new Role(
        answers.title,
        answers.salary,
        answers.department,
      );
      console.log (newRole);
      // return newRole;
      
      pool.query(`INSERT INTO roles (title, salary, department) VALUES ($1, $2, $3)`, [newRole.title, newRole.salary, newRole.department], (err: Error, result: QueryResult) => {
        if (err) {
          console.log(err);
        } else if (result) {
          console.log(result.rows);
        }
      }
    );
  },
  );
    
    // console.log (newRole);
}

// async function createRole() {
//   await inquirer.prompt ([
//     {
//       type: 'input',
//       name: 'title',
//       message: `What is the title of this role?`,
//     },       
//     {
//       type: 'number',
//       name: 'salary',
//       message: `What is the salary for this role?`,
//     },
//     {
//       type: 'input',
//       name: 'department',
//       message: `What is the role's department?`,
//     },
//   ])
//     .then((answers) => {
//       const newRole = new Role(
//         answers.title,
//         answers.salary,
//         answers.department,
//       );
//       return newRole;
//     },
//   )
// }

// function updateRole(): void {
//   createRole();
//   pool.query(`INSERT INTO roles (title, salary, department) VALUES ($1, $2, $3)`, [newRole], (err: Error, result: QueryResult) => {
//     if (err) {
//       console.log(err);
//     } else if (result) {
//       console.log(result.rows);
//     }
//   })
// }
// function addRole(): void {
//   createRole();
//   updateRole();
// }

export default addRole;