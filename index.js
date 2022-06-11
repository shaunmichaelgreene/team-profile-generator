const fs = require('fs');
const inquirer = require('inquirer');
const createPage = require('./src/page-template');
const emailValidator = require('validator');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
var teamRoster = [];

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

const employeeQuestions = [ 
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add a new employee to the team?',
            default: false
        }, 
        {
            type: 'list',
            name: 'employeeType',
            message: 'Please confirm if the new employee is an Engineer or an Intern',
            choices: ['Engineer', 'Intern'],
            when: ({ confirmAdd }) => confirmAdd
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
        name: "github",
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
        name: "school",
        message: "Please enter the name of the Intern's school:",
        validate: (internSchool) => {
            if (internSchool) {
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

const addEmployee = async () => {
    let data = await inquirer.prompt(employeeQuestions)
    .then (data => {
    if (data.confirmAdd == false) {
        console.log(teamRoster);
        console.log(Employee)
        let content = createPage(teamRoster);
        generatePage('team-page.html', content);
        return false
        //write to file
    }  else if (data.employeeType == 'Engineer') {
        console.log("time to add a new ENGINEER!")
        addEngineer()
        .then(data => {
            const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.github);
            teamRoster.push(engineer);
            addEmployee()
        })
    } else if (data.employeeType == 'Intern') {
        console.log("time to add a new INTERN!")
        addIntern()
        .then(data => {
            const intern = new Intern(data.internName, data.internId, data.internEmail, data.school);
            teamRoster.push(intern);
            addEmployee()
        })
    }
})
}

const addEngineer = async () => {
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
        addEmployee() //ask if a new employee should be added. If yes, prommpt for type and load appropriate questions. If no, return false. 
    })
;
function generatePage(pageName, pageContent) {
    console.log("entered generatePage function, getting ready to writeToFile!")
    return fs.writeFile('team-profile.html', createPage(teamRoster))
};



