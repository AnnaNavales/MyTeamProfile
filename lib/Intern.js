// importing employee constructor
const Employee = require('./Employee');

// Intern constructor
class Intern extends Employee  {
    constructor (name, id, email, school) {
        super (name,  id, email); 
        this.school = school;
    }
    //returning school from input
    getSchool () {
        this.school = school;
    }
    

    getRole () {
            return "Intern";
        }
    }
    // Export module
    module.exports = Intern;