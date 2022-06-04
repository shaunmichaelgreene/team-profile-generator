const fs = require('fs');
const inquirer = require('inquirer');
const pageTemplate = require('./src/page-template');
const emailValidator = require('validator');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
var teamRoster = [];

//TODO: Add the following properties and methods: name, id, email, getName(), getId(), getEmail(), getRole() - returns "Employee"
//TODO: additional properties & methods: github, getGithub(), getRole() - overridden to return "Intern"

//input questions for team manager name, employee, ID, email, office #
//input questions for add employee, then employee type, name, ID, email, GH username. then back to menu for next employee
const managerQuestions = [
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
]

const employeeQuestions = [ //script is not waiting for a response here. Look into requiring an employee to be added after the manager, then after getting thru the new employee questions, prompt for this function. 
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add a new employee to the team?',
            default: false
        }, 
        {
            name: 'employeeType',
            message: 'Please confirm if the new employee is an Engineer or an Intern',
            choices: ['Engineer', 'Intern'],
            when: ({ confirmAdd }) => confirmAdd
        }
]

        // .then(response => {
        //     if(response.confirm) {
        //         return inquirer.prompt(employeeType);

        //     } else {
        //         return false;
        //     }
        // })



const employeeType = [
    {
        type: 'list',
        name: 'employeeType',
        message: 'Please confirm if the new employee is an Engineer or an Intern',
        choices: ['Engineer', 'Intern']
    }
]

const engineerQuestions = [
    {
        type: "input",
        name: "engineerName",
        message: "Please enter the Engineer's name:",
        validate: (engineerName) => {
            if (engineerName) {
                return true;
            } else {
                console.log("You need to enter the Engineer's name!");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "engineerId",
        message: "Please enter the Engineer's Employee ID:",
        validate: (engineerId) => {
            if (engineerId) {
                return true;
            } else {
                console.log("You need to enter the Engineer's Employee ID!");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "Please enter the engineer's email address:",
        validate: (engineerEmail) => {
            if (emailValidator.isEmail(engineerEmail)) {
                return true;
            } else {
                console.log("You need to enter a valid engineer email address!");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "engineerGithub",
        message: "Please enter the Engineer's GitHub username:",
        validate: (engineerGithub) => {
            if (engineerGithub) {
                return true;
            } else {
                console.log("You need to enter the Engineer's GitHub username!");
                return false;
            }
        },
    },
]

const internQuestions = [
    {
        type: "input",
        name: "internName",
        message: "Please enter the Intern's name:",
        validate: (internName) => {
            if (internName) {
                return true;
            } else {
                console.log("You need to enter the Intern's name!");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "internId",
        message: "Please enter the Intern's Employee ID:",
        validate: (internId) => {
            if (internId) {
                return true;
            } else {
                console.log("You need to enter the Intern's Employee ID!");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "internEmail",
        message: "Please enter the Intern's email address:",
        validate: (internEmail) => {
            if (emailValidator.isEmail(internEmail)) {
                return true;
            } else {
                console.log("You need to enter a valid Intern email address!");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "internSchool",
        message: "Please enter the name of the Intern's school:",
        validate: (internSchool) => {
            if (emailValidator.isEmail(internSchool)) {
                return true;
            } else {
                console.log("You need to enter a valid Intern school!");
                return false;
            }
        },
    },
]

const init = () => {
    return inquirer.prompt(managerQuestions);
}

const addEmployee = () => {
    return inquirer.prompt(employeeQuestions)
}

const addEngineer = () => {
    return inquirer.prompt(engineerQuestions);
}

const addIntern = () => {
    return inquirer.prompt(internQuestions);
}

init()
    .then(data => {
        console.log(data)
        const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOffice);
        teamRoster.push(manager);
        addEmployee() //ask if a new employee should be added. If yes, prommpt for type and load appropriate questions. If no, return false
            .then(data => {
                if(data.employeeType == 'Engineer') {
                    addEngineer()
                        .then(data => {
                            const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
                            teamRoster.push(engineer);
                        })
                } else if(data.employeeType == 'Intern') {
                    addIntern()
                        .then(data => {
                            const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
                            teamRoster.push(intern);
                        })
                }
            })

        // return pageTemplate(data);
    })
    .then(data => {
        return writeToFile('team-profile.html', teamRoster)
    });