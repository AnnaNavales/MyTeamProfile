// Manager constructor
class Manager {
    function Manager (name, id, email) {
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
            return 'Manager';
        }
    };
    // Export module
    module.export = Manager;