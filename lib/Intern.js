const Employee = require('../lib/Employee.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
    }

    getIcon() {
        return `"fa-solid fa-user-graduate"`;
    }
}

module.exports = Intern
