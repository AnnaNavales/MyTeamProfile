const { get } = require("node:http");

// Engineer constructor
class Engineer {
    function Engineer (name, id, email, github githubUserName) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.githubUserName = githubUserName;
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
            return this.getGithubUserName
        }       
         //returning  role
        getRole () {
            return 'Engineer';
        }
    };
    // Export module
    module.export = Engineer;