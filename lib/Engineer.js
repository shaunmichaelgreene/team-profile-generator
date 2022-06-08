<<<<<<< HEAD
//TODO: Add the following properties and methods: name, id, email, getName(), getId(), getEmail(), getRole() - returns "Employee"
//TODO: additional properties & methods: github, getGithub(), getRole() - overridden to return "Engineer"

=======
>>>>>>> feature/tests
const Employee = require('../lib/Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email)

        this.github = github; 
    }
<<<<<<< HEAD
    // overrides parent method
=======
    
>>>>>>> feature/tests
    getRole() {
        return 'Engineer';
    }

    getGithub() {
        return this.github;
    }
}

<<<<<<< HEAD
module.exports = Engineer;
=======
module.exports = Engineer
>>>>>>> feature/tests
