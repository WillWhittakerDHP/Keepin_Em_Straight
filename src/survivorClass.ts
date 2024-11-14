import inquirer from "inquirer";

// // define the Survivor class
class Survivor {
  survivorId: (number);
  firstName: (string);
  lastName: (string);
  alignment: (string);
  division: (string);
  role: (string);
  commander: (string);

  constructor(
    survivorId: (number),
    firstName: (string),
    lastName: (string),
    alignment: (string),
    division: (string),
    role: (string),
    commander: (string)
  ) {
    this.survivorId = survivorId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.alignment = alignment;
    this.division = division;
    this.role = role;
    this.commander = commander;
    }
  
  // method to create a survivor for Add
  createSurvivorRecord(): void {
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'firstName',
        message: 'Enter First Name',
      },
      {
        type: 'input',
        name: 'lastName',
        message: 'Enter Last NAme',
      },
      {
        type: 'list',
        name: 'alignment',
        message: 'Select an Alignment',
        choices: ['Human', 'Cylon', 'Hybrid', 'Angel', 'Deceased'],
      },
      {
        type: 'list',
        name: 'division',
        message: 'In which division does this person serve?',
        choices: ['Command', 'Combat', 'Engineering', 'Executive', 'Quorum', 'Civilian'],
      },
      {
        type: 'list',
        name: 'role',
        message: 'In which division does this person serve?',
        choices: ['Command', 'Combat', 'Engineering', 'Executive', 'Quorum', 'Civilian'],
      },      {
        type: 'list',
        name: 'commander',
        message: `Who is this person's commander?`,
        choices: ['Command', 'Combat', 'Engineering', 'Executive', 'Quorum', 'Civilian'],
      },
    ])
    .then((answers) => {
      const survivor = new Survivor(
        // TODO: How do I deal with the ID so it doesn't conflict with the database?
        0,
        answers.firstName,
        answers.lastName,
        answers.alignment,
        answers.division,
        answers.role,
        answers.commander,
      );
      return survivor;
});}} 

export default Survivor