import inquirer from "inquirer";

// // define the Employee class
class Employee {
  employeeId: (number);
  firstName: (string);
  lastName: (string);
  department: (string);
  role: (string);
  manager: (string);

  constructor(
    employeeId: (number),
    firstName: (string),
    lastName: (string),
    department: (string),
    role: (string),
    manager: (string)
  ) {
    this.employeeId = employeeId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = department;
    this.role = role;
    this.manager = manager;
    }
  
  // method to create a employee for Add
  createEmployeeRecord(): void {
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
        name: 'department',
        message: 'In which department does this person serve?',
        choices: ['Command', 'Combat', 'Engineering', 'Executive', 'Quorum', 'Civilian'],
      },
      {
        type: 'list',
        name: 'role',
        message: 'In which department does this person serve?',
        choices: ['Command', 'Combat', 'Engineering', 'Executive', 'Quorum', 'Civilian'],
      },      {
        type: 'list',
        name: 'manager',
        message: `Who is this person's manager?`,
        choices: ['Command', 'Combat', 'Engineering', 'Executive', 'Quorum', 'Civilian'],
      },
    ])
    .then((answers) => {
      const employee = new Employee(
        // TODO: How do I deal with the ID so it doesn't conflict with the database?
        0,
        answers.firstName,
        answers.lastName,
        answers.department,
        answers.role,
        answers.manager,
      );
      return employee;
});}} 

export default Employee