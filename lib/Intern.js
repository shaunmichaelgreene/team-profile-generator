const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./dist/generateHTML');
const emailValidator = require('validator');

//TODO: Add the following properties and methods: name, id, email, getName(), getId(), getEmail(), getRole() - returns "Employee"
//TODO: additional properties & methods: github, getGithub(), getRole() - overridden to return "Intern"

//input questions for team manager name, employee, ID, email, office #
//input questions for add employee, then employee type, name, ID, email, GH username. then back to menu for next employee
const questions = [
    {
        type: "input",
        name: "managerName",
        message: "Please enter the Team Manager's name:",
        validate: (managerName) => {
            if (managerName) {
                return true;
            } else {
                console.log("You need to enter a team manager name!");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "managerId",
        message: "Please enter the Team Manager's Employee ID:",
        validate: (managerId) => {
            if (managerId) {
                return true;
            } else {
                console.log("You need to enter the team manager's Employee ID!");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "managerEmail",
        message: "Please enter the Team Manager's email address:",
        validate: (managerEmail) => {
            if (emailValidator.isEmail(managerEmail)) {
                return true;
            } else {
                console.log("You need to enter a valid team manager email address!");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "managerOffice",
        message: "Please enter the Team Manager's office number:",
        validate: (managerOffice) => {
            if (managerOffice) {
                return true;
            } else {
                console.log("You need to enter a team manager office number!");
                return false;
            }
        },
    },
    {
        type: 'list',
        name: 'employeeType',
        message: 'Please confirm if the new employee is an Engineer or an Intern',
        choices: ['Engineer', 'Intern']
    },
]

const init = () => {
    return inquirer.prompt(questions);
}

init()
    .then(data => {
        console.log(data)
        return generateMarkdown(data);
    })
    .then(data => {
        return writeToFile('README.md', data)
    });