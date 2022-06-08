const Engineer = require('../lib/Engineer');

test("gets the Engineer's role", () => {
    const role = 'Engineer';
    const engineer = new Engineer('Shaun', 2, 'shaunmichaelgreene@gmail.com', 'shaunmichaelgreene');
    expect(engineer.getRole()).toEqual(expect.any(String));
    expect(engineer.getRole()).toEqual(role);
})

test("gets the Engineer's github username", () => {
    const github = 'shaunmichaelgreene';
    const engineer = new Engineer('Shaun', 2, 'shaunmichaelgreene@gmail.com', github);
    expect(engineer.getGithub()).toEqual(expect.any(String));
    expect(engineer.getGithub()).toEqual(github);
})