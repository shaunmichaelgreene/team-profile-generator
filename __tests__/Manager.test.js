const Manager = require('../lib/Manager');

test("gets the manager's role", () => {
    const role = "Manager";
    const manager = new Manager('Shaun', 1, 'shaunmichaelgreene@gmail.com,', 101)
    expect(manager.getRole()).toEqual(expect.any(String));
    expect(manager.getRole()).toEqual(role);
})

test("gets the manager's office number", () => {
    const officeNumber = 101;
    const manager = new Manager('Shaun', 1, 'shaunmichaelgreene@gmail.com', officeNumber);
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
    expect(manager.getOfficeNumber()).toEqual(officeNumber);
})