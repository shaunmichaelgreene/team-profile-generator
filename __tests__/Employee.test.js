const Employee = require('../lib/Employee');

test("gets the Employee's name", () => {
    const employee = new Employee('Shaun', 0, 'shaunmichaelgreene@gmail.com', 'Employee');
    const name = "Shaun";
    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getName()).toEqual(name);
})

test("gets the Employee's ID", () => {
    const employee = new Employee('Shaun', 0, 'shaunmichaelgreene@gmail.com', 'Employee');
    const id = 0;
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getId()).toBe(id);
})

test("gets the Employee's email address", () => {
    const email = "shaunmichaelgreene@gmail.com";
    const employee = new Employee('Shaun', 0, email, 'Employee');
    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getEmail()).toBe(email);
})

test("gets the Employee's role", () => {
    const role = "Employee";
    const employee = new Employee('Shaun', 0, 'shaunmichaelgreene@gmail.com', role);
    expect(employee.getRole()).toEqual(expect.any(String));
    expect(employee.getRole()).toEqual(role);
})