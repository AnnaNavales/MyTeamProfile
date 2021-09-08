// link to page
const generateHTML = require('./src/generateHTML.js');
//Employee profile
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

// node module
const fs = require('fs');
const inquirer = require('inquirer');



const teamArray = [];

// Manager prompt
const addManager = () => {
    return inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: 'managers name',
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
            message: "Please enter managers ID",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Enter the managers ID!');
                    return false;
                } else {
                    return true;

                }
            }

        },

        {
            type: 'input',
            name: 'email',
            message: "Enter manager email",
            validate: nameInput => {

                 if(isNaN(nameInput)) {
                    return true;
                } else {
                    console.log('Please enter email!')
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter managers office number",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Enter the managers office number!');
                    return false;
                } else {
                    return true;

                }
            }
        }
    ])
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);

            teamArray.push(manager);
            console.log(manager);
            addEmployee()

        })
        .catch(error => console.log(console.log(error)))
};





const addEmployee = () => {
    console.log(`

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
            // validate: email => {
            //     valid = aaamail.com.test(email)
            //     if (valid) {
            //         return true;
            //     } else {
            //         console.log('Enter email!')
            //         return false;

            //     }
            // }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter github username.',
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Enter github username!")
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
        .then(employeeData => {
            let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github);
                console.log(employee);

            } else if (role === "Intern") {
                employee = new Intern(name, id, email, school);
            }

            teamArray.push(employee);
            if (confirmAddEmployee) {
                return addEmployee();
            } else {
                return writeFile(teamArray);
            }
        })
};

// Function to generate file system
const writeFile = data => {
    const htmlString = generateHTML(data)
    console.log(htmlString)
    fs.writeFile('./index.html', htmlString, err => {
        // if there is error
        if (err) {
            console.log(err);
            return;
            // profile created
        } else {
            console.log("Team profile has been successfully created! check index html")

        }
    })
};

addManager()
//     .then(()=>addEmployee())
//     .then(teamArray => {
//         return generateHTML(teamArray);
//     })
//     .then(pageHTML => {
//         return writeFile(pageHTML);

//     })

//     .catch(err => {
//         console.log(err);

//     });
