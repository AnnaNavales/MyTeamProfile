// Engineer constructor

const Employee = require("./Employee.js");
class Engineer extends Employee {
    constructor (name, id, email, github) {
       super (name, id, email);
       this.github = github;
       
    }
        // return github from input
        getGithub () {
          return this.github;
        }
              
         //override employee role to engineer
        getRole () {
            return "Engineer"
        };
    }
    // Export module
    module.exports = Engineer;