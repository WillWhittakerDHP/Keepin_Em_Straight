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

// TODO: THEN I am presented with the role, role id, the department that role belongs to, and the salary for that role
const viewAllRoles = function(){ pool.query(`SELECT title AS "Role", role_id AS "Role ID", salary AS "Salary", departments.department_name AS "Department" FROM roles JOIN departments ON roles.department = departments.department_id;`, (err: Error, result: QueryResult) => {
    if (err) {
      console.log(err);
    } else if (result) {
      console.table(result.rows);
    };
})};

// app.use((_req, res) => {
//   res.status(404).end();
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

export default viewAllRoles;