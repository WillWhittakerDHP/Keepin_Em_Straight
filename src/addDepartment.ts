import inquirer from 'inquirer';
import express from 'express';
import { QueryResult } from 'pg';
import { pool } from './connection.js';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// TODO: THEN I am prompted to enter the name of the department and that department is added to the database
async function addDepartment(): Promise<void> {

  let newDepartment ='';

  await inquirer.prompt ([
    {
      type: 'input',
      name: 'department',
      message: `What is the name of this new department?`,
    },
  ])
  .then((answer) => {
    newDepartment = answer.department;
    console.log(newDepartment);
  },
);

console.log(newDepartment);

pool.query(`INSERT INTO departments (department_name) VALUES ($1);`, [newDepartment], (err: Error, result: QueryResult) => {
  if (err) {
    console.log(err);
  } else if (result) {
    console.log(result.rows);
  }
})
  console.log('dong');
}

export default addDepartment;