const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");

function uniqueProperty(employee) {
    if (employee.getRole() == "Manager") {
        return `Office Number: ${employee.officeNumber}`;
    } else if (employee.getRole() == "Engineer") {
        return `Github: <a target="_blank" href="https://github.com/${employee.github}">${employee.github}</a>`;
    } else if (employee.getRole() == "Intern") {
        return `School: ${employee.school}`;
    }
}

function renderEmployee(teamRoster) {
    var employeeCard = "";
    teamRoster.forEach((employee) => {
        employeeCard += `<div class="col-3 m-2 card border border-light">
        <div class="card-header text-white bg-primary">${employee.getName()}
            <p><i class=${employee.getIcon()}></i> ${employee.getRole()}</p> 
        </div>
        <div class="card-body">
            <p class="card-text py-2 pl-3 rounded">Id: ${employee.getId()}</p>
            <p class="card-text py-2 pl-3 rounded">Email: <a href="mailto:${
                employee.email
            }">${employee.email}</a></p>
            <p class="card-text py-2 pl-3 rounded">${uniqueProperty(
                employee
            )}</p>
        </div>
    </div>
        `;
    });
    return employeeCard;
}

const createPage = (teamRoster) => {
    return `
    <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./assets/CSS/style.css">
        <script src="https://kit.fontawesome.com/6eae338ef5.js" crossorigin="anonymous"></script>
        <title>Shaun's Team Profile Generator</title>
    </head>

    <body>
        <header>
            <h1 class="bg-danger m-2 p-4 text-center text-light">My Team</h1>
        </header>
        <div class="row justify-content-center">
            ${renderEmployee(teamRoster)}
        </div>

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
</html>`;
};

module.exports = createPage;
