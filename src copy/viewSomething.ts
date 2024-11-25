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

let targetDepartment = 0;

async function departmentChooser(): Promise<void> {
  await inquirer.prompt([
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
        return targetDepartment = 0o0;
      }
      case 'Combat': {
        return targetDepartment = 10;
      }
      case 'Engineering': {
        return targetDepartment = 20;
      }
      case 'Executive': {
        return targetDepartment = 30;
      }
      case 'Quorum': {
        return targetDepartment = 40;
      }
      case 'Civilian': {
        return targetDepartment = 50;
      }
    }
  })
};

const viewSomething = function() {
  inquirer
  .prompt([
    {
    type: 'list',
    name: 'viewWhat',
    message: 'What do you want to view about the employees?',
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
        viewEmployees;
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
        departmentChooser();
        viewEmployeesByDepartment();
        break;
      }
      case 'Each department`s total utilized budget': {
        viewDepartmentBudgets();
        break;
      }
    }})};
// TODO: THEN I am presented with a formatted table showing employee data, including employee ids, full names, roles, departments, salaries, and manager to whom the employees report
const viewEmployees = 
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
});

// TODO: THEN I am presented with the role, role id, the department that role belongs to, and the salary for that role
const viewRoles = function(){ pool.query(`SELECT title AS "Role", role_id AS "Role ID", salary AS "Salary", departments.department_name AS "Department" FROM roles JOIN departments ON roles.department = departments.department_id;`, (err: Error, result: QueryResult) => {
    if (err) {
      console.log(err);
    } else if (result) {
      console.table(result.rows);
    };
})};

// TODO: THEN I am presented with a formatted table showing department names and department ids
const  viewDepartments = function(){ pool.query(`SELECT department_name AS "Department", department_id AS "Department ID" FROM departments;`, (err: Error, result: QueryResult) => {
    if (err) {
      console.log(err);
    } else if (result) {
      console.table(result.rows);
    };
})};

 // TODO: THEN I am presented with a formatted table showing employees in that department including employee's full names, and role
const viewEmployeesByDepartment = function(){
  pool.query(`SELECT concat(first_name, ' ', last_name) AS "Employee", roles.title AS "Role"
FROM employees 
JOIN departments ON employees.department_id = departments.department_id
JOIN roles ON employees.role_id = roles.role_id 
WHERE employees.department_id = $1;`, [targetDepartment], (err: Error, result: QueryResult) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`${result.rowCount} row(s) deleted!`);
        }
      });
    };
// TODO: THEN I am presented with a formatted table showing the name of each department and full budget for that department
const viewDepartmentBudgets = function(){ pool.query(`SELECT departments.department_name AS "Department", SUM(roles.salary) AS "Budget"
FROM employees
JOIN departments ON employees.department_id = departments.department_id
JOIN roles ON departments.department_id = departments.department_id
GROUP BY departments.department_name;`, (err: Error, result: QueryResult) => {
    if (err) {
      console.log(err);
    } else if (result) {
      console.table(result.rows);
    }
  })};

app.use((_req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default viewSomething;