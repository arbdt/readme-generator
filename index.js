// import packages
let fs = require("fs"); //to write to file
let inquirer = require("inquirer"); // to get user input
let generateMarkdown = require("./utils/generateMarkdown"); // to make the file content

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter a title for the Readme:"
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description for this project:"
    },
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions:"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage instructions:"
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter contribution guidelines:"
    },
    {
        type: "input",
        name: "tests",
        message: "Enter test instructions:"
    },
    {
        type: "list",
        name: "licence",
        message: "Choose a licence:",
        choices: ["MIT", "GPL", "AGPL", "Apache"]
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, "utf8", function(){
        console.log("Success!");
    });
}

// function to initialize program
async function init() {
    try {
    //ask questions and store answers
    let answers = await inquirer.prompt(questions);
    
    // generate readme using answers
    let readmeData = generateMarkdown(answers);

    //write the file
    writeToFile("READMEout.md", readmeData);

    }
    catch (err) {
        console.error(err);
    }

}

// function call to initialize program
init();
