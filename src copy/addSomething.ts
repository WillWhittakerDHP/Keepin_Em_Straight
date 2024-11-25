import inquirer from 'inquirer';
import express from 'express';
import { QueryResult } from 'pg';
import { pool, connectToDb } from './connection.js';
import Employee from './employeeClass.js';

await connectToDb();

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
  
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
  
class Department {
  department: string;
  
  constructor(
    department: string) {
      this.department = department;
    }
  }

let employee = '';
let newRole = '';
let newDepartment = '';

async function addSomething() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'addWhat',
      message: 'What do you want to add to the database?',
      choices: [ 'An employee',
        'A role',
        'A department',
      ]}])
      .then((answers) => {
        switch (answers.addWhat) {
          case 'An employee': {
            createEmployee();
            addEmployee();
            break;
          }
          case 'A role': {
            createRole();
            addRole();
            break;
          }
          case 'A department': {
            createDepartment();
            addDepartment();
            break;
          }
        }})
  };


// TODO: THEN I am prompted to enter a new employee’s first name, last name,  role, and manager and then that employee is added to the database
async function createEmployee() {
  await inquirer.prompt ([
    {
      type: 'input',
      name: 'firstName',
      message: `What is the employee's first name?`,
    },       
    {
      type: 'input',
      name: 'lastName',
      message: `What is the employee's last name?`,
    },        
    {
      type: 'input',
      name: 'department',
      message: `What is the employee's department?`,
    },        
    {
      type: 'input',
      name: 'role',
      message: `What is the employee's role?`,
    },        
    {
      type: 'input',
      name: 'manager',
      message: `What is the employee's manager?`,
    }])
    .then((answers) => {
      const employee = new Employee(
        answers.firstName,
        answers.lastName,
        answers.department,
        answers.role,
        answers.manager
      );
      // this.firstName = employee.firstName;
      return employee;
    },
  )
}

function addEmployee(): void {
  createEmployee();
  pool.query(`INSERT INTO employees (first_name, last_name, department_id, role_id, manager) VALUES ($1, '$2', $3, $4, $5, $6)`,[employee], (err: Error, result: QueryResult) => {
    if (err) {
      console.log(err);
    } else if (result) {
      console.log(result.rows);
    }
  })
}

// TODO: THEN I am prompted to enter the name, salary, and department for the role and then that role is added to the database
async function createRole() {
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
      // this.firstName = employee.firstName;
      return newRole;
    },
  )
}

function addRole(): void {
  createRole();
  pool.query(`INSERT INTO roles (title, salary, department) VALUES ($1, $2, $3`, [newRole], (err: Error, result: QueryResult) => {
    if (err) {
      console.log(err);
    } else if (result) {
      console.log(result.rows);
    }
  })
}

// TODO: THEN I am prompted to enter the name of the department and that department is added to the database

async function createDepartment() {
  await inquirer.prompt ([
    {
      type: 'input',
      name: 'department',
      message: `What is the name of this new department?`,
    },
  ])
  .then((answers) => {
    const newDepartment = new Department(
      answers.department,
    );
    // this.firstName = employee.firstName;
    return newDepartment;
  },
)
}
function addDepartment(): void {
  createRole();
  pool.query(`INSERT INTO departments (department_name) VALUES ($1`, [newDepartment], (err: Error, result: QueryResult) => {
    if (err) {
      console.log(err);
    } else if (result) {
      console.log(result.rows);
    }
  })
}

app.use((_req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default addSomething;