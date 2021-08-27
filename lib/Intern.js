const { get } = require("http");

// Intern constructor
class Intern {
    function Intern (name, id, email, githubUserName) {
        this.name = name;
        this.id = id;
        this.email = email
        this.githubUserName = githubUserName
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
        getGithubUserName () {
            return this.githubUserName
        }
        //returning employee role
        getRole () {
            return 'Employee';
        }
    };
    // Export module
    module.export = Employee