// manager constructor
const Manager = require('../lib/Manager.js');

test(' create a Manager object', () => {
    const Manager = newManager('Anneka', '02', 'anneka@email.com');


});
//Manager Name
    test('get Manager name', () => {
        const Manager = new Employee('Anneka', '02', 'anneka@email.com');
        expect(manager.getName()).toBe(expect.any(String));
 
});
//Manager ID
test('get employee id', () => {
    const manager = new Manager('Anneka', '02', 'theza@email.com');
    expect(manager.getId()).toBe(expect.any(Number));
});
//Manager Email
test('get manager email', () => {
    const manager = newManager('Anneka', '02', 'anneka@email.com');
    expect(manager.getEmail()).toBe(expect.stringContaining(manager.email.toString()));
});
// get job role
test('get role of employee', () => {
    const manager = newManager('anneka', '02', 'anneka@mail.com');
    expect(manager.getRole()).toBe("Manager");

});
