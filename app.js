const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const employee = [];

function initApp() {
    startHTML();
    addEmployee();
}
function addEmployee() {
    inquirer.prompt([{
        message: "Enter employee's name",
        name: "name"
    },
    {
        type: "list",
        message: "Select employee's role",
        choices: [
            "Manager",
            "Engineer",
            "Intern"

        ],
        name: "role"
    },
    {
        message: "Enter employee's id",
        name: "id"
    },
    {
        message: "Enter employee's email address",
        name: "email"
    }])
        .then(function ({ name, role, id, email }) {
            let roleInfo = "";
            if (role === "Engineer") {
                roleInfo = "Github";

            } else if (role === "Intern") {
                roleInfo = "school name";

            } else {
                roleInfo = "office number";

            }
            inquirer.prompt([{
                message: `Enter employee's ${roleInfo}`,
                name: "roleInfo"
            },
            {
                type: "list",
                message: " Would you like to add another employee?",
                chioces: [
                    "Yes",
                    "NO"
                ],
                name: "addEmployee's"
            }])
        
        .then(function ({ roleInfo, addEmployees }) {

            if (role === "Manager") {
                newEmployee = new Manager(name, id, email, roleInfo);

            } else if (role === "Engineer") {
                newEmployee = new Engineer(name, id, email, roleInfo);

            } else {
                newEmployee = new Intern(name, id, email, roleInfo);
            }
            employee.push(newEmployee);
            addHTML(newEmployee)
        })
        .then(function () {
            if (addEmployees === "yes") {
                addEmployee();
            } else {
                finishHTML();

            }

        });
});
};



// function starthtml
function startHTML() {
const html = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MyTeamProfile</title>
    <link rel="StyleSheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/b5fbb29539.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="jumbotron" id="page-title">
        <h1 class="display-4">MyTeamProfile</h1>

        <hr class="my-4">

    </div>
    <div class="container-fluid">`;
fs.writeFile("./index.html", html, function (err) {
    if (err) {
        console.log(err);
    }
});
console.log("start");

function addHtml(employee) {
    return new Promise(function (resolve, reject) {
        const name = employee.getName();
        const role = employee.getRole();
        const id = employee.getId();
        const email = employee.getEmail();
        const officeNumber = employee.getOfficeNumber();

        let data = "";
        if (role === "Manager") {
            const officeNumber = employee.getOfficeNumber();

            data = `<div class="card" style="width: 18rem;">
                <div class="card-header">
                <i class="fas fa-user-tie"></i>
                <h4>Anneka</h4>
                <h4>Manager</h4>
            </div>
        
            <div class="card-body">
                <p class="ID">
                <ID:> ${id}
                </p>
                <p class="office">Office Number: ${officeNumber}</p>
                <p class="Email">Email:${email}<a href="mailto:anneka@mail.com">anneka@mail.com</a></p>
            
            </div>
    </div>`;
            if (role === "Engineer") {
                const github = employee.getGithub();
                data = `<div class="card" style="width: 18rem;">
                        <div class="card-header">
                            <i class="fas fa-user-tie"></i>
                            <h4>AL</h4>
                            <h4>Engineer</h4>
                        </div>

                        <div class="card-body">
                            <p class="ID">ID:${id}</p>
                            <p class="Email">Email:${email}<a href="mailto:al@mail.com">al@mail.com</a></p>
                            <p class="github">Github:${github}<a href="https://github.com/Al03"></a> </p>

                        </div>
                   
                    </div>`;

            } else if (role === "Intern") {
                const school = employee.getSchool();
                data = `<div class="card" style="width: 18rem;">
                    < div class="card-header" >
                    <i class="fas fa-user-graduate"></i>
                    <h4>Ayla</h4>
                    <h4>Intern</h4>
                </div >
                </div >
                        <div class="card-body">
                            <p class="ID">ID: ${id}</p>
                            <p class="Email">Email: ${email}<a href="mailto:ayla@mail.com">ayla@mail.com</a></p>
                            <p class="school">School: ${school}</p>

                        </div>
            </div >`
            }
            console.log("adding employee");
            fs.appendFile("./index.html", data, function (err) {
                if (err) {
                    return reject(err);
                };
                return resolve();
            });
        };
    })
    function finishHTML() {
        const html = `</div>
             
   </div>
</body >
</html > `;


        fs.appendFile("./index.html", html, function(err) {
            if (err) {
                console.log(err);
            }
        });

    }
        console.log("end");
    }
}
    initApp();