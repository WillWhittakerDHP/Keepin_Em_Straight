import express from 'express';
import { QueryResult } from 'pg';
import { pool, connectToDb } from './connection.js';

await connectToDb();

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// // TODO: THEN I am presented with a formatted table showing survivor data, including survivor ids, full names, roles, divisions, salaries, and commanders to whom the survivors report
const viewHumanity = (() => (
pool.query(`SELECT concat(first_name, ' ', last_name) AS "Name", alignment.alignment_type AS "Alignment", division.division_name AS "Division", roles.title AS "Role", roles.salary AS "Salary", survivors.commander AS "Commander"
  FROM survivors
JOIN alignment ON survivors.alignment_id = alignment.alignment_id
JOIN division ON survivors.division_id = division.division_id
JOIN roles ON survivors.role_id = roles.role_id
JOIN commander ON survivors.commander = survivors.survivor_id`, (err: Error, result: QueryResult) => {
  if (err) {
    console.log(err);
  } else if (result) {
    console.log(result.rows);
  }
})));

// // TODO: THEN I am presented with the role, role id, the division that role belongs to, and the salary for that role
const viewRoles = (() => (
  pool.query(`SELECT * FROM roles`, (err: Error, result: QueryResult) => {
    if (err) {
      console.log(err);
    } else if (result) {
      console.log(result.rows);
    }
  })
  
  ));
//TODO: THEN I am presented with a formatted table showing alignment names and alignment ids
const viewAlignments = (() => (
  pool.query(`SELECT * FROM roles`, (err: Error, result: QueryResult) => {
    if (err) {
      console.log(err);
    } else if (result) {
      console.log(result.rows);
    }
  })
  
  ));
//TODO: THEN I am presented with a formatted table showing division names and division ids
const  viewDivisions = (() => (
  pool.query(`SELECT * FROM roles`, (err: Error, result: QueryResult) => {
    if (err) {
      console.log(err);
    } else if (result) {
      console.log(result.rows);
    }
  })
  
  ));
// TODO: THEN I am presented with a formatted table showing survivors with that alignment including survivor's full names and divisions
  const viewSurvivorsByAlignment = (() => (
    pool.query(`SELECT * FROM roles`, (err: Error, result: QueryResult) => {
      if (err) {
        console.log(err);
        } else if (result) {
          console.log(result.rows);
          }
          })
          
          ));
//TODO: THEN I am presented with a formatted table showing survivors in that division including survivor's full names, role, and alignment
viewSurvivorsByDivision = (() => (
  pool.query(`SELECT * FROM roles`, (err: Error, result: QueryResult) => {
    if (err) {
      console.log(err);
    } else if (result) {
      console.log(result.rows);
    }
  })
  
  ));
// TODO: THEN I am presented with a formatted table showing the name of each division and full budget for that division
const viewDivisionBudgets = (() => (
  pool.query(`SELECT * FROM roles`, (err: Error, result: QueryResult) => {
    if (err) {
      console.log(err);
    } else if (result) {
      console.log(result.rows);
    }
  })
  
  ));
  // TODO: THEN I am prompted to enter a new survivor’s first name, last name, alignment, role, and commander and then that survivor is added to the database
const addSurvivor = (() => (
    pool.query(`SELECT * FROM roles`, (err: Error, result: QueryResult) => {
      if (err) {
        console.log(err);
      } else if (result) {
        console.log(result.rows);
      }
    })
    
    ));
    // TODO: THEN I am prompted to enter the name, salary, and division for the role and then that role is added to the database
    const addRole = (() => (
      pool.query(`SELECT * FROM roles`, (err: Error, result: QueryResult) => {
        if (err) {
          console.log(err);
        } else if (result) {
          console.log(result.rows);
        }
      })
      
      ));
      // TODO: THEN I am prompted to enter the name of the division and that division is added to the database
const addDivision = (() => (
  pool.query(`SELECT * FROM roles`, (err: Error, result: QueryResult) => {
    if (err) {
      console.log(err);
    } else if (result) {
      console.log(result.rows);
    }
  })
  
  ));
  // TODO: THEN I am prompted to enter the name of the alignment and that alignment is added to the database
const addAlignment = (() => (
  pool.query(`SELECT * FROM roles`, (err: Error, result: QueryResult) => {
    if (err) {
      console.log(err);
    } else if (result) {
      console.log(result.rows);
    }
  })
  
  ));
  // TODO: THEN I am prompted to select a survivor to update and am I prompted to input a new commander and this information is updated in the database 
  const updateCommander = (() => (
    pool.query(`SELECT * FROM roles`, (err: Error, result: QueryResult) => {
      if (err) {
        console.log(err);
      } else if (result) {
        console.log(result.rows);
      }
    })
    
    ));
    // TODO: THEN I am prompted to select a survivor to update and am I prompted to input a new alignment and this information is updated in the database 
    const updateAlignment = (() => (
      pool.query(`SELECT * FROM roles`, (err: Error, result: QueryResult) => {
        if (err) {
          console.log(err);
        } else if (result) {
          console.log(result.rows);
        }
      })
      
      ));
      // TODO: THEN I am prompted to select a survivor to update and am I prompted to input a new role and this information is updated in the database 
      const updateRole = (() => (
        pool.query(`SELECT * FROM roles`, (err: Error, result: QueryResult) => {
          if (err) {
            console.log(err);
          } else if (result) {
            console.log(result.rows);
          }
        })
        
        ));
        // TODO: THEN I am prompted to select a survivor to delete and their information is deleted from the database 
        const deleteSurvivor = (() => (
          const deletedRow = 2;
          pool.query(`DELETE FROM favorite_books WHERE id = $1`,
            [deletedRow],
            (err: Error, result: QueryResult) => {
            if (err) {
              console.log(err);
            } else if (result) {
              console.log(result.rows);
            }
          })
          
          ));
          // TODO: THEN I am prompted to select a division to delete and that division is deleted from the database 
          const deleteDivision = (() => (
            const deletedRow = 2;
            pool.query(`DELETE FROM favorite_books WHERE id = $1`,
              [deletedRow],
              (err: Error, result: QueryResult) => {
              if (err) {
                console.log(err);
              } else if (result) {
                console.log(result.rows);
              }
            })
            
            ));
          // TODO: THEN I am prompted to select a role to delete and that role is deleted from the database 
const deleteRoles = (() => (
          const deletedRow = 2;
          pool.query(`DELETE FROM favorite_books WHERE id = $1`,
            [deletedRow],
            (err: Error, result: QueryResult) => {
            if (err) {
              console.log(err);
            } else if (result) {
              console.log(result.rows);
            }
          })
          
          ));

// Default response for any other request (Not Found)
app.use((_req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
