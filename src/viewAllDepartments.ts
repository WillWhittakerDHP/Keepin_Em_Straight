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

// TODO: THEN I am presented with a formatted table showing department names and department ids
const  viewAllDepartments = function(){ pool.query(`SELECT department_name AS "Department", department_id AS "Department ID" FROM departments;`, (err: Error, result: QueryResult) => {
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
export default viewAllDepartments;