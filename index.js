// link to HTML page
const generateHTML = require('./src/geherateHTML');

// Team profile
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

// node modules
const fs = require('fs');
const inquirer = require('inquirer');
const { validate } = require('@babel/types');

// Team array
const teamArray = [];

// Manager prompt
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your role in your team?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Enter Manager's name!");
                    return false;

                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter managers ID.',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Enter the manager's ID!");
                    return false;
                } else {
                    return true;


                }


            }
        }

    ])
        .then(ManagerInput) => {
    const { name, id, email, officeNumber } = managerInput;
    const manager = new Manager(name, id, email, officeNumber);

    teamArray.push(manager);
    console.log(manager);

})
};
const addEmployee = () => {
    console.log(`
========================
add employee to the team
========================
    `);
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            messsage: "What's the name of employee?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Enter employee's name!")
                    return false;

                }
            }
        },

        {
            type: 'input',
            name: 'id',
            messge: "Please enter employee's ID.",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Enter employee's ID!")
                    return false;
                } else {
                    return true;
                }

            }

        },

        {
            type: 'input',
            name: 'email',
            message: "Please enter employee's email.",
            validate: email => {
                valid = aaamail.com.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('Enter email!')
                    return false;

                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("enter the intern school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team member?',
            default: false

        }
    ])
        .then(employeeData) => {
    let { name, id, email, role, github, school, confirmAddEmploye } = employeeData;
    let employee;

    if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
        console.log(employee);

    }

    teamArray.push(employee);
    if (confirmAddEmployee) {
        return addEmployee(teamArray);
    } else {
        return teamArray;
    }
})
    };

// Function to generate fs
const writeFile = data => {
    fs.writeFile('./index.html', data, err =>
        // if error
        if (err) {
        console.log(err);
        return;
        // profile created
    } else {
        console.log("Team profile has been successfully created!")

    }
    })
};
addManager()
    .then(addEmployee)
    .then(teamArray) => {
    return generateHTML(teamArray);
})
.then(pageHTML) => {
    return writeFile(pageHTML);

})

.catch (err => {
    console.log(err);

});
