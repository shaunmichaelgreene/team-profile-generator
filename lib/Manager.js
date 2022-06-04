//TODO: Add the following properties and methods: name, id, email, getName(), getId(), getEmail(), getRole() - returns "Employee"
//TODO: additional properties & methods: office, getOfficeNumber(), getRole() - overridden to return "Manager"

const Employee = require('../lib/Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)

        this.officeNumber = officeNumber; 
    }
    // overrides parent method
    getRole() {
        return 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;