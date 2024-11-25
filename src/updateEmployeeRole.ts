import inquirer from 'inquirer';
import { QueryResult } from 'pg';
import { pool } from './connection.js';


async function updateEmployeeRole() {
  await inquirer.prompt([
    {
      type: 'number',
      name: 'employeeId',
      message: 'For which employee do you want to change the role?',
    },
    {
      type: "number",
      name: 'newRole',
      message: 'please give this employee a new role',
    }
  ])
    .then((answers) => {
  pool.query(`UPDATE employees
    SET role_id = $1
    WHERE employee_id = $2;`, [answers.newRole, answers.employeeId], (err: Error, result: QueryResult) => {
    if (err) {
      console.log(err);
    } else if (result) {
      console.log(result.rows);
    }
  });
})
}

export default updateEmployeeRole;