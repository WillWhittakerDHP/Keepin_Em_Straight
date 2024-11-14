import inquirer from 'inquirer';
import express from 'express';
import { QueryResult } from 'pg';
import { pool, connectToDb } from './connection.js';
import Survivor from './survivorClass.js'

await connectToDb();

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let survivors: Survivor[] = [];

async function survivorArrayGetter(array_to_json:string[]) {
let survivorsArray: string[] = [pool.query(`SELECT array_to_json(array_agg(row_to_json(t)))
    FROM (
      SELECT survivor_id, first_name, last_name, alignments.alignment_id, roles.role_id, divisions.division_id, commander
      FROM survivors
      JOIN alignments ON survivors.alignment_id = alignments.alignment_id
      JOIN divisions ON survivors.division_id = divisions.division_id
      JOIN roles ON survivors.role_id = roles.role_id
      ) t;`), (err: Error, result: QueryResult) => {
        if (err) {
          console.log(err);
        } else if (result) {
          console.table(result.rows);
        }
      }];
      console.table(survivorsArray);
return survivorsArray;
    };
      
  
// method to choose a survivor from existing survivors for Update and Delete

async function chooseSurvivorRecord(): Promise<void> {
  inquirer
  .prompt([
    {
      type: 'list',
      name: 'selectedSurvivor',
      message: 'Select a survivor to perform an action on',
      choices: survivors.map((survivor) => {
        return {
          name: `${survivor.alignment} -- ${survivor.firstName} ${survivor.lastName}`,
          value: survivor.survivorId,
        };
      }),
    },
  ])
  .then((answers) => {
    // set the selectedSurvivor to the alignment of the selected survivor
    let survivor = answers.selectedSurvivor;
    // perform actions on the selected survivor
    // this.chooseColonialCensusActions();
    return survivor;
  });
}

export default chooseSurvivorRecord;