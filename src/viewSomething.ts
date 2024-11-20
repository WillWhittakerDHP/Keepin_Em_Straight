import inquirer from 'inquirer';
import express from 'express';
import { QueryResult } from 'pg';
import { pool, connectToDb } from './connection.js';

await connectToDb();

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let targetDepartment = ['',''];

function departmentChooser() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'departmentChoice',
      message: 'What department do you care about?',
      choices: [ 'Command', 'Combat', 'Engineering', 'Executive', 'Quorum', 'Civilian' ],
    },
  ])
  .then((answers) => {
    switch (answers.departmentChoice) {
      case 'Command': {
        targetDepartment = ['Command','00'];
        break;
      }
      case 'Combat': {
        targetDepartment = ['Combat','10'];
        break;
      }
      case 'Engineering': {
        targetDepartment = ['Engineering','20'];
        break;
      }
      case 'Executive': {
        targetDepartment = ['Executive','30'];
        break;
      }
      case 'Quorum': {
        targetDepartment = ['Quorum','40'];
        break;
      }
      case 'Civilian': {
        targetDepartment = ['Civilian','50'];
        break;
      }
    }
  })
};

function viewSomething() {
  inquirer
  .prompt([
    {
    type: 'list',
    name: 'viewWhat',
    message: 'What do you want to know about the employees?',
    choices: [    'All employees',
      'All roles',
      'All departments',
      'Employees by department',
      'Each department`s total utilized budget'
    ],
  },])
  .then((answers) => {
    switch (answers.viewWhat) {
      case 'All employees': {
        viewHumanity();
        break;
      }
      case 'All roles': {
        viewRoles();
        break;
      }
      case 'All departments': {
        viewDepartments();
        break;
      }
      case 'Employees by department': {
        viewEmployeesByDepartment();
        break;
      }
      case 'Each department`s total utilized budget': {
        viewDepartmentBudgets();
      }
    }})};
// // TODO: THEN I am presented with a formatted table showing employee data, including employee ids, full names, roles, departments, salaries, and manager to whom the employees report
const viewHumanity = (() => {
pool.query(`SELECT concat(first_name, ' ', last_name) AS "Name", departments.department_name AS "Department", roles.title AS "Role", roles.salary AS "Salary"

FROM employees
JOIN departments ON employees.department_id = departments.department_id
JOIN roles ON employees.role_id = roles.role_id;`, (err: Error, result: QueryResult) => {
  if (err) {
    console.log(err);
  } else if (result) {
    console.table(result.rows);
    return; 
  }
}
)
}
);

// // TODO: THEN I am presented with the role, role id, the department that role belongs to, and the salary for that role
const viewRoles = (() => (
  pool.query(`SELECT title AS "Role", role_id AS "Role ID", salary AS "Salary (in Cubits)", departments.department_name AS "Department" FROM roles JOIN departments ON roles.department = departments.department_id;`, (err: Error, result: QueryResult) => {
    if (err) {
      console.log(err);
    } else if (result) {
      console.table(result.rows);
    }
})));
// // TODO: THEN I am presented with a formatted table showing department names and department ids
const  viewDepartments = (() => (
  pool.query(`SELECT department_name AS "Department", department_id AS "Department ID" FROM departments;`, (err: Error, result: QueryResult) => {
    if (err) {
      console.log(err);
    } else if (result) {
      console.table(result.rows);
    }
})));
// TODO: THEN I am presented with a formatted table showing employees in that department including employee's full names, and role
const viewEmployeesByDepartment = function(){
  departmentChooser;
  pool.query(`SELECT concat(first_name, ' ', last_name) AS "Department", roles.title AS "Role"
FROM employees 
JOIN departments ON employees.department_id = departments.department_id
JOIN roles ON employees.role_id = roles.role_id 
WHERE employees.department_id = $1;`, [targetDepartment], (err: Error, result: QueryResult) => {
  if (err) {
    console.log(err);
    } else if (result) {
      console.table(result.rows);
      }
      })};
// // TODO: THEN I am presented with a formatted table showing the name of each department and full budget for that department
const viewDepartmentBudgets = (() => (
  pool.query(`SELECT departments.department_name AS "Department", SUM(roles.salary) AS "Budget (in cubits)"
FROM employees
JOIN departments ON employees.department_id = departments.department_id
JOIN roles ON departments.department_id = departments.department_id
GROUP BY departments.department_name;`, (err: Error, result: QueryResult) => {
    if (err) {
      console.log(err);
    } else if (result) {
      console.table(result.rows);
    }
  })
  
  ));

app.use((_req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default viewSomething;