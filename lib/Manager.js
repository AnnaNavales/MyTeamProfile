// Manager constructor
const Employee = require('./Employee');
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
        
        // getRole manager
        getRole() {
            return 'Manager';
        }
        getOfficeNumber() {
        return this.officeNumber    
        }
    }
    // Export module
    module.exports = Manager;