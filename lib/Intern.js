// importing employee constructor
const Employee = require('./lib/Employee');

// Intern constructor
class Intern extends Employee  {
    constructor (name, id, email, school) {
        super (name,  id, email); 
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    

    getSchool() {
        return this.school 
        }
    }
    // Export module
    module.exports = Intern;