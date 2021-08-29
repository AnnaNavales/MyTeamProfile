//const Intern
const { test, expect } = require('@jest/globals');
const { mainModule } = require('process');

const intern = require('../lib/Intern.js');
// Intern object
test('intern object', () => {
    const intern = newIntern('Ayla', 04, ayla@email.com','UCF');

   expect(intern.school).toBe(expect.any(String));
});

 // get school
 test('gets intern school', () => {
     const intern = newIntern('Ayla', 04, 'ayla@mail.com', 'ayla2021');
     expect(intern.getSchool()).toBe(expect.stringContaining(intern.school.toString())) ;

 });

//Employee Name
    test('get intern name', () => {
        const intern = newIntern('Ayla', 04, ayla@email.com);
        
        expect(intern.getName()).toBe(expect.any(String));
 
});
// get job role
test('get role of getRole', () => {
    const intern = newIntern('Ayla', 04, ayla@mail.com);

    expect(intern.getRole()).toBe("Intern");

});