// Employee constructor

const Employee = require('../lib/Employee.js');

test('create an employee object', () => {
    const employee = new Employee();
    expect(typeof (employee)).toBe(object)
});
//Employee Name
test('get employee name via constructor argumment', () => {
    const name = "Anneka";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);

});
//Employee Id

test('create employee id via constructor argument', () => {
    const testValue = "01"
    const employee = new Employee('Theza', 'testValue');
    expect(employee.Id).toBe(testValue);
});
//Employee Email
test('set employee email', () => {
    const testValue = "theza@mail.com";
    const employee = new Employee('Theza', '01', 'testValue');
    expect(employee.Email()).toBe(testValue);
});

test("get name via getName()", () => {
    const testValue = "Theza";
    const employee = new Employee("Theza, 01, testValue");
    expect(employee.getName()).toBe(testValue);

});
test("get Id via getId()", () => {
    const testValue = "01";
    const employee = new Employee("Theza, 01, testValue");
    expect(employee.getId()).toBe(testValue);

});
test("get email via getEmail()", () => {
    const testValue = "Theza";
    const employee = new Employee("Theza, 01, testValue");
    expect(employee.getEmail()).toBe(testValue);

});

// get job role
test("getRole() should return\"Employee\" ", () => {
    const testValue = "Employee";
    const employee = new Employee('Theza', '01', 'theza@mail.com', 'Employee');
    expect(employee.getRole()).toBe("testValue");


});

test("create employee instance", () => {
    const employee = new Employee("Theza, 01, testValue");
    expect(employee.email()).toBe(testValue);

});

test("set email via constructor argument()", () => {
    const testValue = "theza@mail.com";
    const employee = new Employee("Theza, 01, testValue");
    expect(employee.email()).toBe(testValue);

});
test("get name via getName()", () => {
    const testValue = "Theza";
    const employee = new Employee("Theza, 01, testValue");
    expect(employee.getName()).toBe(testValue);

});
test("get name via getId()", () => {
    const testValue = "01";
    const employee = new Employee("Theza, 01, testValue");
    expect(employee.getId()).toBe(testValue);

});
test("get name via getEmail()", () => {
    const testValue = "theza@mail.com";
    const employee = new Employee("Theza, 01, testValue");
    expect(employee.getEmail()).toBe(testValue);

});
test("getRole(), should return\"Employee\"", () => {
    const testValue = "Employee";
    const employee = new Employee("Theza, 01, testValue");
    expect(employee.getRole()).toBe(testValue);

});