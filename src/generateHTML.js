// create manager card
const generateManager = function (manager) {
    return `


 <div class="card" style="width: 18rem;">

            <div class="card-header">
                <i class="fas fa-user-tie"></i>
                <h4>${manager.name}</h4>
                <h4>Manager</h4>
            </div>
        
            <div class="card-body">
                <p class="ID">ID: ${manager.id}</p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
                <p class="Email">Email: <a href="mailto: ${manager.email}">${manager.email}</a></p>
            
            </div>

 </div>
 `;
}
// engineer card
const generateEngineer = function (engineer) {
    return `


        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <i class="fas fa-user-tie"></i>
                <h4>${engineer.name}</h4>
                <h4>Engineer</h4>
            </div>
            
            <div class="card-body">
                <p class="ID">ID: ${engineer.id}</p>
                <p class="Email">Email: <a href="mailto: ${engineer.email}>${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
                
            </div>
        </div>
    
    `
}
// intern card
const generateIntern = function (intern) {
    return `


        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <i class="fas fa-user-tie"></i>
                <h4>${intern.name}</h4>
                <h4>Intern</h4>
            </div>
            
            <div class="card-body">
                <p class="ID">ID: ${intern.id}</p>
                <p class="Email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${intern.github}">${intern.github}</a> </p>
                <p class="school">school: ${intern.school}</p>
            </div>
        </div>

`
}

const generateHTML = (data) => {

    // array card
    const pageArray = [];
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();
        //  manager function
        if (role === 'manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        // engineer function
        if (role === 'engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }
        // intern function
        if (role === 'intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
    }

    //join strings
    const employeeCards = pageArray.join('')
    //return to generate html page
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
}


//  html page

const generateTeamPage = function (employeeCards) {
    return `
    
        <!DOCTYPE html>
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
            <div class="container-fluid">
            
           <div class="card" style="width: 18rem;">
           <!--Team Cards-->

           ${employeeCards}
 </div>
 </div>
</body>

</html>

`;
}

// export to index
module.exports = generateHTML;