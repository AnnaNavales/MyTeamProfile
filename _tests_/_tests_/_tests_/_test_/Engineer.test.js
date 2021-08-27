//const Engineer
const { test, expect } = require('@jest/globals');
const { mainModule } = require('process');

const engineer = require('../lib/Engineer.js');

test('engineer object', () => {
    const engineer = newEngineer('AL', 03, theza@email.com);

   // expect(employee.name).toBe(expect.any(String));
   // expect(employee.id).toBe(expect.any(Number));
   // expect(employee.email).toBe(expect.any(String));
})3
//Employee Name
    test('get engineer name', () => {
        const employee = newEngineer('AL', 03, al@email.com);
        expect(engineer.getName()).toBe(expect.any(String));
 
});
//Employee ID
test('get engineer id', () => {
    const engineer = newEngineer('Al', 03, al@email.com);
    expect(engineer.getId()).toBe(expect.any(Number));
});
//Employee Email
test('get engineer email', () => {
    const engineer = newEngineer('AL', 03, al@email.com);
    expect(engineer.getEmail()).toBe(expect.stringContaining(engineer.email.toString()));
});
// get job role
test('get role of employee', () => {
    const engineer = newEngineer('AL', 03, al@mail.com);
    expect(engineer.getRole()).toBe("Engineer");

});
