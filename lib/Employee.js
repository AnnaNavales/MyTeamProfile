const { tsConstructorType } = require("@babel/types");
const { get } = require("http");

// Employee constructor
class Employee {
function Employee (name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email
}
    // return name, id, email from input
    getName () {
        return this.name;
    }
    getId () {
        return this.id;
    }
    getEmail () {
        return this.email;
    }
    //returning  role
    getRole () {
        return 'Employee';
    }
};
// Export module
module.export = Employee;