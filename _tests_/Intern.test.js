//const Intern

const Intern = require('../lib/Intern');
// Intern object
test('create an intern object', () => {
    const intern = new Intern('Ayla', 04, 'ayla@email.com','UCF');

   expect(intern.school).toBe(expect.any(String));
});

 // get school
 test('gets intern school', () => {
     const intern = new Intern('Ayla', 04, 'ayla@mail.com', 'ayla2021');
     expect(intern.getSchool()).toBe(expect.stringContaining(intern.school.toString())) ;

 });

//Employee Name
    test('get intern name', () => {
        const intern = new Intern('Ayla', 04, 'ayla@email.com');
        
        expect(intern.getName()).toBe(expect.any(String));
 
});
// get job role
test('get role of getRole', () => {
    const intern = new Intern('Ayla', 04, 'ayla@mail.com');

    expect(intern.getRole()).toBe("Intern");

});