//TODO: Add the following properties and methods: name, id, email, getName(), getId(), getEmail(), getRole() - returns "Employee"
//TODO: additional properties & methods: github, getGithub(), getRole() - overridden to return "Engineer"

const Employee = require('../lib/Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email)

        this.github = github; 
    }
    
    getRole() {
        return 'Engineer';
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer