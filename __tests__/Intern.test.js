const Intern = require('../lib/Intern');

test("gets the Intern's role", () => {
    const role = "Intern";
    const intern = new Intern('Shaun', 3, 'shaunmichaelgreene@gmail.com', 'West Virginia University');
    expect(intern.getRole()).toEqual(expect.any(String));
    expect(intern.getRole()).toEqual(role);
})

test("gets the Intern's school", () => {
    const school = "West Virginia University";
    const intern = new Intern('Shaun', 3, 'shaunmichaelgreene@gmail.com', school);
    expect(intern.getSchool()).toEqual(expect.any(String));
    expect(intern.getSchool()).toEqual(school);
})