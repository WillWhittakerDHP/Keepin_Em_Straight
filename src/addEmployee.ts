import inquirer from 'inquirer';
import express from 'express';
import Employee from './employeeClass.js';
import { QueryResult } from 'pg';
import { pool } from './connection.js';
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// TODO: THEN I am prompted to enter a new employee’s first name, last name,  role, and manager and then that employee is added to the database
async function addEmployee(): Promise<void> {
  
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
      const newEmployee = new Employee(
        answers.firstName,
        answers.lastName,
        answers.department,
        answers.role,
        answers.manager
      );
      // this.firstName = employee.firstName;
      // return newEmployee;
      console.log(newEmployee);
      
      pool.query(`INSERT INTO employees (first_name, last_name, department_id, role_id, manager) VALUES ($1, $2, $3, $4, $5)`,[newEmployee.firstName, newEmployee.lastName, newEmployee.department, newEmployee.role, newEmployee.manager], (err: Error, result: QueryResult) => {
        if (err) {
          console.log(err);
        } else if (result) {
          console.log(result.rows);
        }
      })
    },
  )
  }

export default addEmployee;