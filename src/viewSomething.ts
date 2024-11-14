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

// let targetAlignmentName:string = '';
let targetAlignmentNumber:number = 0;
let targetDivision = ['',''];

const alignmentChooser =function() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'alignmentChoice',
      message: 'What alignment do you care about?',
      choices: [ 'Human', 'Cylon', 'Hybrid', 'Angel', 'Dead'
      ],
    },
  ])
  .then((answers) => {
    switch (answers.alignmentChoice) {
      case 'Human': {
        // targetAlignmentName = 'Living Humans';
        targetAlignmentNumber = 0;
        break;
      }
      case 'Cylon': {
        // targetAlignmentName = 'Living Cylons';
        targetAlignmentNumber = 1;
        break;
      }
      case 'Hybrid': {
        // targetAlignmentName = 'Hybrid';
        targetAlignmentNumber = 2;
        break;
      }
      case 'Angel': {
        // targetAlignmentName = 'Angel';
        targetAlignmentNumber = 3;
        break;
      }
      case 'Dead': {
        // targetAlignmentName = 'Deceased';
        targetAlignmentNumber = 4;
        break;
      }
    }
  })
};

function divisionChooser() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'divisionChoice',
      message: 'What division do you care about?',
      choices: [ 'Command', 'Combat', 'Engineering', 'Executive', 'Quorum', 'Civilian' ],
    },
  ])
  .then((answers) => {
    switch (answers.alignmentChoice) {
      case 'Command': {
        targetDivision = ['Command','00'];
        break;
      }
      case 'Combat': {
        targetDivision = ['Combat','10'];
        break;
      }
      case 'Engineering': {
        targetDivision = ['Engineering','20'];
        break;
      }
      case 'Executive': {
        targetDivision = ['Executive','30'];
        break;
      }
      case 'Quorum': {
        targetDivision = ['Quorum','40'];
        break;
      }
      case 'Civilian': {
        targetDivision = ['Civilian','50'];
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
    message: 'What do you want to know about the survivors from the 12 Colonies?',
    choices: [    'All humanity',
      'All roles',
      'All divisions',
      'All alignments',
      'Survivors by alignment',
      'Survivors by division',
      'Each division`s total utilized budget'
    ],
  },])
  .then((answers) => {
    switch (answers.viewWhat) {
      case 'All humanity': {
        viewHumanity();
        break;
      }
      case 'All roles': {
        viewRoles();
        break;
      }
      case 'All divisions': {
        viewDivisions();
        break;
      }
      case 'All alignments': {
        viewAlignments();
        break;
      }
      case 'Survivors by alignment': {
        viewSurvivorsByAlignment();
        break;
      }
      case 'Survivors by division': {
        viewSurvivorsByDivision();
        break;
      }
      case 'Each division`s total utilized budget': {
        viewDivisionBudgets();
      }
    }})};
// // TODO: THEN I am presented with a formatted table showing survivor data, including survivor ids, full names, roles, divisions, salaries, and commanders to whom the survivors report
const viewHumanity = (() => {
pool.query(`SELECT concat(first_name, ' ', last_name) AS "Name", alignments.alignment_type AS "Alignment", divisions.division_name AS "Division", roles.title AS "Role", roles.salary AS "Salary", survivors.commander AS "Commander"
FROM survivors
JOIN alignments ON survivors.alignment_id = alignments.alignment_id
JOIN divisions ON survivors.division_id = divisions.division_id
JOIN roles ON survivors.role_id = roles.role_id;`, (err: Error, result: QueryResult) => {
  if (err) {
    console.log(err);
  } else if (result) {
    console.table(result.rows);
  }
})});

// // TODO: THEN I am presented with the role, role id, the division that role belongs to, and the salary for that role
const viewRoles = (() => (
  pool.query(`SELECT title AS "Role", role_id AS "Role ID", salary AS "Salary (in Cubits)", divisions.division_name AS "Division" FROM roles JOIN divisions ON roles.division = divisions.division_id;`, (err: Error, result: QueryResult) => {
    if (err) {
      console.log(err);
    } else if (result) {
      console.table(result.rows);
    }
})));
// // TODO: THEN I am presented with a formatted table showing alignment names and alignment ids
const viewAlignments = (() => (
  pool.query(`SELECT alignment_type AS "Alignment", alignment_id AS "Alignment ID" FROM alignments;`, (err: Error, result: QueryResult) => {
    if (err) {
      console.log(err);
    } else if (result) {
      console.table(result.rows);
    }
})));
// // TODO: THEN I am presented with a formatted table showing division names and division ids
const  viewDivisions = (() => (
  pool.query(`SELECT division_name AS "Division", division_id AS "Division ID" FROM divisions;`, (err: Error, result: QueryResult) => {
    if (err) {
      console.log(err);
    } else if (result) {
      console.table(result.rows);
    }
})));
// TODO: THEN I am presented with a formatted table showing survivors with their alignment including survivor's full names and division
const viewSurvivorsByAlignment = function() {  
  alignmentChooser();
  console.log (targetAlignmentNumber);
  pool.query(`SELECT concat(first_name, ' ', last_name) AS "Alignment", divisions.division_name AS "Division"
FROM survivors 
JOIN alignments ON survivors.alignment_id = alignments.alignment_id
JOIN divisions ON survivors.division_id = divisions.division_id
WHERE survivors.alignment_id = $1;`, [targetAlignmentNumber], (err: Error, result: QueryResult) => {
  if (err) {
    console.log(err);
    } else if (result) {
      console.table(result.rows);
      }
      })};
// TODO: THEN I am presented with a formatted table showing survivors in that division including survivor's full names, role, and alignment
const viewSurvivorsByDivision = function(){
  divisionChooser;
  pool.query(`SELECT concat(first_name, ' ', last_name) AS "Division", alignments.alignment_type AS "Alignment", roles.title AS "Role"
FROM survivors 
JOIN alignments ON survivors.alignment_id = alignments.alignment_id
JOIN divisions ON survivors.division_id = divisions.division_id
JOIN roles ON survivors.role_id = roles.role_id 
WHERE survivors.division_id = $1;`, [targetDivision], (err: Error, result: QueryResult) => {
  if (err) {
    console.log(err);
    } else if (result) {
      console.table(result.rows);
      }
      })};
// // TODO: THEN I am presented with a formatted table showing the name of each division and full budget for that division
const viewDivisionBudgets = (() => (
  pool.query(`SELECT divisions.division_name AS "Division", SUM(roles.salary) AS "Budget (in cubits)"
FROM survivors
JOIN divisions ON survivors.division_id = divisions.division_id
JOIN roles ON divisions.division_id = divisions.division_id
GROUP BY divisions.division_name;`, (err: Error, result: QueryResult) => {
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