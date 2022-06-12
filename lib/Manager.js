const Employee = require('../lib/Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)

        this.officeNumber = officeNumber; 
    }
    
    getRole() {
        return 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getIcon() {
        return `"fa-solid fa-mug-hot"`;
    }
}

module.exports = Manager;