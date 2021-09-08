// Manager constructor
const Employee = require('./Employee');
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super (name, id, email);
        this.name;
        this.id;
        this.email;
        this.officeNumber = officeNumber;
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id;
    }

    getRole() {
        return 'Manager';
    }
    getOfficeNumber() {
        return this.officeNumber
    }
}
// Export module
module.exports = Manager;