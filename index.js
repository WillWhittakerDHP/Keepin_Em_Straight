import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

async function promptsForTheAuthors() {

  await inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "Please name your project",
    },
    {
      type: "input",
      name: "description",
      message: `Please take a moment to describe your project If you need direction, consider these questions:
      - What was your motivation?
      - Why did you build this project?
      - What problem does it solve?
      - What did you learn?`,
    },
    {
      type: "list",
      name: "status",
      message: "what is the current status of your project",
      choices: 
      [
        "Story Development",
        "MVP",
        "Feature Addition",
        "Soliciting Feedback",
        "Complete",
      ],
    },
    {
      type: "input",
      name: "images",
      message: `
Add a screenshot by creating an 'assets/images' folder in your repository and upload your screenshot to it, and add the relative path here, using the following syntax:

    'md ![alt text](assets/images/screenshot.png)'`
    },
    {
      type: "input",
      name: "installation",
      message: "Please describe the step necessary to get your project running",
    },
    {
      type: "input",
      name: "authors",
      message: "Who are the authors of this project?",
    },  
    {
      type: "input",
      name: "support",
      message: "Do you have specific guidance for users who would like to support your project?",
    },
    {
      type: "input",
      name: "acknowledgments",
      message: `List your collaborators, with links to their primary web presence. Also indicate any tutorials and third-party assets that require attribution.`,
    },
    {
      type: "list",
      name: "license",
      message: "Which of the following licenses will you use for this project?",
      choices: 
      [
        "Apache 2.0",
        "Boost",
        'GPL',
        'GPLv3',
        "MIT",
        "Perl",
        "other",
      ],
    },
  ])
  .then((answers) => {let readmePageContent = generateMarkdown(answers)
    fs.writeFile('../README.md', `${readmePageContent}`, (err) => {
    err ? console.log(err) : console.log('Successfully generated README!')})})};

function init() {
  promptsForTheAuthors();
};

init();
