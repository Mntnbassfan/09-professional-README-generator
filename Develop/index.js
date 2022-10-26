// TODO: Include packages needed for this application

// included inquirer and node fs (file system)
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    message: "What is the project title?",
    type: "input",
    name: "title",
  },

  {
    message: "What is the project description?",
    type: "input",
    name: "description",
  },

  {
    message: "What are the installation instructions?",
    type: "input",
    name: "installationInstructions",
  },

  {
    message: "What is the usage information?",
    type: "input",
    name: "usageInformation",
  },

  {
    message: "What is the project license?",
    type: "list",
    choices: ["Apache 2.0", "Boost", "BSD", "BSD 3-Clause", "none"],
    name: "licenseInformation",
  },

  {
    message: "What are the contribution guidelines?",
    type: "input",
    name: "contGuidelines",
  },

  {
    message: "What are the test instructions?",
    type: "input",
    name: "testInstructions",
  },

  {
    message: "What is your git hub user name?",
    type: "username",
    name: "ghUserName",
  },

  {
    message: "What is your email address?",
    type: "email",
    name: "emailAddress",
  },
];

inquirer
  .prompt(questions)
  .then(writeToFile)
  .catch((err) => console.log(err));

// TODO: Create a function to write README file
function writeToFile(res) {
  let markdown = `
![license](https://img.shields.io/badge/License-${res.licenseInformation.replace(
    " ",
    "%20"
  )}-lightblue.svg)
# ${res.title}

## Description 
${res.description}

## Table of Contents



## Installation
${res.installationInstructions}

## Usage
${res.usageInformation}

## License
${res.licenseInformation}

## Contributing
${res.contGuidelines}

## Tests
${res.testInstructions}

## Questions
${res.ghUserName}

${res.emailAddress}

    `;
  // write a markdown file named sampleReadme
  fs.writeFileSync("sampleReadme.md", markdown);
}

// Create a function to initialize app
function init() {}

// Function call to initialize app
init();
