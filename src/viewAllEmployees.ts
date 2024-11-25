import express from 'express';
import { QueryResult } from 'pg';
import { pool, 
  // connectToDb 
} from './connection.js';

// await connectToDb();

// const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// TODO: THEN I am presented with a formatted table showing employee data, including employee ids, full names, roles, departments, salaries, and manager to whom the employees report
const  viewAllEmployees = function(){
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
})
};

// app.use((_req, res) => {
//   res.status(404).end();
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
export default viewAllEmployees;