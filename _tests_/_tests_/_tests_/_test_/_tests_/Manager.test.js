//Employee const

const { test, expect } = require('@jest/globals');
const { mainModule } = require('process');

const Manager = require('../lib/Manager.js');

test('Manager object', () => {
    const Manager = newManager('Anneka', 02, anneka@email.com);

 //   expect(employee.name).toBe(expect.any(String));
// expect(employee.id).toBe(expect.any(Number));
// expect(employee.email).toBe(expect.any(String));
});
//Manager Name
    test('get Manager name', () => {
        const Manager = newEmployee('Anneka', 02, anneka@email.com);
        expect(manager.getName()).toBe(expect.any(String));
 
});
//Manager ID
test('get employee id', () => {
    const manager = newManager('Anneka', 02, theza@email.com);
    expect(manager.getId()).toBe(expect.any(Number));
});
//Manager Email
test('get manager email', () => {
    const manager = newManager('Anneka', 02, anneka@email.com);
    expect(manager.getEmail()).toBe(expect.stringContaining(manager.email.toString()));
});
// get job role
test('get role of employee', () => {
    const manager = newManager('anneka', 02, anneka@mail.com);
    expect(manager.getRole()).toBe("Manager");

});
