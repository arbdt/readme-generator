# JS Command-line Readme Generator

## About
This project is a command-line JavaScript program that takes user input and generates a README file in MarkDown format. The program makes use of the NPM package "Inquirer" for user input.
The user is requred to enter a Title, a Description, Installation instructions, Usage Instructions, Contribution and Testing guidelines. They must also choose from a pretermined list of license options, and enter their github profile name and an email address. In addition, a graphic representing the chosen license is included via the [Shields.io](https://shields.io) service.

## Usage
As this is a command line program, it requires both `node` and `npm`. Once the files are downloaded, run `npm install` to set up Inquirer, and then run `node index.js` to activate the program.

## Example
A video demonstration of the command line application can be found [here](https://youtu.be/bJOCZlk92x4).

Additionally, the file [readmeOut.md](./readmeOut.md) is an example of the output generated by this program.
