// importing employee constructor
const Employee = require('./lib/Employee');

// Intern constructor
class Intern extends Employee  {
    constructor (name, id, email, github, school) {
        super (name,  id, email, github, school); 
        this.school = school;
    }
    //returning school from input
    getSchool () {
        this.school = school;
    }
    
    // override employee role
      
    getRole () {
            return "Intern";
        }
    }
    // Export module
    module.exports = Intern;