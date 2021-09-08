// manager constructor
const Manager = require('../lib/Manager');


test(' create a Manager office number via constructor argument', () => {
    const testValue = "2222";
    const Manager = new Manager('Anneka', '02', 'anneka@email.com','testValue');
    expect(manager.officeNumber).toBe(testValue);

 
});
 test('get Manager name', () => {
        const testValue = "Anneka";
        const Manager = new Employee('Anneka', '02', 'anneka@email.com');
        expect(manager.getName()).toBe(Anneka);
 
});

test('get employee id', () => {
    const testvalue = "02";
    const manager = new Manager('Anneka', '02', 'theza@email.com');
    expect(manager.getId()).toBe(expect.any(Number));
});

test('get manager email', () => {
    const testValue = "anneka@email.com";
    const manager = new Manager('Anneka', '02', 'testValue');
    expect(manager.getEmail()).toBe(testValue);
});

test('get role of employee', () => {
    const testValue = "Manager";
    const manager = new Manager('anneka', '02', 'anneka@mail.com');
    expect(manager.getRole()).toBe("Manager");

});
