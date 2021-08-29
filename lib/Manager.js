// Manager constructor
const Employee = require('./Employee');
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
        
        // override employee  role to manager
        getRole () {
            return 'Manager';
        }
    }
    // Export module
    module.export = Manager;