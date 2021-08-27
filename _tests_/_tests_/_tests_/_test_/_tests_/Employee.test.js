//const Employee
const { test, expect } = require('@jest/globals');
const { mainModule } = require('process');

const Employee = require('../lib/Employee.js');

test('employee object', () => {
    const employee = newEmployee('Theza', 01, theza@email.com);

    expect(employee.name).toBe(expect.any(String));
    expect(employee.id).toBe(expect.any(Number));
    expect(employee.email).toBe(expect.any(String));
});
//Employee Name
    test('get employee name', () => {
        const employee = newEmployee('Theza', 01, theza@email.com);
        expect(employee.getName()).toBe(expect.any(String));
 
});
//Employee ID
test('get employee id', () => {
    const employee = newEmployee('Theza', 01, theza@email.com);
    expect(employee.getId()).toBe(expect.any(Number));
});
//Employee Email
test('get employee email', () => {
    const employee = newEmployee('Theza', 01, theza@email.com);
    expect(employee.getEmail()).toBe(expect.stringContaining(employee.email.toString()));
});
// get job role
test('get role of employee', () => {
    const employee = newEmployee('Theza', 01, theza@mail.com);
    expect(employee.getRole()).toBe("Employee");

});
