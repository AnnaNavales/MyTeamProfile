//const Intern

const Intern = require("./lib/Intern.js");
test('create an intern school via constructor', () => {
    const testValue = "UCF"
    const intern = new Intern('Ayla', '04', 'ayla@email.com','testValue', 'Intern');

   expect(intern.school).toBe(testValue);

});
// get job role
test("getRole() should return \"Intern\"", () => {
    const testValue= "Intern";
    const intern = new Intern('Ayla', '04', 'ayla@mail.com', 'UCF', 'Intern');

    expect(intern.getRole()).toBe("testValue");

});