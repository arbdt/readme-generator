// import packages
let fs = require("fs");
let inquirer = require("inquirer");
let utils = require("utils");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "titleEntry",
        message: "Enter a title for the Readme:"
    },
    {
        type: "input",
        name: "descEntry",
        message: "Enter a decription for this project:"
    },
    {
        type: "input",
        name: "installEntry",
        message: "Enter installation instructions:"
    },
    {
        type: "input",
        name: "usageEntry",
        message: "Enter usage instructions:"
    },
    {
        type: "input",
        name: "contribEntry",
        message: "Enter contribution guidelines:"
    },
    {
        type: "input",
        name: "testEntry",
        message: "Enter test instructions:"
    },
    {
        type: "list",
        name: "licenceEntry",
        message: "Choose a licence:",
        choices: ["MIT", "GNU", "Apache"]
    },
    {
        type: "input",
        name: "githubEntry",
        message: "Enter your GitHub username:"
    },
    {
        type: "input",
        name: "emailEntry",
        message: "Enter your email address:"
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
